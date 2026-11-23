import { ArrowRight, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { outro } from '@/pkg/content'

export function Outro() {
  return (
    <section className="w-full bg-bg-raised">
      <div className="mx-auto w-full max-w-content px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-section">
        <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-widest">
          {outro.eyebrow}
        </p>

        <h2 className="max-w-2xl text-balance font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
          {outro.title}
        </h2>

        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-text-secondary sm:text-base md:text-lg">
          {outro.lead}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <Button size="lg" className="w-full justify-center sm:w-auto">
            <Code2 className="size-4 shrink-0" aria-hidden="true" />
            {outro.primaryCta}
          </Button>
          <Button size="lg" variant="secondary" className="w-full justify-center sm:w-auto">
            {outro.secondaryCta}
            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}