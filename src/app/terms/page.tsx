import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Terms of Service - CoinMind AI Expense Tracker',
  description: 'Terms of service for CoinMind AI expense tracker app. Understand your rights using our voice & chat expense tracking, receipt OCR scanning, and multi-language support features.',
  keywords: [
    'expense tracker terms',
    'AI expense app terms of service',
    'expense tracking app agreement',
    'financial app terms',
  ],
  openGraph: {
    title: 'Terms of Service - CoinMind AI Expense Tracker',
    description: 'Terms for using CoinMind AI expense tracker with voice, chat, and receipt OCR features.',
    url: 'https://coinmind-ai.com/terms',
    images: [
      {
        url: '/api/og?title=Terms%20of%20Service&description=AI%20Expense%20Tracker%20App%20Agreement',
        width: 1200,
        height: 630,
        alt: 'CoinMind Terms of Service',
      },
    ],
  },
  alternates: {
    canonical: 'https://coinmind-ai.com/terms',
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-600 mt-2">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                By accessing and using CoinMind-ai (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                CoinMind-ai is an AI-powered personal finance tracking application that provides conversational transaction entry, receipt processing, and financial analytics. The Service is operated by CoinMind-ai team (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>CoinMind-ai provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>AI-Powered Chat Interface:</strong> Natural language transaction entry using Google Gemini AI for parsing and categorizing financial transactions</li>
                <li><strong>Voice-to-Text Processing:</strong> Speech recognition capabilities for hands-free transaction entry</li>
                <li><strong>Receipt OCR Processing:</strong> Optical character recognition for extracting transaction data from receipt images and PDFs</li>
                <li><strong>CSV/Excel Import:</strong> Bulk transaction import from bank statements and financial files</li>
                <li><strong>Financial Analytics:</strong> Spending analysis, category breakdowns, and financial insights</li>
                <li><strong>Multi-Currency Support:</strong> Transaction tracking in multiple currencies with automatic conversion</li>
                <li><strong>Data Export:</strong> Export functionality for financial records</li>
                <li><strong>User Authentication:</strong> Secure account management with OAuth providers (Google)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>To access certain features of the Service, you must create an account. You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p>
                We reserve the right to terminate accounts that violate these terms or are inactive for extended periods.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Upload, transmit, or process fraudulent or illegal financial data</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the Service</li>
                <li>Use automated systems to access the Service without authorization</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Upload malicious code or attempt to gain unauthorized access</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Processing and AI Services</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>Our Service uses AI technologies to process your financial data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Gemini AI:</strong> Used for natural language processing, receipt OCR, and transaction categorization</li>
                <li><strong>Speech Recognition:</strong> Voice-to-text conversion for transaction entry</li>
                <li><strong>Data Analysis:</strong> AI-powered insights and spending pattern analysis</li>
              </ul>
              <p>
                By using our AI features, you consent to the processing of your data by these AI services in accordance with our Privacy Policy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Financial Data and Privacy</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>We take the privacy and security of your financial data seriously:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your financial data is encrypted and stored securely</li>
                <li>We do not share your personal financial information with third parties without consent</li>
                <li>AI processing is performed in accordance with data protection regulations</li>
                <li>You retain ownership of your financial data</li>
                <li>You can export and delete your data at any time</li>
              </ul>
              <p>
                For detailed information about data handling, please refer to our Privacy Policy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Service Availability and Limitations</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>We strive to provide reliable service but cannot guarantee:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Uninterrupted or error-free operation</li>
                <li>98% accuracy in AI processing or OCR results</li>
                <li>Compatibility with all devices or browsers</li>
                <li>Real-time data synchronization</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue the Service at any time with reasonable notice.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                The Service and its original content, features, and functionality are owned by CoinMind-ai and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p>
                You retain ownership of your financial data and user-generated content. You grant us a limited license to process your data to provide the Service.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Disclaimers and Limitations of Liability</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p><strong>Disclaimer of Warranties:</strong></p>
              <p>
                The Service is provided &quot;as is&quot; without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p><strong>Limitation of Liability:</strong></p>
              <p>
                In no event shall CoinMind-ai be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p>
                We are not responsible for financial decisions made based on our analytics or recommendations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Termination</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
              <p>Upon termination, your right to use the Service will cease immediately. You may request deletion of your data within 30 days of termination.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="list-none space-y-1 ml-4">
                <li>Email: support@coinmind-ai.com</li>
                <li>Website: https://coinmind-ai.com</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 py-8">
            <p>Copyright © 2025 CoinMind-ai. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
