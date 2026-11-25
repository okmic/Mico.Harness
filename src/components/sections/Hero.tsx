import { Brand } from '@/components/ui/Brand'
import { Badge } from '@/components/ui/Badge'
import { author, hero, MicoHarnessRelease } from '@/pkg/content'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-content px-4 pb-16 pt-header sm:px-6 sm:pb-24 sm:pt-header-sm lg:px-8 lg:pb-32 lg:pt-header-lg">
        <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-8 sm:gap-3">
          <Brand size="lg" />
          <Badge>{MicoHarnessRelease.date}</Badge>
        </div>

        <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted sm:mb-6 sm:text-xs sm:tracking-widest">
          {hero.eyebrow}
        </p>

        <h1 className="max-w-4xl text-balance font-display text-[1.75rem] font-bold leading-[1.12] tracking-[-0.02em] text-text-primary min-[375px]:text-[2rem] sm:text-[2.5rem] sm:leading-[1.1] md:text-5xl lg:text-6xl lg:leading-[1.05]">
          {hero.title}
        </h1>

        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-text-secondary sm:mt-6 sm:text-base md:text-lg">
          {hero.lead}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8rem] text-text-muted sm:mt-8 sm:text-sm">
          <span>
            Автор{' '}
            <a
              href="https://okmic.github.io/MicoEngineer/"
              className="text-accent hover:text-accent/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              {author.name}
            </a>
          </span>
          <span className="text-border" aria-hidden="true">·</span>
          <span>{hero.meta}</span>
        </div>
      </div>
    </section>
  )
}