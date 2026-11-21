import { ArrowRight, GitBranchIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { outro } from '@/pkg/content'

export function Outro() {
  return (
    <section className="w-full bg-bg-raised">
      <div className="mx-auto w-full max-w-content px-5 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-section">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-text-muted">
          {outro.eyebrow}
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-bold text-text-primary sm:text-4xl">
          {outro.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {outro.lead}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button size="lg" className="w-full sm:w-auto">
            <GitBranchIcon className="size-4" aria-hidden="true" />
            {outro.primaryCta}
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            {outro.secondaryCta}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}