import Link from 'next/link'

export function GooglePlayLink() {
  return (
    <div className="relative inline-block">
      <Link
        href="#"
        className="inline-flex items-center justify-center rounded-lg bg-white px-3 sm:px-4 py-2 text-gray-900 hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm border border-gray-200 hover:border-coinmind-accent/50 hover:shadow-lg transform hover:scale-105"
      >
        <div className="flex items-center">
          <div className="mr-2 sm:mr-3">
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
          </div>
          <div className="text-left">
            <div className="text-xs uppercase tracking-wide text-gray-500">Get it on</div>
            <div className="text-xs sm:text-sm font-semibold text-coinmind-primary">Google Play</div>
          </div>
        </div>
      </Link>
      
      {/* Enhanced Diagonal Coming Soon Banner */}
      <div className="absolute -top-1 -left-1 w-24 h-7 bg-gradient-to-r from-red-500 to-red-600 transform -rotate-12 origin-top-left z-10 flex items-center justify-center shadow-lg border border-red-400">
        <span className="text-white text-xs font-bold transform rotate-12 tracking-wide">COMING SOON!</span>
      </div>
      
      {/* Subtle shadow overlay for depth */}
      <div className="absolute -top-1 -left-1 w-24 h-7 bg-black/10 transform -rotate-12 origin-top-left z-5"></div>
    </div>
  )
} 