import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How does CoinMind understand my expenses?',
      answer:
        'CoinMind uses advanced AI to understand natural language. Simply tell us about your expenses in any language, and our AI will automatically categorize and record them for you.',
    },
    {
      question: 'What languages does CoinMind support?',
      answer:
        'CoinMind supports 170+ languages including English, Arabic, Spanish, French, German, and many more. You can track expenses in your preferred language.',
    },
    {
      question: 'How secure is my financial data?',
      answer:
        'Your financial data is encrypted and secure. We never share your information with third parties. Your privacy and security are our top priorities.',
    },
  ],
  [
    {
      question: 'Can I use CoinMind for free?',
      answer:
        'Yes! CoinMind offers a free tier with 10 transactions per month, basic receipt OCR, and single currency support. Perfect for getting started with expense tracking.',
    },
    {
      question: 'How does receipt OCR work?',
      answer:
        'Simply take a photo of your receipt and our AI will automatically extract the store name, date, amount, and category. No more manual data entry.',
    },
    {
      question: 'What currencies does CoinMind support?',
      answer:
        'The free tier supports USD only, while the Pro tier supports all 170+ currencies worldwide, perfect for travelers and international users.',
    },
  ],
  [
    {
      question: 'Can I export my data?',
      answer:
        'Yes! Pro users can export their data in multiple formats including PDF reports and tax exports. Free users have limited export capabilities.',
    },
    {
      question: 'How accurate is the AI categorization?',
      answer:
        'Our AI is trained on millions of transactions and provides highly accurate categorization. You can always manually adjust categories if needed.',
    },
    {
      question: 'Is CoinMind available on mobile?',
      answer:
        'Yes! CoinMind is available as both a web app and mobile app, so you can track expenses on any device, anywhere.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:support@coinmind.app"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
