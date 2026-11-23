import { useEffect, useState } from 'react'
import { toc } from '@/pkg/content'
import { cn } from '@/pkg/cn'

export function SideToc() {
  const [activeId, setActiveId] = useState<string>(toc.items[0]?.id ?? '')

  useEffect(() => {
    const sections = toc.items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-96px 0px -60% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="hidden lg:block">
      <nav className="sticky top-20 max-h-[calc(100dvh-6rem)] overflow-y-auto xl:top-24" aria-label="Содержание">
        <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted xl:text-xs xl:tracking-widest">
          Содержание
        </p>
        <ul className="space-y-1">
          {toc.items.map((item) => {
            const isActive = item.id === activeId
            return (
              <li key={item.id} className="min-w-0">
                <a
                  href={`#${item.id}`}
                  className={cn(
                    'flex min-w-0 items-baseline gap-2 rounded-btn px-2.5 py-2 text-sm transition xl:gap-3 xl:px-3',
                    isActive
                      ? 'bg-surface text-text-primary'
                      : 'text-text-secondary hover:bg-surface hover:text-text-primary',
                  )}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span
                    className={cn(
                      'shrink-0 font-mono text-xs',
                      isActive ? 'text-accent' : 'text-text-muted',
                    )}
                  >
                    {item.number}
                  </span>
                  <span className="min-w-0 flex-1 leading-snug">{item.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}