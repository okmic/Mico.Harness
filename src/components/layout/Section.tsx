import type { ReactNode } from 'react'
import { cn } from '@/pkg/cn'

type SectionProps = {
  id?: string
  tone?: 'base' | 'raised'
  spacing?: 'sm' | 'md' | 'lg'
  bare?: boolean
  className?: string
  children: ReactNode
}

const spacingMap = {
  sm: 'py-10 sm:py-14 lg:py-16',
  md: 'py-14 sm:py-20 lg:py-section',
  lg: 'py-16 sm:py-section lg:py-section-lg',
} as const

export function Section({
  id,
  tone = 'base',
  spacing = 'md',
  bare = false,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('w-full overflow-x-hidden', spacingMap[spacing], 'bg-bg-base', className)}
    >
      {bare ? (
        <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              'min-w-0 rounded-card border border-border p-4 shadow-card sm:p-6 md:p-8 lg:p-10',
              tone === 'raised' ? 'bg-bg-raised' : 'bg-bg-base',
            )}
          >
            {children}
          </div>
        </div>
      ) : (
        <div className="mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8">{children}</div>
      )}
    </section>
  )
}