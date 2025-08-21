import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
  ghost: 'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors focus:ring-cyan-500',
    white:
      'bg-white text-coinmind-primary hover:bg-gray-50 active:bg-gray-100 active:text-coinmind-primary/80 focus:ring-coinmind-primary shadow-lg hover:shadow-xl',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 focus:ring-gray-800',
    primary: 'bg-coinmind-primary text-white hover:bg-coinmind-primary/90 active:bg-coinmind-primary active:text-white/80 focus:ring-coinmind-primary shadow-lg hover:shadow-xl',
    success: 'bg-coinmind-income text-white hover:bg-coinmind-income/90 active:bg-coinmind-income active:text-white/80 focus:ring-coinmind-income shadow-lg hover:shadow-xl',
    warning: 'bg-coinmind-expense text-white hover:bg-coinmind-expense/90 active:bg-coinmind-expense active:text-white/80 focus:ring-coinmind-expense shadow-lg hover:shadow-xl',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 focus:ring-gray-300',
    primary: 'border-coinmind-primary/30 text-coinmind-primary hover:border-coinmind-primary hover:bg-coinmind-primary/5 active:bg-coinmind-primary/10 focus:ring-coinmind-primary',
    success: 'border-coinmind-income/30 text-coinmind-income hover:border-coinmind-income hover:bg-coinmind-income/5 active:bg-coinmind-income/10 focus:ring-coinmind-income',
    warning: 'border-coinmind-expense/30 text-coinmind-expense hover:border-coinmind-expense hover:bg-coinmind-expense/5 active:bg-coinmind-expense/10 focus:ring-coinmind-expense',
  },
  ghost: {
    gray: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300',
    primary: 'text-coinmind-primary hover:bg-coinmind-primary/5 active:bg-coinmind-primary/10 focus:ring-coinmind-primary',
    success: 'text-coinmind-income hover:bg-coinmind-income/5 active:bg-coinmind-income/10 focus:ring-coinmind-income',
    warning: 'text-coinmind-expense hover:bg-coinmind-expense/5 active:bg-coinmind-expense/10 focus:ring-coinmind-expense',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
  | {
      variant: 'ghost'
      color?: keyof typeof variantStyles.ghost
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'gray'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : props.variant === 'ghost'
          ? variantStyles.ghost[props.color]
          : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
