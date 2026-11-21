import type { ReactNode } from 'react'
import { cn } from '@/pkg/cn'

type SectionProps = {
  id?: string
  tone?: 'base' | 'raised'
  spacing?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
}

const spacingMap = {
  sm: 'py-16',
  md: 'py-16 sm:py-20 lg:py-section',
  lg: 'py-20 sm:py-section lg:py-section-lg',
} as const

export function Section({
  id,
  tone = 'base',
  spacing = 'md',
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacingMap[spacing],
        tone === 'raised' ? 'bg-bg-raised' : 'bg-bg-base',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}