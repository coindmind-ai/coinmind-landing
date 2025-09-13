import { type Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Data Deletion Request - CoinMind AI Expense Tracker',
  description: 'Request deletion of your CoinMind AI account and data. Learn about our data deletion process, what data is removed or retained, and how to submit your request.',
  keywords: [
    'data deletion request',
    'delete account CoinMind',
    'remove personal data',
    'GDPR data deletion',
    'account deletion process',
    'data retention policy',
  ],
  openGraph: {
    title: 'Data Deletion Request - CoinMind AI',
    description: 'Request deletion of your CoinMind AI account and data. Complete control over your personal information.',
    url: 'https://coinmind-ai.com/data-deletion-request',
    images: [
      {
        url: '/api/og?title=Data%20Deletion%20Request&description=Request%20deletion%20of%20your%20account%20and%20data',
        width: 1200,
        height: 630,
        alt: 'CoinMind Data Deletion Request',
      },
    ],
  },
  alternates: {
    canonical: 'https://coinmind-ai.com/data-deletion-request',
  },
}

export default function DataDeletionRequest() {
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
              <h1 className="text-3xl font-bold text-gray-900">Data Deletion Request</h1>
              <p className="text-gray-600 mt-2">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-yellow-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="space-y-2 text-sm text-yellow-800">
                <p className="font-semibold">Important: Account deletion is permanent</p>
                <p>Once your account is deleted, this action cannot be reversed. Please ensure you have exported any data you wish to keep before proceeding with your deletion request.</p>
              </div>
            </div>
          </div>

          {/* How to Request Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">How to Request Data Deletion</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Steps to Delete Your Account</h3>
                <ol className="list-decimal list-inside space-y-3 text-sm text-gray-700">
                  <li>
                    <strong>Prepare your request:</strong> Note down your account email address and any specific deletion requirements
                  </li>
                  <li>
                    <strong>Send an email to:</strong>{' '}
                    <a href="mailto:support@coinmind-ai.com?subject=Data%20Deletion%20Request" className="text-blue-600 hover:text-blue-800 font-medium">
                      support@coinmind-ai.com
                    </a>
                  </li>
                  <li>
                    <strong>Include in your email:</strong>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li>Subject line: &quot;Data Deletion Request&quot;</li>
                      <li>Your registered email address</li>
                      <li>Your username (as shown in the app)</li>
                      <li>Specify if you want full deletion or partial deletion</li>
                      <li>Any specific data categories you want retained (if applicable)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Verification:</strong> We will verify your identity by sending a confirmation code to your registered email
                  </li>
                  <li>
                    <strong>Processing:</strong> Your request will be processed within 30 days of verification
                  </li>
                  <li>
                    <strong>Confirmation:</strong> You will receive an email confirmation once deletion is complete
                  </li>
                </ol>
              </div>

              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <strong>Developer/App Name (as shown on store listing):</strong> CoinMind-ai Team / CoinMind AI - Expense Tracker
                </p>
                <p>
                  <strong>Support Email:</strong>{' '}
                  <a href="mailto:support@coinmind-ai.com" className="text-blue-600 hover:text-blue-800">
                    support@coinmind-ai.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Data Deletion Details */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What Data is Deleted</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>When you request account deletion, the following data will be permanently removed:</p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">Data That Will Be Deleted Immediately</h3>
                <ul className="list-disc list-inside space-y-2 text-red-800">
                  <li><strong>Account Information:</strong> Email, username, profile data, and authentication tokens</li>
                  <li><strong>Personal Financial Data:</strong> Transaction descriptions, custom categories, personal notes, and tags</li>
                  <li><strong>Receipt Images:</strong> All uploaded receipts and processed OCR data</li>
                  <li><strong>Personal Settings:</strong> App preferences, custom categories, and notification settings</li>
                  <li><strong>Identifiable Analytics:</strong> Usage patterns and interaction data linked to your account</li>
                  <li><strong>Export History:</strong> Records of data exports and generated reports</li>
                  <li><strong>AI Processing Data:</strong> Personalized insights and AI-generated categorizations</li>
                  <li><strong>Subscription Information:</strong> Active subscription status and payment methods</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">Data That May Be Retained (Anonymized or for Legal Compliance)</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>
                    <strong>Anonymized Transaction Records (up to 7 years):</strong> Basic transaction data (amounts, dates, merchant categories) with all personal identifiers removed, retained only if required for tax/legal compliance in your jurisdiction
                  </li>
                  <li>
                    <strong>Anonymized Analytics (indefinite):</strong> Completely de-identified usage data for service improvement
                  </li>
                  <li>
                    <strong>Security Logs (90 days):</strong> Access logs for security and fraud prevention (IP addresses may be retained)
                  </li>
                  <li>
                    <strong>Backup Archives (30 days):</strong> Your data may persist in automated backups for up to 30 days before complete removal
                  </li>
                  <li>
                    <strong>Communication Records (3 years):</strong> Support tickets and email correspondence for legal documentation purposes
                  </li>
                  <li>
                    <strong>Payment Records (as required by law):</strong> Subscription payment history as required by financial regulations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Retention Periods */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Retention Periods</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 font-semibold">Data Type</th>
                    <th className="text-left py-2 font-semibold">Retention Period</th>
                    <th className="text-left py-2 font-semibold">Reason</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3">Personal Account Data</td>
                    <td className="py-3">Deleted immediately</td>
                    <td className="py-3">User request</td>
                  </tr>
                  <tr>
                    <td className="py-3">Financial Transactions (Anonymized)</td>
                    <td className="py-3">Up to 7 years*</td>
                    <td className="py-3">Tax & legal compliance (only if required)</td>
                  </tr>
                  <tr>
                    <td className="py-3">Security Logs</td>
                    <td className="py-3">90 days</td>
                    <td className="py-3">Security & fraud prevention</td>
                  </tr>
                  <tr>
                    <td className="py-3">Backup Data</td>
                    <td className="py-3">30 days</td>
                    <td className="py-3">System recovery</td>
                  </tr>
                  <tr>
                    <td className="py-3">Support Communications</td>
                    <td className="py-3">3 years</td>
                    <td className="py-3">Legal documentation</td>
                  </tr>
                  <tr>
                    <td className="py-3">Anonymized Analytics</td>
                    <td className="py-3">Indefinite</td>
                    <td className="py-3">Service improvement</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 italic">
                * Only anonymized transaction data (amounts, dates, categories) may be retained if legally required. All personal identifiers, descriptions, notes, and custom tags are permanently deleted immediately upon request.
              </p>
            </div>
          </div>

          {/* Alternative Options */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Alternative Options</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>Before requesting full account deletion, you may consider these alternatives:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Data Export:</strong> Download all your data in CSV or PDF format before deletion
                </li>
                <li>
                  <strong>Account Deactivation:</strong> Temporarily disable your account (can be reactivated later)
                </li>
                <li>
                  <strong>Selective Data Deletion:</strong> Request removal of specific data categories only
                </li>
                <li>
                  <strong>Subscription Cancellation:</strong> Cancel subscription but keep free account active
                </li>
              </ul>
            </div>
          </div>

          {/* Processing Timeline */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Processing Timeline</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">1</div>
                  <div>
                    <strong>Day 1-3:</strong> Request received and identity verification initiated
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">2</div>
                  <div>
                    <strong>Day 4-7:</strong> Verification completed and deletion process begins
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">3</div>
                  <div>
                    <strong>Day 8-30:</strong> Data deletion from all systems and backups
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">4</div>
                  <div>
                    <strong>Day 30:</strong> Confirmation email sent upon completion
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>For questions about data deletion or to submit your request:</p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:support@coinmind-ai.com" className="text-blue-600 hover:text-blue-800">support@coinmind-ai.com</a></p>
                <p><strong>Subject Line:</strong> Data Deletion Request</p>
                <p><strong>Response Time:</strong> Within 48 hours</p>
                <p><strong>Data Protection Officer:</strong> <a href="mailto:support@coinmind-ai.com" className="text-blue-600 hover:text-blue-800">support@coinmind-ai.com</a></p>
              </div>
              <p className="text-xs text-gray-600">
                For EU residents: You have the right to lodge a complaint with your local data protection authority if you are not satisfied with our response.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 py-8">
            <p>Copyright © 2025 CoinMind-ai. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}