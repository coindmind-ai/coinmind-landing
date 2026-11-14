import Image from 'next/image'

interface LogomarkProps {
  className?: string
}

export function Logomark({ className = '' }: LogomarkProps) {
  return (
    <Image
      src="/coinmind-black.svg"
      alt="CoinMind AI"
      width={32}
      height={32}
      className={className}
    />
  )
}

interface LogoProps extends React.ComponentPropsWithoutRef<'div'> {
  showText?: boolean
}

export function Logo({
  showText = true,
  className = '',
  ...props
}: LogoProps) {
  return (
    <div
      dir="ltr"
      className={`inline-flex items-center gap-2.5 ${className}`}
      {...props}
    >
      <Image
        src="/coinmind-black.svg"
        alt="CoinMind AI"
        width={38}
        height={38}
        className="h-9 w-9"
      />
      {showText && (
        <span className="text-lg font-bold tracking-tight text-gray-900">
          CoinMind AI
        </span>
      )}
    </div>
  )
}
