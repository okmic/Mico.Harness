import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Brand } from '@/components/ui/Brand'
import { Badge } from '@/components/ui/Badge'
import { author, hero, MicoHarnessRelease } from '@/pkg/content'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-content px-5 pb-20 pt-header sm:px-6 sm:pb-28 sm:pt-header-sm lg:px-8 lg:pb-36 lg:pt-header-lg">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Brand size="lg" />
          <Badge>
            {MicoHarnessRelease.date}
          </Badge>
        </div>
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-text-muted">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-[2.25rem] font-bold leading-[1.08] tracking-[-0.02em] text-text-primary sm:text-5xl lg:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {hero.lead}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button size="lg" className="w-full sm:w-auto">
            {hero.primaryCta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            {hero.secondaryCta}
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-text-muted">
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
          <span className="text-border">·</span>
          <span>{hero.meta}</span>
        </div>
      </div>
    </section>
  )
}