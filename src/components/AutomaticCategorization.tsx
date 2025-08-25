import { Container } from '@/components/Container'

export function AutomaticCategorization() {
  return (
    <section
      id="automatic-categorization"
      aria-label="Automatic categorization features"
      className="py-20 sm:py-32 bg-white"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-coinmind-accent/10 px-4 py-2 text-sm font-medium text-coinmind-primary mb-6">
            <span className="mr-2">🏷️</span>
            Automatic Categorization
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            <span className="bg-gradient-to-r from-coinmind-primary to-coinmind-accent bg-clip-text text-transparent">
              Automatic
            </span>{' '}
            Transaction Categorization
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Say goodbye to manual categorization. Our AI automatically understands and categorizes your transactions from voice, text, and receipts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coinmind-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎤</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice & Chat Categorization</h3>
                  <p className="text-gray-600">
                    Simply say &ldquo;I spent $50 on groceries&rdquo; and our AI automatically categorizes it as &ldquo;Food & Dining&rdquo; with the correct amount and date.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coinmind-accent/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📷</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Receipt Photo Analysis</h3>
                  <p className="text-gray-600">
                    Take a photo of any receipt and our AI extracts all details including merchant, amount, date, and automatically assigns the right category.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coinmind-income/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart AI Learning</h3>
                  <p className="text-gray-600">
                    Our AI learns from your spending patterns and gets smarter over time, providing more accurate categorization for your specific lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-coinmind-expense/10 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🌍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Language Support</h3>
                  <p className="text-gray-600">
                    Works in 170+ languages. Whether you speak English, Arabic, Spanish, or any other language, our AI understands and categorizes correctly.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-r from-coinmind-primary/5 to-coinmind-accent/5 rounded-2xl p-6 border border-coinmind-primary/10">
              <h4 className="font-semibold text-gray-900 mb-4">Why Automatic Categorization?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-coinmind-primary mr-2">✓</span>
                  Save hours of manual categorization
                </li>
                <li className="flex items-center">
                  <span className="text-coinmind-primary mr-2">✓</span>
                  Get accurate spending insights
                </li>
                <li className="flex items-center">
                  <span className="text-coinmind-primary mr-2">✓</span>
                  Better financial planning
                </li>
                <li className="flex items-center">
                  <span className="text-coinmind-primary mr-2">✓</span>
                  Consistent categorization across all transactions
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Visual demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-lg">
              <div className="space-y-4">
                {/* Demo conversation */}
                <div className="bg-coinmind-primary/10 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-coinmind-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">U</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">You</span>
                  </div>
                  <p className="text-gray-800">&ldquo;I spent $35 on lunch at McDonald&apos;s&rdquo;</p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-coinmind-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">CoinMind AI</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-800">✅ Transaction added: <strong>$35.00</strong></p>
                    <p className="text-gray-800">🏷️ Category: <strong>Food & Dining</strong></p>
                    <p className="text-gray-800">🏪 Merchant: <strong>McDonald&apos;s</strong></p>
                    <p className="text-gray-800">📅 Date: <strong>Today</strong></p>
                  </div>
                </div>

                <div className="bg-coinmind-primary/10 rounded-2xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-coinmind-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">U</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">You</span>
                  </div>
                  <p className="text-gray-800">&ldquo;Paid $120 for gas&rdquo;</p>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-gray-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-coinmind-accent rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">AI</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">CoinMind AI</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-800">✅ Transaction added: <strong>$120.00</strong></p>
                    <p className="text-gray-800">🏷️ Category: <strong>Transportation</strong></p>
                    <p className="text-gray-800">⛽ Type: <strong>Gas/Fuel</strong></p>
                    <p className="text-gray-800">📅 Date: <strong>Today</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-coinmind-income/20 to-coinmind-expense/20 rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-coinmind-accent/30 to-coinmind-primary/30 rounded-full animate-float"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
