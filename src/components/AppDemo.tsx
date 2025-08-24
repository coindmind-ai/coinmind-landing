'use client'

import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'

// Sample chat messages for the demo
const sampleMessages = [
  {
    id: 1,
    content: "Hello! I'm your AI financial assistant. How can I help you track your expenses today?",
    isUser: false,
    timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    suggestions: ["I spent $50 on groceries", "How much did I spend this month?", "Add a new transaction"]
  },
  {
    id: 2,
    content: "I spent $50 on groceries yesterday",
    isUser: true,
    timestamp: new Date(Date.now() - 240000), // 4 minutes ago
  },
  {
    id: 3,
    content: "✅ Transaction added: $50.00\n🏷️ Category: Food & Dining\n🏪 Merchant: Grocery Store\n📅 Date: Yesterday\n\nYour total spending this month is now $1,234.56. Would you like me to adjust the category?",
    isUser: false,
    timestamp: new Date(Date.now() - 180000), // 3 minutes ago
    suggestions: ["Keep category", "Change category", "Show spending breakdown"]
  },
  {
    id: 4,
    content: "Keep category",
    isUser: true,
    timestamp: new Date(Date.now() - 120000), // 2 minutes ago
  },
  {
    id: 5,
    content: "Perfect! Category confirmed. Your food spending this month is now $456.78. Is there anything else you'd like to track?",
    isUser: false,
    timestamp: new Date(Date.now() - 60000), // 1 minute ago
    suggestions: ["Add another transaction", "Show my budget", "Generate report"]
  }
]

function ChatBubble({ message, isUser }: { message: any; isUser: boolean }) {
  return (
    <div className={clsx("flex mb-4", isUser ? "justify-end" : "justify-start")}>
      {/* Assistant avatar */}
      {!isUser && (
        <div className="flex-shrink-0 mr-2">
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      )}

      {/* Message bubble */}
      <div className={clsx(
        "max-w-xs lg:max-w-md px-4 py-2 rounded-2xl",
        isUser 
          ? "bg-black text-white rounded-br-md" 
          : "bg-gray-100 text-gray-900 rounded-bl-md"
      )}>
        <p className="text-sm leading-relaxed">{message.content}</p>
        
        {/* Suggestions */}
        {message.suggestions && !isUser && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.suggestions.map((suggestion: string, idx: number) => (
              <button
                key={idx}
                className="px-3 py-1 bg-white text-gray-700 text-xs rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* User avatar */}
      {isUser && (
        <div className="flex-shrink-0 ml-2">
          <div className="w-9 h-9 bg-black rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

function ChatInput() {
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (inputValue.trim()) {
      setIsTyping(true)
      // Simulate typing delay
      setTimeout(() => {
        setIsTyping(false)
        setInputValue("")
      }, 2000)
    }
  }

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
                         className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          {isTyping && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          )}
        </div>
                 <button
           onClick={handleSend}
           disabled={!inputValue.trim()}
           className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
         >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
                         <div className="flex items-center space-x-3">
               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
              <div>
                <h3 className="font-semibold text-gray-900">CoinMind AI</h3>
                <p className="text-xs text-gray-500">Your financial assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500">Online</span>
            </div>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {sampleMessages.map((message) => (
              <ChatBubble key={message.id} message={message} isUser={message.isUser} />
            ))}
          </div>

          {/* Chat input */}
          <ChatInput />
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
