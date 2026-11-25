import { outro } from '@/pkg/content'

export function Outro() {
  return (
    <section className="w-full bg-bg-raised">
      <div className="mx-auto w-full max-w-content px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-section">
        <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-widest">
          {outro.eyebrow}
        </p>

        <h2 className="max-w-2xl text-accent font-display text-2xl font-bold text-text-primary sm:text-3xl md:text-4xl">
          <a href={outro.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-text-primary"
          >{outro.title}</a>
        </h2>

        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-text-secondary sm:text-base md:text-lg">
          {outro.lead}
        </p>
      </div>
    </section>
  )
}