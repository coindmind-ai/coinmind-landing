'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Mic,
  Camera,
  ArrowUp,
  Home,
  ArrowLeftRight,
  MessageCircle,
  User,
  ReceiptText,
  Wifi,
  ArrowRight,
  RotateCcw,
} from 'lucide-react'
import { useLandingLanguage } from '@/components/LanguageProvider'
import { APP_SIGNUP_URL } from '@/lib/i18n/landing-copy'
import { trackLandingEvent } from '@/lib/analytics'

type AppTab = 'dashboard' | 'transactions' | 'chat' | 'profile'

interface CustomParsedResult {
  prompt: string
  replyText: string
  amount: string
  converted: string
  category: string
  isIncome: boolean
}

const USD_RATES: Record<string, number> = {
  USD: 1,
  SAR: 0.2667,
  EUR: 1.09,
  GBP: 1.28,
  AED: 0.2723,
  EGP: 0.0204,
  YER: 0.002,
}

const SAR_RATES: Record<string, number> = {
  SAR: 1,
  USD: 3.75,
  EUR: 4.1,
  GBP: 4.8,
  AED: 1.02,
  EGP: 0.0765,
  YER: 0.0075,
}

const AR_CURRENCY_SYMBOLS: Record<string, string> = {
  SAR: 'ر.س',
  USD: 'دولار',
  EUR: 'يورو',
  GBP: 'ج.إ',
  AED: 'د.إ',
  EGP: 'ج.م',
  YER: 'ر.ي',
}

const EN_CURRENCY_PREFIX: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  SAR: 'SAR ',
  AED: 'AED ',
  EGP: 'EGP ',
  YER: 'YER ',
}

function parseCustomExpenseInput(
  raw: string,
  locale: 'en' | 'ar',
): CustomParsedResult {
  const text = raw.trim()
  const lower = text.toLowerCase()

  const numMatch = text.match(/(\d[\d,]*(?:\.\d+)?)/)
  const numericVal = numMatch
    ? parseFloat(numMatch[1].replace(/,/g, ''))
    : locale === 'ar'
      ? 85
      : 24

  let currency = locale === 'ar' ? 'SAR' : 'USD'
  if (/€|\beur\b|\beuros?\b|يورو/i.test(text)) currency = 'EUR'
  else if (/£|\bgbp\b|استرليني/i.test(text)) currency = 'GBP'
  else if (/\$|\busd\b|\bdollars?\b|دولار/i.test(text)) currency = 'USD'
  else if (/\bsar\b|ريال سعودي|ريال/i.test(text) && !/يمني/i.test(text))
    currency = 'SAR'
  else if (/\byer\b|ريال يمني/i.test(text)) currency = 'YER'
  else if (/\begp\b|جنيه/i.test(text)) currency = 'EGP'
  else if (/\baed\b|درهم/i.test(text)) currency = 'AED'

  const isIncome =
    /\b(salary|paid me|received|income|freelance|bonus|gift from)\b|راتب|استلمت|دخل|حوالة|مكافأة/i.test(
      lower,
    )

  let category = locale === 'ar' ? 'مشتريات عامة' : 'General Expense'
  if (isIncome) {
    category = locale === 'ar' ? 'دخل وراتب' : 'Income & Salary'
  } else if (
    /\b(coffee|lunch|dinner|breakfast|cafe|restaurant|food|pizza|burger|pastr)\b|قهوة|عشاء|غداء|فطور|مطعم|طعام|كافيه|حلى/i.test(
      lower,
    )
  ) {
    category = locale === 'ar' ? 'طعام ومقاهي' : 'Food & Dining'
  } else if (
    /\b(uber|taxi|gas|fuel|metro|train|flight|bus|parking)\b|أوبر|تاكسي|بنزين|مواصلات|مطار|وقود|قطار/i.test(
      lower,
    )
  ) {
    category = locale === 'ar' ? 'مواصلات وسفر' : 'Transportation'
  } else if (
    /\b(grocer|supermarket|market|carrefour|walmart)\b|مقاضي|بقالة|سوبرماركت|تموينات/i.test(
      lower,
    )
  ) {
    category = locale === 'ar' ? 'مقاضي وبقالة' : 'Groceries'
  } else if (
    /\b(rent|electric|internet|water|bill|phone)\b|إيجار|كهرباء|إنترنت|فاتورة|جوال/i.test(
      lower,
    )
  ) {
    category = locale === 'ar' ? 'السكن والفواتير' : 'Housing & Bills'
  }

  const formattedNum = numericVal.toLocaleString('en-US', {
    minimumFractionDigits: currency === 'YER' ? 0 : 2,
    maximumFractionDigits: 2,
  })

  if (locale === 'ar') {
    const arUnit = AR_CURRENCY_SYMBOLS[currency] ?? 'ر.س'
    const sarValue = numericVal * (SAR_RATES[currency] ?? 1)
    const formattedSar = sarValue.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    const amountStr = `${formattedNum} ${arUnit}`

    return {
      prompt: text,
      replyText: `تم حفظ ${amountStr} ضمن فئة ${category}.`,
      amount: amountStr,
      converted:
        currency === 'SAR' ? `${formattedSar} ر.س` : `≈ ${formattedSar} ر.س`,
      category,
      isIncome,
    }
  }

  const enPrefix = EN_CURRENCY_PREFIX[currency] ?? '$'
  const usdValue = numericVal * (USD_RATES[currency] ?? 1)
  const formattedUsd = usdValue.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  const amountStr = `${enPrefix}${formattedNum}`

  return {
    prompt: text,
    replyText: `Saved ${amountStr} under ${category}.`,
    amount: amountStr,
    converted: currency === 'USD' ? `$${formattedUsd}` : `≈ $${formattedUsd}`,
    category,
    isIncome,
  }
}

