'use client'

import { useId, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'

// Sample transaction data for the demo - exactly 4 transactions
const sampleTransactions = [
  {
    id: 1,
    category: 'Shopping',
    description: 'Vacation 🌴',
    wallet: 'Cash Wallet',
    amount: -382.33,
    conversion: -5000,
    conversionCurrency: 'EGP',
    date: 'Today',
    icon: '🛍️',
    color: 'bg-purple-100 text-purple-600',
    iconBg: 'bg-purple-500'
  },
  {
    id: 2,
    category: 'Food & Drink',
    description: 'Restaurant',
    wallet: 'Cash Wallet',
    amount: -156.59,
    conversion: -10000,
    conversionCurrency: 'YER',
    date: 'Today',
    icon: '🍽️',
    color: 'bg-orange-100 text-orange-600',
    iconBg: 'bg-orange-500'
  },
  {
    id: 3,
    category: 'Transportation',
    description: 'Uber ride',
    wallet: 'Cash Wallet',
    amount: -45.20,
    conversion: -600,
    conversionCurrency: 'EGP',
    date: 'Today',
    icon: '🚗',
    color: 'bg-blue-100 text-blue-600',
    iconBg: 'bg-blue-500'
  },
  {
    id: 4,
    category: 'Entertainment',
    description: 'Movie tickets',
    wallet: 'Cash Wallet',
    amount: -120.00,
    conversion: -1500,
    conversionCurrency: 'EGP',
    date: 'Today',
    icon: '🎬',
    color: 'bg-pink-100 text-pink-600',
    iconBg: 'bg-pink-500'
  }
]

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-2 sm:px-3 py-1 bg-white">
      <span className="text-xs font-medium text-gray-900">11:13</span>
      <div className="flex items-center space-x-1">
        <div className="flex space-x-0.5">
          {[1, 2, 3, 4].map((bar) => (
            <div key={bar} className="w-0.5 h-2 bg-gray-900 rounded-sm"></div>
          ))}
        </div>
        <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <div className="w-4 h-2 border border-gray-900 rounded-sm flex items-center justify-center">
          <div className="w-3 h-1 bg-gray-900 rounded-sm"></div>
        </div>
      </div>
    </div>
  )
}

function CashFlowHeader() {
  return (
    <div className="flex items-center justify-between p-2 sm:p-3 bg-white border-b border-gray-100">
      <div>
        <h1 className="text-lg sm:text-2xl font-bold text-gray-900">SAR 427.59</h1>
        <p className="text-xs text-gray-500">Cash Flow</p>
      </div>
      <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}

function FilterBar() {
  return (
    <div className="flex items-center space-x-1 sm:space-x-2 p-2 sm:p-3 bg-white border-b border-gray-100 overflow-x-auto">
      <button className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap">
        <span>All Wallets</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <button className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-200 transition-colors whitespace-nowrap">
        <span>By years</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  )
}

function SpendingOverviewButton() {
  return (
    <div className="p-2 sm:p-3 bg-white border-b border-gray-100">
      <motion.button 
        className="flex items-center justify-center space-x-2 w-full py-2 px-3 bg-gradient-to-r from-coinmind-primary to-coinmind-accent rounded-xl text-white text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span className="whitespace-nowrap">Spending Overview</span>
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
    </div>
  )
}

function TransactionItem({ transaction, index }: { transaction: any; index: number }) {
  const isIncome = transaction.amount > 0
  
  return (
    <motion.div 
      className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-50 last:border-b-0"
      whileHover={{ scale: 1.01, backgroundColor: '#f9fafb' }}
      whileTap={{ scale: 0.99 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Category Icon */}
      <div className={clsx(
        "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-sm sm:text-base shadow-md flex-shrink-0",
        transaction.iconBg
      )}>
        {transaction.icon}
      </div>
      
      {/* Transaction Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-bold text-gray-900 text-xs sm:text-sm truncate">{transaction.category}</h4>
          <span className={clsx(
            "font-bold text-xs sm:text-sm flex-shrink-0 ml-2",
            isIncome ? "text-coinmind-income" : "text-coinmind-expense"
          )}>
            {isIncome ? '+' : ''}SAR {Math.abs(transaction.amount).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-2 min-w-0">
            <span className="text-xs text-gray-500 font-medium truncate">{transaction.wallet}</span>
            {transaction.description && (
              <span className="text-xs bg-gray-100 text-gray-600 px-1.5 sm:px-2 py-0.5 rounded-full font-medium truncate">
                {transaction.description}
              </span>
            )}
          </div>
          <span className="text-xs text-gray-400 font-medium flex-shrink-0 ml-2">
            {isIncome ? '+' : ''}{transaction.conversionCurrency} {Math.abs(transaction.conversion).toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function TransactionList() {
  return (
    <div className="flex-1 overflow-y-auto bg-white">
      {/* Date Header */}
      <div className="flex items-center justify-between px-2 sm:px-3 py-2 sm:py-3 bg-gray-50 border-b border-gray-100">
        <h3 className="font-bold text-gray-900 text-xs sm:text-sm">Today</h3>
        <span className="text-xs font-bold text-coinmind-expense">-SAR 704.12</span>
      </div>
      
      {/* Transaction Items */}
      <div className="divide-y divide-gray-50">
        {sampleTransactions.map((transaction, index) => (
          <TransactionItem key={transaction.id} transaction={transaction} index={index} />
        ))}
      </div>
      
      {/* Voice Record Icon */}
      <motion.div 
        className="flex items-center justify-center p-4 sm:p-6 bg-white border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Microphone Icon (Active/Recording) */}
        <div className="relative -mt-4 sm:-mt-6">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Active indicator */}
          <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
        </div>
      </motion.div>
    </div>
  )
}

function FloatingActionButton() {
  return (
    <motion.button
      className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-200 z-10"
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </motion.button>
  )
}

export function AppDemo() {
  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="flex flex-col h-full bg-gray-50 relative">
          {/* Status Bar */}
          <StatusBar />

          {/* Cash Flow Header */}
          <CashFlowHeader />

          {/* Filter Bar */}
          <FilterBar />

          {/* Spending Overview Button */}
          <SpendingOverviewButton />

          {/* Transactions List */}
          <TransactionList />

          {/* Floating Action Button */}
          <FloatingActionButton />
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
