import Image from 'next/image'

interface LogomarkProps {
  className?: string
}

export function Logomark({ className = '' }: LogomarkProps) {
  return (
    <Image
      src="/coinmind-black.svg"
      alt="CoinMind"
      width={32}
      height={32}
      className={className}
    />
  )
}

interface LogoProps extends React.ComponentPropsWithoutRef<'div'> {
  showText?: boolean
}

export function Logo({ showText = true, className = '', ...props }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} {...props}>
      <Image
        src="/coinmind-black.svg"
        alt="CoinMind"
        width={40}
        height={40}
        className="w-10 h-10"
      />
      {showText && (
        <span className="text-xl font-bold text-gray-900">
          CoinMind
        </span>
      )}
    </div>
  )
}