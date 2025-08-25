import Image from 'next/image'
import clsx from 'clsx'

import frame from '@/images/phone-frame.svg'

function PlaceholderFrame(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 366 729" aria-hidden="true" {...props}>
      <path
        fill="#F2F2F2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
      />
      <rect x="154" y="29" width="56" height="5" rx="2.5" fill="#D4D4D4" />
    </svg>
  )
}

// Voice Recording Feature Component
function VoiceRecordingFeature() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="text-xl font-bold">Voice Transaction</div>
        <div className="text-sm text-blue-100 mt-1">Speak your expenses naturally</div>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Recording Status */}
        <div className="text-center">
          <div className="text-sm text-gray-600 mb-2">Recording...</div>
          <div className="text-2xl font-bold text-gray-900">00:15</div>
        </div>
        
        {/* Waveform Visualization */}
        <div className="flex items-center justify-center gap-1 h-16">
          {[2, 4, 6, 8, 12, 8, 6, 4, 2, 6, 10, 8, 6, 4, 2, 8, 12, 10, 8, 6].map((height, index) => (
            <div
              key={index}
              className="w-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
        
        {/* Recording Button */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Transcription */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-2">Transcription</div>
          <div className="text-gray-900 font-medium">
            {`"I spent fifty dollars on groceries at Walmart today"`}
          </div>
        </div>
        
        {/* Extracted Data */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="text-sm font-medium text-blue-900 mb-3">Extracted Information</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-700">Amount:</span>
              <span className="text-sm font-semibold text-blue-900">$50.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-700">Category:</span>
              <span className="text-sm font-semibold text-blue-900">Food & Dining</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-700">Store:</span>
              <span className="text-sm font-semibold text-blue-900">Walmart</span>
            </div>
          </div>
        </div>
        
        {/* Voice Commands Help */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-900 mb-2">Try saying:</div>
          <div className="space-y-1 text-xs text-gray-600">
            <div>• {`"I spent $25 on lunch"`}</div>
            <div>• {`"Paid 100 riyals for gas"`}</div>
            <div>• {`"Coffee shop, $8.50"`}</div>
            <div>• {`"دفعت 50 ريال على الطعام"`}</div>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex gap-3">
          <button className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium">
            Cancel
          </button>
          <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium">
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  )
}

// OCR Feature Component
function OCRFeature() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="bg-gray-800 text-white p-4">
        <div className="text-xl font-bold">Receipt OCR</div>
        <div className="text-sm text-gray-300 mt-1">Smart receipt scanning</div>
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Receipt Capture Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-gray-700 font-medium">Take photo of receipt</div>
          </div>
        </div>
        
        {/* Extracted Data */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-lg font-semibold text-gray-900 mb-4">Extracted Information</div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Store:</span>
              <span className="text-gray-900 font-medium">Walmart</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Date:</span>
              <span className="text-gray-900 font-medium">Dec 15, 2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Category:</span>
              <span className="text-gray-900 font-medium">Groceries</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total:</span>
              <span className="text-gray-900 font-bold text-lg">$67.89</span>
            </div>
          </div>
        </div>
        
        {/* Additional Features */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium text-blue-900">AI-Powered Recognition</div>
              <div className="text-xs text-blue-700">Automatically detects store, date, and items</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Action Button */}
      <div className="p-4 bg-white border-t border-gray-200">
        <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Add Transaction
        </button>
      </div>
    </div>
  )
}

// Chat Feature Component
function ChatFeature() {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="text-sm text-gray-500">9:56 PM</div>
      </div>
      
      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {/* User Message */}
        <div className="flex justify-end gap-2 mb-4">
          <div className="flex flex-col max-w-[70%]">
            <div className="bg-gray-700 text-white rounded-2xl px-4 py-2 text-sm">
              I spent $50 on groceries
            </div>
            <div className="text-xs text-gray-500 mt-1 text-right">10:03 PM</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0 mt-1">
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Bot Message */}
        <div className="flex gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-xs font-bold">B</span>
          </div>
          <div className="flex flex-col max-w-[70%]">
            <div className="bg-gray-200 text-gray-800 rounded-2xl px-4 py-2 text-sm">
              ✅ Added transaction successfully! <strong>50.00$</strong>. Category: Food & Dining.
            </div>
            <div className="text-xs text-gray-500 mt-1">10:04 PM</div>
          </div>
        </div>
        
        {/* Arabic User Message */}
        <div className="flex justify-end gap-2 mb-4">
          <div className="flex flex-col max-w-[70%]">
            <div className="bg-gray-700 text-white rounded-2xl px-4 py-2 text-sm">
              دفعت 200 ريال على الطعام
            </div>
            <div className="text-xs text-gray-500 mt-1 text-right">10:04 PM</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0 mt-1">
            <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Arabic Bot Message */}
        <div className="flex gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-white text-xs font-bold">B</span>
          </div>
          <div className="flex flex-col max-w-[70%]">
            <div className="bg-gray-200 text-gray-800 rounded-2xl px-4 py-2 text-sm">
              ✅ تم حفظ المعاملة بنجاح! <strong>200.00 ر.س.</strong> الفئة: Food & Dining.
            </div>
            <div className="text-xs text-gray-500 mt-1">10:04 PM</div>
          </div>
        </div>
      </div>
      
      {/* Input Field */}
      <div className="flex items-center gap-2 p-4 bg-white border-t border-gray-200">
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Type a message or tap mic..."
            className="w-full bg-transparent text-sm text-gray-600 placeholder-gray-500 outline-none"
            readOnly
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// Categories Feature Component
function CategoriesFeature() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="text-xl font-bold text-gray-900">Category Details</div>
        <div className="text-sm text-gray-600">Total: $200,006,332.51</div>
      </div>
      
      {/* Category List */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Food & Dining */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm mb-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">Food & Dining</div>
              <div className="text-sm text-gray-500">0.0% • 71 transactions</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-gray-900">$2,157.35</div>
            <div className="text-sm text-red-600">Expense</div>
          </div>
        </div>
        
        {/* Entertainment */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm mb-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">Entertainment</div>
              <div className="text-sm text-gray-500">0.0% • 2 transactions</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-gray-900">$9.16</div>
            <div className="text-sm text-red-600">Expense</div>
          </div>
        </div>
        
        {/* Other Expenses */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm mb-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">Other Expenses</div>
              <div className="text-sm text-gray-500">100.0% • 9 transactions</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-gray-900">$200,002,100.00</div>
            <div className="text-sm text-red-600">Expense</div>
          </div>
        </div>
        
        {/* Shopping */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm mb-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">Shopping</div>
              <div className="text-sm text-gray-500">0.0% • 1 transaction</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-gray-900">$12.00</div>
            <div className="text-sm text-red-600">Expense</div>
          </div>
        </div>
        
        {/* Gift */}
        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm mb-3">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900">Gift</div>
              <div className="text-sm text-gray-500">0.0% • 3 transactions</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-gray-900">$54.00</div>
            <div className="text-sm text-green-600">Income</div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="flex gap-3 p-4 bg-white border-t border-gray-200">
        <div className="flex-1 bg-green-500 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">$2,054.00</div>
          <div className="text-sm opacity-90">Total Income</div>
        </div>
        <div className="flex-1 bg-red-500 rounded-xl p-4 text-white">
          <div className="text-2xl font-bold">$200,004,278.5</div>
          <div className="text-sm opacity-90">Total Expenses</div>
        </div>
      </div>
    </div>
  )
}

// Dashboard Feature Component
function DashboardFeature() {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="p-4 bg-white border-b border-gray-200">
        <div className="text-xl font-bold text-gray-900 mb-2">Dashboard</div>
        <div className="text-sm text-gray-600">{`Welcome back! Here's your financial overview`}</div>
      </div>
      
      {/* Balance Cards */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">Total Balance</div>
            <div className="text-2xl font-bold text-gray-900">$2,157.35</div>
            <div className="text-xs text-green-600 mt-1">+12.5% from last month</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-sm text-gray-600 mb-1">This Month</div>
            <div className="text-2xl font-bold text-gray-900">$1,245.80</div>
            <div className="text-xs text-red-600 mt-1">-8.2% from last month</div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <div className="text-lg font-semibold text-gray-900 mb-3">Quick Stats</div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-xs text-gray-600">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">$890</div>
              <div className="text-xs text-gray-600">Income</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">$356</div>
              <div className="text-xs text-gray-600">Expenses</div>
            </div>
          </div>
        </div>
        
        {/* Recent Transactions */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="text-lg font-semibold text-gray-900 mb-3">Recent Transactions</div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Grocery Store</div>
                  <div className="text-xs text-gray-500">Food & Dining</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-red-600">-$45.20</div>
                <div className="text-xs text-gray-500">2 hours ago</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Salary Deposit</div>
                  <div className="text-xs text-gray-500">Income</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-600">+$2,500.00</div>
                <div className="text-xs text-gray-500">Yesterday</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PhoneFrame({
  className,
  children,
  priority = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { priority?: boolean }) {
  return (
    <div className={clsx('relative aspect-[366/729] sm:aspect-[366/729]', className)} {...props}>
      <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
      <div className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] h-[calc(686/729*100%)] w-[calc(318/366*100%)] overflow-hidden">
        {children}
      </div>
      <PlaceholderFrame className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100" />
      <Image
        src={frame}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full"
        unoptimized
        priority={priority}
      />
    </div>
  )
}

// Export feature components for easy use
export { ChatFeature, CategoriesFeature, DashboardFeature, OCRFeature, VoiceRecordingFeature }
