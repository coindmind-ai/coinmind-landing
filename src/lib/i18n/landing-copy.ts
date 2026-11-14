export type Locale = 'en' | 'ar'

export const APP_LOGIN_URL = 'https://app.coinmind-ai.com/auth/login'
export const APP_SIGNUP_URL = 'https://app.coinmind-ai.com/auth/signup'
export const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.coinmind_ai.app'
export const SUPPORT_EMAIL = 'support@coinmind-ai.com'

export interface LandingCopy {
  nav: {
    features: string
    howItWorks: string
    security: string
    pricing: string
    faqs: string
    login: string
    tryFree: string
    langSwitchLabel: string
    langSwitchAria: string
    mobileMenuAria: string
  }
  hero: {
    originBadge: string
    headlineStart: string
    headlineHighlight: string
    headlineEnd: string
    subheadline: string
    primaryCta: string
    googlePlayTop: string
    googlePlayBottom: string
    iosStatus: string
    pills: Array<{ label: string }>
  }
  demo: {
    chatTitle: string
    chatSubtitle: string
    placeholder: string
    sendAria: string
    voiceAria: string
    cameraAria: string
    resetAria: string
    liveTestLabel: string
    transactionLogged: string
    amountLabel: string
    convertedLabel: string
    categoryLabel: string
    tabs: {
      dashboard: string
      transactions: string
      chat: string
      profile: string
    }
    dashboardView: {
      greeting: string
      netBalanceLabel: string
      netBalanceValue: string
      incomeLabel: string
      incomeValue: string
      expensesLabel: string
      expensesValue: string
      topCategoriesLabel: string
      categories: Array<{ name: string; value: string; share: number; color: string }>
    }
    transactionsView: {
      subtitle: string
      items: Array<{
        title: string
        category: string
        original: string
        converted: string
        isIncome?: boolean
      }>
    }
    profileView: {
      memberBadge: string
      currencyLabel: string
      currencyValue: string
      languageLabel: string
      languageValue: string
      syncLabel: string
      syncValue: string
      openWebCta: string
    }
    scenarios: Array<{
      id: string
      tabLabel: string
      mode: 'voice' | 'chat' | 'receipt' | 'insight'
      inputTypeLabel: string
      prompt: string
      replyText: string
      amount: string
      converted: string
      category: string
      isIncome?: boolean
      insightBreakdown?: Array<{ name: string; share: number; value: string }>
    }>
  }
  workflows: {
    badge: string
    titleStart: string
    titleHighlight: string
    subtitle: string
    cards: {
      voiceChat: {
        eyebrow: string
        title: string
        description: string
        examples: Array<{ badge: string; text: string; tag: string }>
      }
      multiCurrency: {
        eyebrow: string
        title: string
        description: string
        homeCurrencyNote: string
        autoFxBadge: string
        ledger: Array<{
          item: string
          original: string
          converted: string
          type: 'expense' | 'income'
        }>
      }
      receiptAndCsv: {
        eyebrow: string
        title: string
        description: string
        bullets: string[]
      }
      insightsExport: {
        eyebrow: string
        title: string
        description: string
        bullets: string[]
      }
    }
  }
  trust: {
    badge: string
    title: string
    storyLead: string
    storyBody: string
    pillars: Array<{
      title: string
      description: string
    }>
  }
  pricing: {
    badge: string
    title: string
    subtitle: string
    billingAria: string
    monthly: string
    annually: string
    twoMonthsFree: string
    perMonth: string
    perYear: string
    honestNote: string
    waitlistSubject: string
    plans: {
      free: {
        name: string
        badge: string
        priceMonthly: string
        priceAnnually: string
        description: string
        cta: string
        features: string[]
      }
      pro: {
        name: string
        badge: string
        priceMonthly: string
        priceAnnually: string
        description: string
        cta: string
        features: string[]
      }
    }
    reassurances: string[]
  }
  faqs: {
    badge: string
    title: string
    subtitlePrefix: string
    subtitleLinkLabel: string
    items: Array<{
      question: string
      answer: string
    }>
  }
  cta: {
    badge: string
    titleStart: string
    titleHighlight: string
    subtitle: string
    primaryCta: string
    reassurances: string[]
  }
  footer: {
    tagline: string
    description: string
    qrTitle: string
    qrDescription: string
    qrCta: string
    qrAlt: string
    privacy: string
    terms: string
    dataDeletion: string
    contactSupport: string
    webAppLogin: string
    copyright: string
  }
  notFound: {
    code: string
    title: string
    description: string
    cta: string
  }
}

