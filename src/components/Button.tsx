import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex items-center justify-center rounded-xl py-2.5 px-4 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  outline:
    'inline-flex items-center justify-center rounded-xl border py-2.5 px-4 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  ghost:
    'inline-flex items-center justify-center rounded-xl py-2.5 px-4 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
}

const variantStyles = {
  solid: {
    white:
      'bg-white text-coinmind-primary hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-white shadow-sm hover:shadow-md',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 focus-visible:ring-gray-800',
    primary:
      'bg-coinmind-primary text-white hover:bg-gray-800 active:bg-coinmind-primary focus-visible:ring-coinmind-primary shadow-sm hover:shadow-md',
    accent:
      'bg-coinmind-accent text-coinmind-primary hover:opacity-90 active:opacity-100 focus-visible:ring-coinmind-accent shadow-sm hover:shadow-md',
    success:
      'bg-coinmind-income text-white hover:opacity-90 focus-visible:ring-coinmind-income shadow-sm',
    warning:
      'bg-coinmind-expense text-white hover:opacity-90 focus-visible:ring-coinmind-expense shadow-sm',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-100/60 focus-visible:ring-gray-400',
    primary:
      'border-coinmind-primary/20 text-coinmind-primary hover:border-coinmind-primary/50 hover:bg-coinmind-primary/5 focus-visible:ring-coinmind-primary',
    white:
      'border-white/25 text-white hover:border-white/50 hover:bg-white/10 focus-visible:ring-white',
    success:
      'border-coinmind-income/30 text-coinmind-income hover:border-coinmind-income hover:bg-coinmind-income/5 focus-visible:ring-coinmind-income',
    warning:
      'border-coinmind-expense/30 text-coinmind-expense hover:border-coinmind-expense hover:bg-coinmind-expense/5 focus-visible:ring-coinmind-expense',
  },
  ghost: {
    gray: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-300',
    primary:
      'text-coinmind-primary hover:bg-coinmind-primary/5 active:bg-coinmind-primary/10 focus-visible:ring-coinmind-primary',
    success:
      'text-coinmind-income hover:bg-coinmind-income/5 focus-visible:ring-coinmind-income',
    warning:
      'text-coinmind-expense hover:bg-coinmind-expense/5 focus-visible:ring-coinmind-expense',
  },
}

type SolidProps = {
  variant?: 'solid'
  color?: keyof typeof variantStyles.solid
}

type OutlineProps = {
  variant: 'outline'
  color?: keyof typeof variantStyles.outline
}

type GhostProps = {
  variant: 'ghost'
  color?: keyof typeof variantStyles.ghost
}

type LinkOrButtonProps =
  | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
  | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
      href?: undefined
    })

export type ButtonProps = (SolidProps | OutlineProps | GhostProps) &
  LinkOrButtonProps

export function Button(props: ButtonProps) {
  const {
    variant = 'solid',
    color = 'primary',
    className,
    ...rest
  } = props as ButtonProps & {
    variant?: 'solid' | 'outline' | 'ghost'
    color?: string
  }

  const colorClasses =
    variant === 'outline'
      ? variantStyles.outline[color as keyof typeof variantStyles.outline] ??
        variantStyles.outline.primary
      : variant === 'ghost'
        ? variantStyles.ghost[color as keyof typeof variantStyles.ghost] ??
          variantStyles.ghost.primary
        : variantStyles.solid[color as keyof typeof variantStyles.solid] ??
          variantStyles.solid.primary

  const mergedClassName = clsx(baseStyles[variant], colorClasses, className)

  if (typeof rest.href === 'undefined') {
    const { type = 'button', ...buttonProps } = rest as Omit<
      React.ComponentPropsWithoutRef<'button'>,
      'color'
    >
    return <button type={type} className={mergedClassName} {...buttonProps} />
  }

  const linkProps = rest as Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    'color'
  >
  return <Link className={mergedClassName} {...linkProps} />
}
