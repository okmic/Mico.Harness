import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { chooseModel } from '@/pkg/content'

const gridAuto =
  'grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,16rem),1fr))]'

export function ChooseModel() {
  return (
    <Section id="choose-model" spacing="md" bare>
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
        {chooseModel.eyebrow}
      </p>
      <h2 className="mt-2 font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
        {chooseModel.title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
        {chooseModel.lead}
      </p>

      <div className="mt-10">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {chooseModel.process.title}
        </h3>
        <ol className="mt-4 space-y-3">
          {chooseModel.process.steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col gap-1 rounded-card border border-border bg-surface p-4 sm:flex-row sm:gap-3"
            >
              <span className="shrink-0 font-mono text-xs text-accent sm:pt-0.5">
                {step.number}
              </span>
              <p className="text-sm leading-relaxed text-text-secondary">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {chooseModel.criteria.title}
        </h3>
        <div className={`mt-4 ${gridAuto}`}>
          {chooseModel.criteria.items.map((item) => (
            <div key={item.name} className="min-w-0 rounded-card border border-border bg-surface p-4">
              <p className="font-display text-sm font-semibold text-text-primary">{item.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {chooseModel.models.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
          {chooseModel.models.note}
        </p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {chooseModel.models.items.map((item) => (
            <div key={item.name} className="min-w-0 rounded-card border border-border bg-surface p-4">
              <p className="font-display text-sm font-semibold text-text-primary">{item.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl md:text-2xl">
          {chooseModel.platforms.title}
        </h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
          {chooseModel.platforms.note}
        </p>
        <div className={`mt-4 ${gridAuto}`}>
          {chooseModel.platforms.items.map((item) => (
            <div key={item.name} className="min-w-0 rounded-card border border-border bg-surface p-4">
              <p className="font-display text-sm font-semibold text-text-primary">{item.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-card border border-accent/30 bg-accent-soft p-4 sm:p-5">
        <p className="font-display text-base font-semibold text-text-primary">
          {chooseModel.rule.title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{chooseModel.rule.text}</p>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          {chooseModel.bridge.text}
        </p>
        <a
          href={chooseModel.bridge.href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80"
        >
          {chooseModel.bridge.cta}
          <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </Section>
  )
}