function AndroidStatusBar() {
  return (
    <div
      dir="ltr"
      className="relative flex h-7 shrink-0 items-center justify-between bg-[#F2F1ED] px-5 pt-1 text-[10px] font-semibold text-[#171717] select-none"
    >
      <span className="tabular-nums">10:24</span>
      {/* Centered flagship Android punch-hole camera */}
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-1/2 flex h-2.5 w-2.5 -translate-x-1/2 items-center justify-center rounded-full bg-[#0A0A0A]"
      >
        <span className="h-1 w-1 rounded-full bg-[#262626]" />
      </span>
      <div className="flex items-center gap-1.5 text-[#171717]">
        <Wifi className="h-3 w-3 stroke-[2.2]" aria-hidden="true" />
        <svg
          viewBox="0 0 14 14"
          className="h-2.5 w-2.5 fill-current"
          aria-hidden="true"
        >
          <path d="M1 12.5h11.5V1L1 12.5z" />
        </svg>
        <svg
          viewBox="0 0 10 14"
          className="h-3 w-2 fill-current"
          aria-hidden="true"
        >
          <rect x="3" y="0.5" width="4" height="1.5" rx="0.5" />
          <rect x="1.5" y="2" width="7" height="11" rx="1.2" />
        </svg>
      </div>
    </div>
  )
}

export function InteractiveAiDemo() {
  const { copy, locale } = useLandingLanguage()
  const [activeAppTab, setActiveAppTab] = useState<AppTab>('chat')
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [draft, setDraft] = useState('')
  const [submittedState, setSubmittedState] = useState<{
    prompt: string
  } | null>(null)

  const customResult = submittedState
    ? parseCustomExpenseInput(submittedState.prompt, locale)
    : null

  const activeScenario =
    copy.demo.scenarios[selectedIndex] ?? copy.demo.scenarios[0]

  const hasDraft = draft.trim().length > 0

  const handleSelectScenario = (index: number, id: string) => {
    setActiveAppTab('chat')
    setSelectedIndex(index)
    setSubmittedState(null)
    trackLandingEvent('interactive_demo_try', { scenario: id })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const rawValue =
      draft.trim() || String(formData.get('demoPrompt') || '').trim()
    if (!rawValue) return
    setSubmittedState({ prompt: rawValue })
    setDraft('')
    trackLandingEvent('interactive_demo_try', { scenario: 'custom_input' })
  }

  return (
    <div id="demo" className="relative mx-auto flex justify-center">
      {/* Warm ambient glow behind phone */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-8 h-[560px] w-[280px] -z-10 rounded-full bg-radial from-coinmind-accent/30 via-coinmind-accent/8 to-transparent blur-2xl"
      />

      {/* True 9:19.5 Flagship Android Phone Width & Proportions (304px × 658px) */}
      <div className="relative aspect-[9/19.5] w-[288px] sm:w-[304px]">
        {/* Outer anodized aluminum frame */}
        <div className="relative h-full w-full rounded-[2.4rem] bg-[#1A1A1A] p-[6px] shadow-[0_30px_70px_-15px_rgba(10,10,10,0.42)] ring-1 ring-black/20">
          {/* Android right-side hardware power & volume buttons */}
          <span
            aria-hidden="true"
            className="absolute top-[118px] -right-[2.5px] h-9 w-[2.5px] rounded-r-xs bg-[#333333]"
          />
          <span
            aria-hidden="true"
            className="absolute top-[168px] -right-[2.5px] h-16 w-[2.5px] rounded-r-xs bg-[#333333]"
          />

          {/* Inner OLED black glass bezel */}
          <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.1rem] bg-[#0A0A0A] p-[3px]">
            {/* Real CoinMind Mobile Screen (`p.sand[100]` #F2F1ED canvas) */}
            <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.92rem] bg-[#F2F1ED] text-[#0A0A0A]">
              {/* Android Status Bar */}
              <AndroidStatusBar />

              {/* === TAB 1: DASHBOARD === */}
              {activeAppTab === 'dashboard' && (
                <div className="flex flex-1 flex-col justify-between overflow-y-auto px-3.5 pt-2 pb-3">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-[#0A0A0A]">
                        {copy.demo.tabs.dashboard}
                      </h3>
                      <span className="rounded-full bg-[#E8E7E1] px-2.5 py-0.5 text-[10px] font-medium text-[#525252]">
                        {copy.demo.dashboardView.greeting}
                      </span>
                    </div>

                    {/* Net Balance Card */}
                    <div className="rounded-2xl border border-[#DBD9D1] bg-white p-3.5">
                      <div className="text-[10px] font-medium text-[#525252]">
                        {copy.demo.dashboardView.netBalanceLabel}
                      </div>
                      <div className="mt-0.5 text-xl font-bold tracking-tight text-[#0A0A0A]">
                        {copy.demo.dashboardView.netBalanceValue}
                      </div>
                      <div className="mt-2.5 grid grid-cols-2 gap-2 border-t border-[#E8E7E1] pt-2.5 text-[11px]">
                        <div>
                          <div className="text-[10px] text-[#525252]">
                            {copy.demo.dashboardView.incomeLabel}
                          </div>
                          <div className="font-bold text-[#15803D]">
                            {copy.demo.dashboardView.incomeValue}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] text-[#525252]">
                            {copy.demo.dashboardView.expensesLabel}
                          </div>
                          <div className="font-bold text-[#B4541C]">
                            {copy.demo.dashboardView.expensesValue}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Top Categories Card */}
                    <div className="rounded-2xl border border-[#DBD9D1] bg-white p-3.5">
                      <div className="mb-2.5 text-[11px] font-bold text-[#0A0A0A]">
                        {copy.demo.dashboardView.topCategoriesLabel}
                      </div>
                      <div className="space-y-2.5">
                        {copy.demo.dashboardView.categories.map((cat) => (
                          <div key={cat.name} className="space-y-1">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-medium text-[#404040]">
                                {cat.name}
                              </span>
                              <span className="font-semibold text-[#0A0A0A]">
                                {cat.value}
                              </span>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E8E7E1]">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${cat.share}%`,
                                  backgroundColor: cat.color,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* === TAB 2: TRANSACTIONS === */}
              {activeAppTab === 'transactions' && (
                <div className="flex flex-1 flex-col overflow-y-auto px-3.5 pt-2 pb-3">
                  <div className="mb-2.5 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#0A0A0A]">
                      {copy.demo.tabs.transactions}
                    </h3>
                    <span className="text-[10px] font-medium text-[#525252]">
                      {copy.demo.transactionsView.subtitle}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {copy.demo.transactionsView.items.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between gap-2 rounded-2xl border border-[#DBD9D1] bg-white px-3 py-2.5"
                      >
                        <div className="min-w-0">
                          <div className="truncate text-xs font-semibold text-[#0A0A0A]">
                            {item.title}
                          </div>
                          <div className="text-[10px] text-[#525252]">
                            {item.category}
                          </div>
                        </div>
                        <div className="shrink-0 text-end">
                          <div
                            className={`text-xs font-bold ${
                              item.isIncome
                                ? 'text-[#15803D]'
                                : 'text-[#B4541C]'
                            }`}
                          >
                            {item.original}
                          </div>
                          <div className="text-[10px] text-[#737373]">
                            {item.converted}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* === TAB 3: AI ASSISTANT CHAT (Real `chat-screen.tsx` layout) === */}
              {activeAppTab === 'chat' && (
                <>
                  {/* Screen Header (`chat-screen.tsx`) */}
                  <div className="flex shrink-0 items-center justify-between px-3.5 pt-1.5 pb-2">
                    <div className="min-w-0">
                      <div className="text-sm font-bold leading-tight text-[#0A0A0A]">
                        {copy.demo.chatTitle}
                      </div>
                      <div className="truncate text-[10px] text-[#525252]">
                        {copy.demo.chatSubtitle}
                      </div>
                    </div>
                    {customResult && (
                      <button
                        type="button"
                        onClick={() => setSubmittedState(null)}
                        aria-label={copy.demo.resetAria}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E8E7E1] text-[#525252] hover:text-[#171717] focus-visible:ring-2 focus-visible:ring-coinmind-primary focus:outline-none"
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>

                  {/* Quick Scenario Chips */}
                  <div className="flex shrink-0 gap-1 px-3.5 pb-2">
                    {copy.demo.scenarios.map((scenario, idx) => {
                      const isActive = !customResult && idx === selectedIndex
                      return (
                        <button
                          key={scenario.id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() =>
                            handleSelectScenario(idx, scenario.id)
                          }
                          className={`flex-1 truncate rounded-full px-2 py-1 text-[10px] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-coinmind-primary focus:outline-none ${
                            isActive
                              ? 'bg-[#171717] text-white'
                              : 'border border-[#DBD9D1] bg-white text-[#525252] hover:text-[#171717]'
                          }`}
                        >
                          {scenario.tabLabel}
                        </button>
                      )
                    })}
                  </div>

                  {/* MessageList (`message-bubble.tsx` exact bubble tails & borders) */}
                  <div className="flex flex-1 flex-col justify-between overflow-y-auto px-3.5 py-2">
                    {/* Prior quick turn so the tall 9:19.5 screen reads like a live active thread */}
                    <div className="space-y-2 opacity-85">
                      <div className="flex flex-col items-end">
                        <div className="max-w-[82%] rounded-2xl rounded-ee-xs bg-[#171717] px-3 py-1.5 text-[11px] font-medium text-white">
                          {locale === 'ar'
                            ? 'استلمت راتب 8,500 ريال اليوم'
                            : 'Got paid $3,400 salary today'}
                        </div>
                      </div>
                      <div className="max-w-[86%] rounded-2xl rounded-es-xs border border-[#DBD9D1] bg-white px-3 py-2 text-[11px] text-[#0A0A0A]">
                        <span className="font-semibold text-[#15803D]">
                          {locale === 'ar' ? '+8,500 ر.س' : '+$3,400.00'}
                        </span>{' '}
                        <span className="text-[#525252]">
                          {locale === 'ar'
                            ? '• تم الحفظ ضمن الدخل'
                            : '• Saved under Income'}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      key={
                        customResult
                          ? `custom-${customResult.prompt}-${locale}`
                          : `${activeScenario.id}-${locale}`
                      }
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.16 }}
                      className="space-y-2"
                    >
                      {/* User Bubble (`alignSelf: flex-end`, `#171717`, `borderBottomEndRadius: xs`) */}
                      <div className="flex flex-col items-end">
                        <span className="mb-0.5 text-[9px] font-medium text-[#525252]">
                          {customResult
                            ? copy.demo.liveTestLabel
                            : activeScenario.inputTypeLabel}
                        </span>
                        <div className="max-w-[86%] rounded-2xl rounded-ee-xs bg-[#171717] px-3 py-2 text-[11px] leading-snug font-medium text-white">
                          {customResult
                            ? customResult.prompt
                            : activeScenario.prompt}
                        </div>
                      </div>

                      {/* Assistant Bubble (`alignSelf: flex-start`, white card, `#DBD9D1` border, `borderBottomStartRadius: xs`) */}
                      <div className="max-w-[94%] rounded-2xl rounded-es-xs border border-[#DBD9D1] bg-white p-3">
                        <p className="text-[11px] leading-snug font-medium text-[#0A0A0A]">
                          {customResult
                            ? customResult.replyText
                            : activeScenario.replyText}
                        </p>

                        {!customResult && activeScenario.insightBreakdown ? (
                          <div className="mt-2 space-y-1.5 border-t border-[#E8E7E1] pt-2">
                            {activeScenario.insightBreakdown.map((row) => (
                              <div key={row.name} className="space-y-0.5">
                                <div className="flex items-center justify-between text-[10px]">
                                  <span className="text-[#525252]">
                                    {row.name}
                                  </span>
                                  <span className="font-semibold text-[#0A0A0A]">
                                    {row.value} ({row.share}%)
                                  </span>
                                </div>
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E8E7E1]">
                                  <div
                                    className="h-full rounded-full bg-[#D96B2B]"
                                    style={{ width: `${row.share}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <>
                            <div className="mt-2 space-y-1.5 rounded-xl bg-[#F7F6F3] p-2 text-[10px]">
                              <div className="grid grid-cols-2 gap-2">
                                <div>
                                  <div className="text-[9px] text-[#525252]">
                                    {copy.demo.amountLabel}
                                  </div>
                                  <div
                                    className={`font-bold ${
                                      customResult?.isIncome
                                        ? 'text-[#15803D]'
                                        : 'text-[#B4541C]'
                                    }`}
                                  >
                                    {customResult
                                      ? customResult.amount
                                      : activeScenario.amount}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-[9px] text-[#525252]">
                                    {copy.demo.convertedLabel}
                                  </div>
                                  <div className="font-bold text-[#0A0A0A]">
                                    {customResult
                                      ? customResult.converted
                                      : activeScenario.converted}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between border-t border-[#E8E7E1] pt-1.5">
                                <span className="text-[9px] text-[#525252]">
                                  {copy.demo.categoryLabel}
                                </span>
                                <span className="font-semibold text-[#0A0A0A]">
                                  {customResult
                                    ? customResult.category
                                    : activeScenario.category}
                                </span>
                              </div>
                            </div>

                            {/* Real `chat.transactionLogged` action link from `message-bubble.tsx` */}
                            <button
                              type="button"
                              onClick={() => setActiveAppTab('transactions')}
                              className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#15803D] hover:underline"
                            >
                              <ReceiptText
                                className="h-3 w-3"
                                aria-hidden="true"
                              />
                              <span>{copy.demo.transactionLogged}</span>
                            </button>
                          </>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Real `Composer` row from `composer.tsx` (Camera + Input + Mic/Amber ArrowUp) */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex shrink-0 items-center gap-1.5 border-t border-[#DBD9D1] bg-white px-2.5 py-2"
                  >
                    <button
                      type="button"
                      onClick={() => handleSelectScenario(2, 'receipt-ocr')}
                      aria-label={copy.demo.cameraAria}
                      className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#F2F1ED] text-[#525252] transition-colors hover:text-[#171717]"
                    >
                      <Camera className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>

                    <label htmlFor="landing-demo-input" className="sr-only">
                      {copy.demo.placeholder}
                    </label>
                    <input
                      id="landing-demo-input"
                      name="demoPrompt"
                      type="text"
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      placeholder={copy.demo.placeholder}
                      className="h-7 min-w-0 flex-1 rounded-full border border-[#C9C6BB] bg-white px-2.5 text-[11px] text-[#0A0A0A] placeholder:text-[#737373] focus:border-[#171717] focus:ring-0 focus:outline-none"
                    />

                    {hasDraft ? (
                      <button
                        type="submit"
                        aria-label={copy.demo.sendAria}
                        className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#B4541C] text-white transition-opacity hover:opacity-90"
                      >
                        <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleSelectScenario(0, 'voice-note')}
                        aria-label={copy.demo.voiceAria}
                        className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#F2F1ED] text-[#525252] transition-colors hover:text-[#171717]"
                      >
                        <Mic className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </form>
                </>
              )}

              {/* === TAB 4: PROFILE === */}
              {activeAppTab === 'profile' && (
                <div className="flex flex-1 flex-col justify-between overflow-y-auto px-3.5 pt-2 pb-3">
                  <div className="space-y-2.5">
                    <h3 className="text-sm font-bold text-[#0A0A0A]">
                      {copy.demo.tabs.profile}
                    </h3>
                    <div className="rounded-2xl border border-[#DBD9D1] bg-white p-3.5">
                      <div dir="ltr" className="text-xs font-bold text-[#0A0A0A]">
                        CoinMind AI
                      </div>
                      <div className="mt-0.5 text-[10px] font-medium text-[#15803D]">
                        {copy.demo.profileView.memberBadge}
                      </div>
                    </div>
                    <div className="divide-y divide-[#E8E7E1] rounded-2xl border border-[#DBD9D1] bg-white px-3.5 text-[11px]">
                      <div className="flex items-center justify-between py-2.5">
                        <span className="text-[#525252]">
                          {copy.demo.profileView.currencyLabel}
                        </span>
                        <span className="font-semibold text-[#0A0A0A]">
                          {copy.demo.profileView.currencyValue}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2.5">
                        <span className="text-[#525252]">
                          {copy.demo.profileView.languageLabel}
                        </span>
                        <span className="font-semibold text-[#0A0A0A]">
                          {copy.demo.profileView.languageValue}
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2.5">
                        <span className="text-[#525252]">
                          {copy.demo.profileView.syncLabel}
                        </span>
                        <span className="font-semibold text-[#15803D]">
                          {copy.demo.profileView.syncValue}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={APP_SIGNUP_URL}
                    onClick={() =>
                      trackLandingEvent('interactive_demo_continue')
                    }
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#171717] py-2.5 text-xs font-semibold text-white"
                  >
                    <span>{copy.demo.profileView.openWebCta}</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )}

              {/* Real 4-Tab Bottom Bar (`(tabs)/_layout.tsx`) */}
              <div className="shrink-0 border-t border-[#DBD9D1] bg-white px-1.5 pt-1.5 pb-1">
                <div className="grid grid-cols-4 gap-0.5">
                  {(
                    [
                      {
                        id: 'dashboard',
                        label: copy.demo.tabs.dashboard,
                        Icon: Home,
                      },
                      {
                        id: 'transactions',
                        label: copy.demo.tabs.transactions,
                        Icon: ArrowLeftRight,
                      },
                      {
                        id: 'chat',
                        label: copy.demo.tabs.chat,
                        Icon: MessageCircle,
                      },
                      {
                        id: 'profile',
                        label: copy.demo.tabs.profile,
                        Icon: User,
                      },
                    ] as const
                  ).map(({ id, label, Icon }) => {
                    const focused = activeAppTab === id
                    return (
                      <button
                        key={id}
                        type="button"
                        aria-pressed={focused}
                        onClick={() => setActiveAppTab(id)}
                        className={`flex flex-col items-center justify-center gap-0.5 rounded-lg py-1 transition-colors focus-visible:ring-2 focus-visible:ring-coinmind-primary focus:outline-none ${
                          focused
                            ? 'text-[#171717]'
                            : 'text-[#737373] hover:text-[#404040]'
                        }`}
                      >
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={focused ? 2.4 : 1.75}
                          aria-hidden="true"
                        />
                        <span
                          className={`max-w-full truncate text-[9px] ${
                            focused ? 'font-bold' : 'font-medium'
                          }`}
                        >
                          {label}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* Android Bottom Gesture Navigation Bar */}
                <div
                  aria-hidden="true"
                  className="mx-auto mt-1.5 h-[3.5px] w-20 rounded-full bg-[#171717]/25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