export const LANDING_COPY: Record<Locale, LandingCopy> = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'Live App Demo',
      security: 'Security & Story',
      pricing: 'Pricing',
      faqs: 'FAQs',
      login: 'Sign in',
      tryFree: 'Start Free on Web',
      langSwitchLabel: 'Arabic',
      langSwitchAria: 'Switch site language to Arabic',
      mobileMenuAria: 'Toggle site navigation',
    },
    hero: {
      originBadge: 'Built at Cursor Tallinn Hackathon • Web & Android',
      headlineStart: 'Say what you spent.',
      headlineHighlight: 'CoinMind AI logs, converts,',
      headlineEnd: 'and categorizes it.',
      subheadline:
        'Speak, chat, or snap a receipt in your preferred language. CoinMind AI parses every transaction and converts 170+ currencies into your home currency automatically.',
      primaryCta: 'Start Free on Web',
      googlePlayTop: 'Get it on',
      googlePlayBottom: 'Google Play',
      iosStatus: 'iOS App Store coming soon',
      pills: [
        { label: 'Voice & Natural Chat' },
        { label: '170+ Currencies + Auto FX' },
        { label: 'AI Receipt OCR' },
        { label: 'CSV / PDF / Excel' },
      ],
    },
    demo: {
      chatTitle: 'AI Assistant',
      chatSubtitle: 'Your personal finance assistant',
      placeholder: 'Ask me about your money...',
      sendAria: 'Send message',
      voiceAria: 'Try voice note example',
      cameraAria: 'Try receipt scan example',
      resetAria: 'Reset conversation',
      liveTestLabel: 'Just now',
      transactionLogged: 'Added to your transactions',
      amountLabel: 'Amount',
      convertedLabel: 'Home (USD)',
      categoryLabel: 'Category',
      tabs: {
        dashboard: 'Dashboard',
        transactions: 'Transactions',
        chat: 'AI Assistant',
        profile: 'Profile',
      },
      dashboardView: {
        greeting: 'This Month',
        netBalanceLabel: 'Net Balance',
        netBalanceValue: '$2,157.35',
        incomeLabel: 'Income',
        incomeValue: '+$3,400.00',
        expensesLabel: 'Expenses',
        expensesValue: '-$1,242.65',
        topCategoriesLabel: 'Top Categories',
        categories: [
          { name: 'Housing & Bills', value: '$595.00', share: 48, color: '#D96B2B' },
          { name: 'Food & Dining', value: '$386.65', share: 31, color: '#2E6F70' },
          { name: 'Transportation', value: '$261.00', share: 21, color: '#7C6BB0' },
        ],
      },
      transactionsView: {
        subtitle: 'Auto-converted to USD',
        items: [
          {
            title: 'Coffee & pastries',
            category: 'Food & Dining',
            original: '-$18.50',
            converted: 'Today',
          },
          {
            title: 'Airport taxi • Berlin',
            category: 'Transportation',
            original: '-$30.52',
            converted: '€28.00',
          },
          {
            title: 'Client retainer',
            category: 'Income',
            original: '+$1,308.00',
            converted: '€1,200.00',
            isIncome: true,
          },
          {
            title: 'Whole Foods Market',
            category: 'Groceries',
            original: '-$64.80',
            converted: 'Receipt',
          },
        ],
      },
      profileView: {
        memberBadge: 'Synced across Android & Web',
        currencyLabel: 'Default Currency',
        currencyValue: 'USD ($)',
        languageLabel: 'Voice & Chat',
        languageValue: 'Auto-detect',
        syncLabel: 'Cloud Encryption',
        syncValue: 'Active (TLS)',
        openWebCta: 'Continue in Web App',
      },
      scenarios: [
        {
          id: 'voice-note',
          tabLabel: 'Voice',
          mode: 'voice',
          inputTypeLabel: 'Voice • 0:03',
          prompt: 'Spent $18.50 on coffee and pastries',
          replyText: 'Saved $18.50 under Food & Dining.',
          amount: '$18.50',
          converted: '$18.50',
          category: 'Food & Dining',
        },
        {
          id: 'travel-fx',
          tabLabel: 'FX',
          mode: 'chat',
          inputTypeLabel: 'Multi-Currency',
          prompt: 'Taxi from Berlin airport €28',
          replyText: 'Logged €28.00 and converted to your USD balance.',
          amount: '€28.00',
          converted: '≈ $30.52',
          category: 'Transportation',
        },
        {
          id: 'receipt-ocr',
          tabLabel: 'Receipt',
          mode: 'receipt',
          inputTypeLabel: 'Receipt Photo',
          prompt: 'Receipt: Whole Foods ($64.80)',
          replyText: 'Extracted 6 items from Whole Foods Market.',
          amount: '$64.80',
          converted: '$64.80',
          category: 'Groceries',
        },
        {
          id: 'ask-insights',
          tabLabel: 'Ask AI',
          mode: 'insight',
          inputTypeLabel: 'Spending Insight',
          prompt: 'How much did I spend this month?',
          replyText: 'You spent $1,242.65 across 3 main categories:',
          amount: '$1,242.65',
          converted: 'This month',
          category: 'Summary',
          insightBreakdown: [
            { name: 'Housing & Bills', share: 48, value: '$595' },
            { name: 'Food & Dining', share: 31, value: '$387' },
            { name: 'Transportation', share: 21, value: '$261' },
          ],
        },
      ],
    },
    workflows: {
      badge: 'Core Workflows',
      titleStart: 'Built for how people actually',
      titleHighlight: 'spend across borders and devices',
      subtitle:
        'No rigid forms or manual category dropdowns. Log expenses in two seconds on your phone or review full statements on the web.',
      cards: {
        voiceChat: {
          eyebrow: 'Voice & Conversational AI',
          title: 'Speak or chat naturally in seconds',
          description:
            'Tell CoinMind AI what happened the way you would text a friend. Voice recording and chat handle natural phrasing, relative dates, and merchants cleanly.',
          examples: [
            {
              badge: 'Voice',
              text: '"Bought groceries for $64 at Trader Joe\'s"',
              tag: 'Groceries',
            },
            {
              badge: 'Chat',
              text: '"Received $3,200 client invoice payment today"',
              tag: 'Income (+)',
            },
            {
              badge: 'Voice',
              text: '"Paid €42 for train tickets in Rome"',
              tag: 'Travel & Transit',
            },
          ],
        },
        multiCurrency: {
          eyebrow: '170+ Currencies',
          title: 'Banking-grade multi-currency conversion',
          description:
            'Built for expats, remote workers, and travelers. Log transactions in local currencies anywhere in the world and keep your dashboard unified in your home currency.',
          homeCurrencyNote: 'Unified automatically in your home currency (USD)',
          autoFxBadge: 'AUTO FX',
          ledger: [
            {
              item: 'Specialty Coffee • London',
              original: '-£6.50',
              converted: '-$8.32',
              type: 'expense',
            },
            {
              item: 'Consulting Retainer • Berlin',
              original: '+€1,200.00',
              converted: '+$1,308.00',
              type: 'income',
            },
            {
              item: 'Hotel Cab • Dubai',
              original: '-AED 95.00',
              converted: '-$25.87',
              type: 'expense',
            },
            {
              item: 'Team Dinner • Tokyo',
              original: '-¥8,400',
              converted: '-$56.00',
              type: 'expense',
            },
          ],
        },
        receiptAndCsv: {
          eyebrow: 'Zero Manual Entry',
          title: 'Snap paper receipts or import bank CSV & Excel files',
          description:
            'Upload a photo of a paper receipt or drag in a monthly bank statement. CoinMind AI extracts amounts, dates, and vendors and categorizes the entire batch.',
          bullets: [
            'Camera & image receipt extraction',
            'Bulk CSV & Excel statement import',
            'Review & edit any transaction anytime',
          ],
        },
        insightsExport: {
          eyebrow: 'Clarity & Control',
          title: 'Ask questions about your spending & export clean reports',
          description:
            'Skip complex spreadsheets. Ask CoinMind AI where your money went, track cash flow on visual dashboards, and export PDF or Excel summaries.',
          bullets: [
            'Conversational spending & income queries',
            'Interactive category & currency analytics',
            'Export to PDF, CSV, and Excel',
          ],
        },
      },
    },
    trust: {
      badge: 'Origin Story & Security',
      title: 'Honest fintech, built in public with real engineering rigor',
      storyLead:
        'CoinMind AI started solo at the Cursor Tallinn Hackathon to solve a simple frustration: logging daily expenses took too many taps.',
      storyBody:
        'Right after the hackathon, a banking-systems engineer joined to bring real financial sanity and multi-currency precision. No vanity download numbers or inflated hype—just fast, reliable personal finance tools shaped directly with early users.',
      pillars: [
        {
          title: 'Encrypted & Session-Isolated',
          description:
            'All traffic runs over TLS with encrypted cloud storage and verified session authentication.',
        },
        {
          title: 'Your Data Is Never Sold',
          description:
            'We never sell or share your financial records with advertisers or data brokers. Your ledger belongs to you.',
        },
        {
          title: 'Full Portability & Deletion',
          description:
            'Export your transactions to CSV, Excel, or PDF anytime, or request permanent account deletion with clear retention rules.',
        },
      ],
    },
    pricing: {
      badge: 'Pricing',
      title: 'Start free while we build with early adopters',
      subtitle: 'Get started on Web and Android at $0. No credit card required.',
      billingAria: 'Billing frequency',
      monthly: 'Monthly',
      annually: 'Annually',
      twoMonthsFree: '2 months free',
      perMonth: '/mo',
      perYear: '/yr',
      honestNote:
        'CoinMind AI is currently in public beta—core multi-currency, voice, chat, and receipt features are open to start for free.',
      waitlistSubject: 'CoinMind AI Pro Waitlist',
      plans: {
        free: {
          name: 'Early Adopter Free',
          badge: 'Available Now',
          priceMonthly: '$0',
          priceAnnually: '$0',
          description:
            'Everything you need to log daily expenses and income across Web and Android.',
          cta: 'Create Free Account',
          features: [
            'Voice & natural-language chat logging',
            'Multi-currency tracking (170+ currencies)',
            'Automatic AI expense & income categorization',
            'Smart receipt photo OCR scanning',
            'CSV / Excel import & report exports',
            'Real-time sync across Web & Android',
          ],
        },
        pro: {
          name: 'CoinMind AI Pro',
          badge: 'Coming Soon',
          priceMonthly: '$9.99',
          priceAnnually: '$99',
          description:
            'Higher AI volume limits, deeper forecasting, and power-user automation when Pro launches.',
          cta: 'Join Pro Waitlist',
          features: [
            'High-volume voice, chat & receipt OCR allowances',
            'Advanced multi-currency trend & FX analytics',
            'Custom recurring budget alerts & forecasting',
            'Unlimited bulk bank statement imports',
            'Tax-ready multi-period PDF & Excel packs',
            'Direct priority founder support',
          ],
        },
      },
      reassurances: [
        'No credit card required',
        'Export your data anytime',
        'Direct feedback channel to the founders',
      ],
    },
    faqs: {
      badge: 'FAQs',
      title: 'Frequently asked questions',
      subtitlePrefix:
        'Have another question or feedback? Reach out directly via',
      subtitleLinkLabel: SUPPORT_EMAIL,
      items: [
        {
          question: 'How does CoinMind AI log transactions from voice or chat?',
          answer:
            'Just speak or type naturally—for example, "Paid $14 for lunch" or "Received $2,500 freelance payment." CoinMind AI extracts the amount, currency, type (expense or income), date, merchant, and category automatically.',
        },
        {
          question: 'Which languages and currencies are supported?',
          answer:
            'CoinMind AI understands natural voice and text across dozens of global languages and supports 170+ currencies, automatically converting foreign transactions into your chosen home currency.',
        },
        {
          question: 'Is CoinMind AI really free right now?',
          answer:
            'Yes. You can sign up and use CoinMind AI on the Web and Android for free with no credit card required while we grow in public beta. Pro plans with higher volume tiers are planned for heavy users.',
        },
        {
          question: 'How does receipt scanning and CSV import work?',
          answer:
            'Upload a photo of a paper receipt and CoinMind AI extracts the merchant, date, total, and category for you to confirm. For bank statements, upload a CSV or Excel file to categorize multiple transactions in bulk.',
        },
        {
          question: 'How private and secure is my financial data?',
          answer:
            'Your data is encrypted in transit and at rest, scoped strictly to your authenticated account, and never sold to third parties. Voice recordings are transcribed in real time rather than stored as raw audio.',
        },
        {
          question: 'Where can I use CoinMind AI today?',
          answer:
            'CoinMind AI is live right now as a full web application and on Android via Google Play. Our iOS app is currently in development.',
        },
      ],
    },
    cta: {
      badge: 'Web & Android Ready',
      titleStart: 'Ready to track your money',
      titleHighlight: 'just by talking?',
      subtitle:
        'Create your free account in under a minute and log your first expense by voice, chat, or receipt.',
      primaryCta: 'Start Free on Web',
      reassurances: [
        'Free account on Web & Android',
        '170+ currencies supported',
        'No credit card required',
      ],
    },
    footer: {
      tagline: 'Personal Finance Copilot',
      description:
        'Track expenses and income by voice, chat, and receipt photos in your preferred language and currency.',
      qrTitle: 'Get CoinMind AI on Android',
      qrDescription:
        'Scan or tap to install CoinMind AI from Google Play and sync seamlessly with the web app.',
      qrCta: 'Open Google Play listing →',
      qrAlt: 'Google Play download code',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      dataDeletion: 'Data Deletion',
      contactSupport: 'Contact Support',
      webAppLogin: 'Web App Sign In',
      copyright: 'CoinMind AI. All rights reserved.',
    },
    notFound: {
      code: '404',
      title: 'Page not found',
      description: 'Sorry, we could not find the page you are looking for.',
      cta: 'Go back home',
    },
  },
  ar: {
    nav: {
      features: 'المميزات',
      howItWorks: 'تجربة التطبيق',
      security: 'الأمان وقصتنا',
      pricing: 'الأسعار',
      faqs: 'الأسئلة الشائعة',
      login: 'تسجيل الدخول',
      tryFree: 'ابدأ مجاناً على الويب',
      langSwitchLabel: 'الإنجليزية',
      langSwitchAria: 'التبديل إلى اللغة الإنجليزية',
      mobileMenuAria: 'فتح أو إغلاق القائمة',
    },
    hero: {
      originBadge:
        'انطلق من هاكاثون Cursor في مدينة تالين • متاح على الويب وأندرويد',
      headlineStart: 'تحدّث أو اكتب مصروفك.',
      headlineHighlight: 'CoinMind AI يسجّله ويحوّله',
      headlineEnd: 'ويصنّفه تلقائياً.',
      subheadline:
        'سجّل مصاريفك ودخلك بالصوت أو المحادثة أو بتصوير الفاتورة بلغتك المفضلة. يدعم أكثر من 170 عملة عالمية مع تحويل تلقائي فوري إلى عملتك الأساسية.',
      primaryCta: 'ابدأ مجاناً على الويب',
      googlePlayTop: 'احصل عليه من',
      googlePlayBottom: 'متجر جوجل بلاي',
      iosStatus: 'تطبيق آيفون قادم قريباً',
      pills: [
        { label: 'تسجيل صوتي ومحادثة طبيعية' },
        { label: '+170 عملة وتحويل تلقائي' },
        { label: 'مسح الفواتير بالكاميرا' },
        { label: 'استيراد وتصدير الكشوفات والتقارير' },
      ],
    },
    demo: {
      chatTitle: 'المساعد الذكي',
      chatSubtitle: 'مساعدك المالي الشخصي',
      placeholder: 'اسألني عن أموالك...',
      sendAria: 'إرسال',
      voiceAria: 'جرّب مثال الإدخال الصوتي',
      cameraAria: 'جرّب مثال مسح الفاتورة',
      resetAria: 'إعادة ضبط المحادثة',
      liveTestLabel: 'الآن',
      transactionLogged: 'تمت الإضافة إلى معاملاتك',
      amountLabel: 'المبلغ',
      convertedLabel: 'بالعملة الأساسية',
      categoryLabel: 'الفئة',
      tabs: {
        dashboard: 'التقارير',
        transactions: 'العمليات',
        chat: 'المساعد',
        profile: 'حسابي',
      },
      dashboardView: {
        greeting: 'هذا الشهر',
        netBalanceLabel: 'صافي الرصيد',
        netBalanceValue: '8,090 ر.س',
        incomeLabel: 'الدخل',
        incomeValue: '+12,740 ر.س',
        expensesLabel: 'المصروفات',
        expensesValue: '-4,650 ر.س',
        topCategoriesLabel: 'أعلى الفئات',
        categories: [
          { name: 'السكن والفواتير', value: '2,230 ر.س', share: 48, color: '#D96B2B' },
          { name: 'الطعام والمقاهي', value: '1,440 ر.س', share: 31, color: '#2E6F70' },
          { name: 'المواصلات والسفر', value: '980 ر.س', share: 21, color: '#7C6BB0' },
        ],
      },
      transactionsView: {
        subtitle: 'محوّلة تلقائياً إلى ر.س',
        items: [
          {
            title: 'قهوة وحلى مع الأصدقاء',
            category: 'طعام ومقاهي',
            original: '-45.00 ر.س',
            converted: 'اليوم',
          },
          {
            title: 'تاكسي من المطار',
            category: 'مواصلات وسفر',
            original: '-114.80 ر.س',
            converted: '28 يورو',
          },
          {
            title: 'دفعة عمل حر',
            category: 'دخل',
            original: '+4,920 ر.س',
            converted: '1,200 يورو',
            isIncome: true,
          },
          {
            title: 'مقاضي سوبرماركت',
            category: 'مقاضي وبقالة',
            original: '-111.00 ر.س',
            converted: '1,450 ج.م',
          },
        ],
      },
      profileView: {
        memberBadge: 'مزامنة فورية بين أندرويد والويب',
        currencyLabel: 'العملة الافتراضية',
        currencyValue: 'ريال سعودي (ر.س)',
        languageLabel: 'الصوت والمحادثة',
        languageValue: 'تعرّف تلقائي',
        syncLabel: 'تشفير السحابة',
        syncValue: 'مفعّل بالكامل',
        openWebCta: 'افتح تطبيق الويب',
      },
      scenarios: [
        {
          id: 'voice-note',
          tabLabel: 'صوت',
          mode: 'voice',
          inputTypeLabel: 'صوت • 0:03',
          prompt: 'دفعت 45 ريال قهوة وحلى مع الأصدقاء',
          replyText: 'تم حفظ 45.00 ر.س ضمن فئة طعام ومقاهي.',
          amount: '45.00 ر.س',
          converted: '45.00 ر.س',
          category: 'طعام ومقاهي',
        },
        {
          id: 'travel-fx',
          tabLabel: 'سفر',
          mode: 'chat',
          inputTypeLabel: 'تحويل عملات',
          prompt: 'مشوار تاكسي من المطار 28 يورو',
          replyText: 'تم تسجيل 28 يورو وتحويلها تلقائياً لعملتك الأساسية.',
          amount: '28.00 يورو',
          converted: '≈ 114.80 ر.س',
          category: 'مواصلات وسفر',
        },
        {
          id: 'receipt-ocr',
          tabLabel: 'فاتورة',
          mode: 'receipt',
          inputTypeLabel: 'صورة إيصال',
          prompt: 'صورة إيصال: سوبرماركت (1,450 ج.م)',
          replyText: 'تم استخراج 6 أصناف من صورة الإيصال وتحويلها.',
          amount: '1,450 ج.م',
          converted: '≈ 111.00 ر.س',
          category: 'مقاضي وبقالة',
        },
        {
          id: 'ask-insights',
          tabLabel: 'تحليل',
          mode: 'insight',
          inputTypeLabel: 'سؤال مالي',
          prompt: 'كم أنفقت هذا الشهر؟',
          replyText: 'أنفقت 4,650 ر.س موزّعة على 3 فئات رئيسية:',
          amount: '4,650 ر.س',
          converted: 'هذا الشهر',
          category: 'ملخص',
          insightBreakdown: [
            { name: 'السكن والفواتير', share: 48, value: '2,230 ر.س' },
            { name: 'الطعام والمقاهي', share: 31, value: '1,440 ر.س' },
            { name: 'المواصلات والسفر', share: 21, value: '980 ر.س' },
          ],
        },
      ],
    },
    workflows: {
      badge: 'سير العمل الأساسي',
      titleStart: 'مصمّم للطريقة الحقيقية التي تنفق بها',
      titleHighlight: 'عبر اللغات والعملات المختلفة',
      subtitle:
        'بدون نماذج معقّدة أو قوائم طويلة. سجّل مصروفك في ثانيتين من جوالك أو راجع تقاريرك التفصيلية عبر الويب.',
      cards: {
        voiceChat: {
          eyebrow: 'الصوت والمحادثة الذكية',
          title: 'تحدّث أو اكتب بعفوية تامة بلغتك ولهجتك',
          description:
            'أخبر CoinMind AI بما دفعته أو استلمته كما ترسل رسالة لصديق. يتعرف النظام على المبلغ والتاريخ والجهة والتصنيف تلقائياً.',
          examples: [
            {
              badge: 'صوت',
              text: '"دفعت 180 ريال مقاضي للبيت"',
              tag: 'مقاضي وبقالة',
            },
            {
              badge: 'محادثة',
              text: '"استلمت راتب 8,500 ريال اليوم"',
              tag: 'راتب (+دخل)',
            },
            {
              badge: 'صوت',
              text: '"دفعت 120 درهم غداء عمل في دبي"',
              tag: 'طعام ومقاهي',
            },
          ],
        },
        multiCurrency: {
          eyebrow: '+170 عملة عالمية',
          title: 'دعم متعدد العملات بدقة هندسية مصرفية',
          description:
            'مثالي للمغتربين والمسافرين والمستقلين. سجّل بالريال السعودي أو الجنيه المصري أو الريال اليمني أو الدرهم أو اليورو أو الدولار، وتابع رصيدك موحّداً بعملتك الأساسية.',
          homeCurrencyNote: 'موحّد تلقائياً بعملتك الأساسية (ر.س)',
          autoFxBadge: 'تحويل فوري',
          ledger: [
            {
              item: 'قهوة مختصة • الرياض',
              original: '-32.00 ر.س',
              converted: '-32.00 ر.س',
              type: 'expense',
            },
            {
              item: 'دفعة مشروع • أوروبا',
              original: '+1,200 يورو',
              converted: '+4,920 ر.س',
              type: 'income',
            },
            {
              item: 'عشاء عائلي • القاهرة',
              original: '-1,850 ج.م',
              converted: '-141 ر.س',
              type: 'expense',
            },
            {
              item: 'مشتريات منزلية • صنعاء',
              original: '-12,500 ر.ي',
              converted: '-94 ر.س',
              type: 'expense',
            },
          ],
        },
        receiptAndCsv: {
          eyebrow: 'بدون إدخال يدوي',
          title: 'صوّر الفواتير الورقية أو استورد كشوفات البنك',
          description:
            'ارفع صورة أي فاتورة ورقية أو ملف كشف حساب بنكي ليقوم الذكاء الاصطناعي باستخراج المبالغ والتواريخ وتصنيف المعاملات دفعة واحدة.',
          bullets: [
            'استخراج فوري لبيانات الفواتير بالكاميرا',
            'استيراد جماعي لملفات الجداول وكشوفات الحساب',
            'مراجعة وتعديل أي معاملة في أي وقت',
          ],
        },
        insightsExport: {
          eyebrow: 'رؤية وتحكم كامل',
          title: 'اسأل عن أموالك وصدّر تقارير مالية جاهزة',
          description:
            'اسأل CoinMind AI مباشرة عن أنماط إنفاقك، وتابع التدفقات النقدية برسوم بيانية واضحة مع إمكانية تصدير التقارير المصوّرة والجدولية.',
          bullets: [
            'إجابات فورية بالمحادثة حول ميزانيتك',
            'لوحة تحليلات تفاعلية حسب التصنيف والعملة',
            'تصدير مرن للتقارير والجداول المحاسبية',
          ],
        },
      },
    },
    trust: {
      badge: 'قصتنا والأمان',
      title: 'تقنية مالية صادقة، نبنيها بشفافية وهندسة موثوقة',
      storyLead:
        'بدأ CoinMind AI كمشروع فردي في هاكاثون Cursor في مدينة تالين لحل مشكلة يومية بسيطة: تسجيل المصاريف التقليدي يأخذ وقتاً أطول مما ينبغي.',
      storyBody:
        'بعد الهاكاثون انضم مهندس أنظمة مصرفية لبناء نظام عملات متعدد دقيق وموثوق. لا نستخدم أرقام تحميل وهمية أو وعوداً مبالغاً فيها — بل نبني المنتج علناً خطوة بخطوة مع مستخدمينا الأوائل.',
      pillars: [
        {
          title: 'تشفير وعزل كامل للجلسات',
          description:
            'جميع البيانات مشفّرة أثناء النقل والتخزين مع التحقق الصارم من الجلسات وعزل حساب كل مستخدم.',
        },
        {
          title: 'بياناتك المالية ليست للبيع',
          description:
            'لا نبيع أو نشارك بياناتك المالية مع أي جهات إعلانية أو وسطاء بيانات. سجلك المالي ملكك وحدك.',
        },
        {
          title: 'حرية التصدير والحذف الكامل',
          description:
            'يمكنك تصدير جميع بياناتك في أي وقت أو طلب حذف حسابك وبياناتك نهائياً بشفافية تامة.',
        },
      ],
    },
    pricing: {
      badge: 'الأسعار',
      title: 'ابدأ مجاناً وانضم إلى المستخدمين الأوائل',
      subtitle:
        'استخدم CoinMind AI على الويب وأندرويد مجاناً بدون بطاقة ائتمانية.',
      billingAria: 'دورية الاشتراك',
      monthly: 'شهري',
      annually: 'سنوي',
      twoMonthsFree: 'شهران مجاناً',
      perMonth: '/شهرياً',
      perYear: '/سنوياً',
      honestNote:
        'تطبيق CoinMind AI متاح حالياً في المرحلة التجريبية المفتوحة — جميع المزايا الأساسية للعملات والصوت والفواتير متاحة مجاناً.',
      waitlistSubject: 'قائمة انتظار باقة CoinMind AI المتقدمة',
      plans: {
        free: {
          name: 'الباقة المجانية',
          badge: 'متاحة الآن',
          priceMonthly: '0$',
          priceAnnually: '0$',
          description:
            'كل ما تحتاجه لتتبع مصاريفك ودخلك اليومي عبر الويب وأندرويد.',
          cta: 'أنشئ حساباً مجانياً',
          features: [
            'تسجيل المعاملات بالصوت والمحادثة الطبيعية',
            'دعم أكثر من 170 عملة مع التحويل التلقائي',
            'تصنيف تلقائي ذكي للمصاريف والدخل',
            'مسح الفواتير الورقية بالكاميرا',
            'استيراد الكشوفات وتصدير التقارير المالية',
            'مزامنة فورية بين تطبيق الويب وأندرويد',
          ],
        },
        pro: {
          name: 'باقة CoinMind AI المتقدمة',
          badge: 'قادمة قريباً',
          priceMonthly: '9.99$',
          priceAnnually: '99$',
          description:
            'حدود استخدام موسّعة وتحليلات تنبؤية متقدمة عند إطلاق الباقة المتقدمة.',
          cta: 'انضم لقائمة الانتظار',
          features: [
            'سعة أعلى للأوامر الصوتية ومسح الفواتير',
            'تحليلات متقدمة لأسعار الصرف واتجاهات الإنفاق',
            'تنبيهات ميزانية مخصصة وتوقعات شهرية',
            'استيراد غير محدود لكشوفات الحساب البنكية',
            'حزم تقارير مالية وضريبية متعددة الفترات',
            'دعم مباشر ذو أولوية من فريق التأسيس',
          ],
        },
      },
      reassurances: [
        'لا حاجة لبطاقة ائتمانية',
        'تصدير بياناتك في أي وقت',
        'تواصل مباشر مع المؤسسين',
      ],
    },
    faqs: {
      badge: 'الأسئلة الشائعة',
      title: 'إجابات واضحة لأهم الأسئلة',
      subtitlePrefix: 'لديك سؤال آخر أو اقتراح؟ تواصل معنا مباشرة عبر',
      subtitleLinkLabel: 'البريد الإلكتروني للدعم',
      items: [
        {
          question: 'كيف يفهم CoinMind AI مصاريفي من الصوت أو المحادثة؟',
          answer:
            'تحدث أو اكتب بشكل طبيعي مثل: "دفعت 45 ريال قهوة" أو "استلمت 2,000 دولار دفعة عمل حر". يستخرج الذكاء الاصطناعي المبلغ والعملة ونوع المعاملة والتاريخ والتصنيف تلقائياً.',
        },
        {
          question: 'ما هي اللغات والعملات المدعومة؟',
          answer:
            'يدعم CoinMind AI التحدث والكتابة بالعربية وعشرات اللغات العالمية، مع دعم أكثر من 170 عملة (منها الريال السعودي، الدولار، اليورو، الجنيه المصري، الدرهم الإماراتي، والريال اليمني) وتحويلها الفوري إلى عملتك الأساسية.',
        },
        {
          question: 'هل التطبيق مجاني فعلاً حالياً؟',
          answer:
            'نعم، يمكنك إنشاء حساب واستخدام CoinMind AI على الويب وأندرويد مجاناً بالكامل وبدون بطاقة ائتمانية خلال المرحلة التجريبية الحالية.',
        },
        {
          question: 'كيف يعمل مسح الفواتير واستيراد كشوفات البنك؟',
          answer:
            'صوّر أي فاتورة ورقية ليستخرج التطبيق اسم المتجر والتاريخ والإجمالي والتصنيف، أو ارفع ملف كشف حسابك البنكي لتصنيف عشرات المعاملات دفعة واحدة.',
        },
        {
          question: 'هل بياناتي المالية آمنة وخاصة؟',
          answer:
            'بياناتك مشفّرة أثناء النقل والتخزين ومرتبطة بحسابك الموثّق فقط، ولا نبيعها لأي طرف ثالث. كما يتم تحويل الصوت إلى نص لحظياً دون تخزين تسجيلاتك الصوتية.',
        },
        {
          question: 'على أي منصات يتوفر CoinMind AI اليوم؟',
          answer:
            'يتوفر CoinMind AI الآن عبر تطبيق الويب الكامل وعلى أجهزة أندرويد عبر متجر جوجل بلاي، ويجري العمل حالياً على تطوير تطبيق آيفون.',
        },
      ],
    },
    cta: {
      badge: 'متاح على الويب وأندرويد',
      titleStart: 'جاهز لتتبع مصاريفك',
      titleHighlight: 'بمجرد التحدث؟',
      subtitle:
        'أنشئ حسابك المجاني في أقل من دقيقة وسجّل أول معاملة بالصوت أو المحادثة أو الفاتورة.',
      primaryCta: 'ابدأ مجاناً على الويب',
      reassurances: [
        'حساب مجاني على الويب وأندرويد',
        'دعم أكثر من 170 عملة',
        'بدون بطاقة ائتمانية',
      ],
    },
    footer: {
      tagline: 'مساعدك المالي الشخصي بالذكاء الاصطناعي',
      description:
        'تتبّع مصاريفك ودخلك بالصوت والمحادثة وتصوير الفواتير بلغتك وعملتك المفضلة.',
      qrTitle: 'حمّل CoinMind AI على أندرويد',
      qrDescription:
        'امسح الرمز الضوئي أو اضغط هنا لتحميل التطبيق من متجر جوجل بلاي ومزامنة حسابك مع الويب.',
      qrCta: 'افتح صفحة التحميل ←',
      qrAlt: 'رمز تحميل التطبيق',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      dataDeletion: 'حذف البيانات',
      contactSupport: 'تواصل مع الدعم',
      webAppLogin: 'دخول تطبيق الويب',
      copyright: 'CoinMind AI. جميع الحقوق محفوظة.',
    },
    notFound: {
      code: '404',
      title: 'الصفحة غير موجودة',
      description: 'عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.',
      cta: 'العودة إلى الرئيسية',
    },
  },
}
