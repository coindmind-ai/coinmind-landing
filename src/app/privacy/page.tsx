import Link from 'next/link'
import { Container } from '@/components/Container'

export default function PrivacyPolicy() {
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
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600 mt-2">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                This Privacy Policy applies to the CoinMind AI (hereby referred to as &quot;Application&quot;), developed by CoinMind-ai Team. (hereby referred to as &quot;Service Provider&quot;). The Application is available as a free service with optional subscription plans.
              </p>
              <p>
                CoinMind-ai (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our AI-powered personal finance tracking application.
              </p>
              <p>
                By using CoinMind-ai, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our Service.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <h3 className="font-semibold text-gray-900">2.1 Personal Information</h3>
              <p>We collect the following personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Account Information:</strong> Email address, name, and profile information when you create an account</li>
                <li><strong>Username:</strong> Used to personalize your experience within the app</li>
                <li><strong>Authentication Data:</strong> OAuth provider information (Google) when you sign in</li>
                <li><strong>Contact Information:</strong> Email address for account notifications and support</li>
              </ul>

              <h3 className="font-semibold text-gray-900">2.2 Financial Data</h3>
              <p>We collect and process your financial information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Transaction Data:</strong> Amount, date, vendor, category, description, and currency of financial transactions</li>
                <li><strong>Receipt Images:</strong> Photos and PDFs of receipts you upload for OCR processing</li>
                <li><strong>Import Data:</strong> CSV/Excel files containing financial transactions</li>
                <li><strong>Voice Recordings:</strong> Audio data when you use voice-to-text features (processed in real-time, not stored)</li>
              </ul>

              <h3 className="font-semibold text-gray-900">2.3 Usage Data</h3>
              <p>We automatically collect usage information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>App Interaction Data:</strong> How you navigate and use features within the app</li>
                <li><strong>Session Information:</strong> Time spent in the app and feature usage patterns</li>
                <li><strong>Device Information:</strong> Browser type, operating system, device identifiers</li>
                <li><strong>Usage Analytics:</strong> Pages visited, features used, time spent on the Service</li>
                <li><strong>Performance Data:</strong> Error logs, performance metrics, and system health data</li>
                <li><strong>IP Address:</strong> For security and analytics purposes</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential App Functionality:</strong> To create and maintain your account, process and manage your subscription, and provide personalized insights</li>
                <li><strong>Service Provision:</strong> To provide and maintain our AI-powered finance tracking services</li>
                <li><strong>AI Processing:</strong> To process your financial data through Google Gemini AI for categorization and insights</li>
                <li><strong>Voice Recognition:</strong> To convert your voice input to text for transaction entry</li>
                <li><strong>Receipt Processing:</strong> To extract transaction data from receipt images using OCR technology</li>
                <li><strong>Account Management:</strong> To manage your account, authenticate users, and provide customer support</li>
                <li><strong>Analytics & Improvement:</strong> To understand how users interact with our features and identify areas for improvement</li>
                <li><strong>Security:</strong> To protect against fraud, abuse, and security threats</li>
                <li><strong>Communication:</strong> To send you important updates, security alerts, and support messages</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>We implement industry-standard security measures to protect your information, including encryption and secure data storage practices:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                <li><strong>Access Controls:</strong> Strict access controls and authentication requirements</li>
                <li><strong>Regular Audits:</strong> Regular security assessments and vulnerability testing</li>
                <li><strong>Data Minimization:</strong> We only collect and retain necessary data</li>
                <li><strong>Secure Infrastructure:</strong> Hosted on secure cloud infrastructure with industry-standard security</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Privacy Rights</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request export of your data in a machine-readable format</li>
                <li><strong>Objection:</strong> Object to certain processing of your data</li>
              </ul>
              <p>To exercise these rights, contact us at privacy@coinmind-ai.com.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <ul className="list-none space-y-1 ml-4">
                <li><strong>Email:</strong> support@coinmind-ai.com</li>
                <li><strong>Data Protection Officer:</strong> support@coinmind-ai.com</li>
                <li><strong>Website:</strong> https://coinmind-ai.com</li>
              </ul>
              <p>
                For EU users, you also have the right to lodge a complaint with your local data protection authority.
              </p>
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
