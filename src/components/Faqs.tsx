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
      question: 'How does automatic categorization work?',
      answer:
        'Our AI analyzes your voice input, text messages, and receipt photos to automatically assign the most appropriate category. It learns from your spending patterns and gets smarter over time, supporting 170+ languages.',
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
      className="border-t border-gray-200 py-20 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <h2
            id="faqs-title"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:support@coinmind.app"
              className="text-coinmind-primary underline hover:text-coinmind-primary/80 transition-colors duration-200 font-semibold"
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
                  <li key={faqIndex} className="group">
                    <div className="relative">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-coinmind-primary transition-colors duration-200 leading-relaxed">
                        {faq.question}
                      </h3>
                      <div className="mt-4 text-sm text-gray-600 leading-relaxed bg-white p-4 rounded-lg border border-gray-200/50 group-hover:border-coinmind-accent/30 transition-all duration-200 group-hover:shadow-sm">
                        {faq.answer}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        
        {/* Additional CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <div className="bg-gradient-to-r from-coinmind-primary/5 to-coinmind-accent/5 rounded-2xl p-8 border border-coinmind-accent/20">
            <h3 className="text-xl font-semibold text-coinmind-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of CoinMind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@coinmind-ai.com"
                className="inline-flex items-center justify-center rounded-lg bg-coinmind-primary px-6 py-3 text-sm font-semibold text-white hover:bg-coinmind-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="https://app.coinmind-ai.com/auth/signup"
                className="inline-flex items-center justify-center rounded-lg border border-coinmind-primary/30 px-6 py-3 text-sm font-semibold text-coinmind-primary hover:bg-coinmind-primary/5 transition-all duration-200"
              >
                Try CoinMind Free
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
