import { cn } from '@/pkg/cn'

type BrandProps = {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-base',
} as const

export function Brand({ size = 'md', className }: BrandProps) {
  return (
    <span className={cn('font-display font-semibold tracking-tight', sizeMap[size], className)}>
      <span className="text-text-primary">Mico</span>
      <span className="text-accent">.Harness</span>
    </span>
  )
}