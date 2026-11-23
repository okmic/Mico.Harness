import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative isolate min-h-dvh w-full overflow-x-hidden bg-bg-base font-sans text-text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-btn focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-bg-base sm:focus:left-4 sm:focus:top-4 sm:focus:px-4"
      >
        К содержанию
      </a>
      <main id="main" className="relative w-full">
        {children}
      </main>
    </div>
  )
}