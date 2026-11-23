import { toc } from '@/pkg/content'

export function Toc() {
  return (
    <section className="w-full border-y border-border bg-bg-raised">
      <div className="mx-auto w-full max-w-content px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted sm:text-xs sm:tracking-widest">
          {toc.eyebrow}
        </p>

        <h2 className="text-balance font-display text-xl font-bold text-text-primary sm:text-2xl md:text-3xl">
          {toc.title}
        </h2>

        <ol className="mt-6 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3">
          {toc.items.map((item) => (
            <li key={item.id} className="min-w-0">
              <a
                href={`#${item.id}`}
                className="flex min-w-0 items-baseline gap-3 rounded-card border border-border bg-surface p-3 transition hover:border-border-strong hover:bg-surface-hover sm:gap-4 sm:p-4"
              >
                <span className="shrink-0 font-mono text-xs text-accent">{item.number}</span>
                <span className="min-w-0 flex-1 font-display text-sm font-semibold text-text-primary sm:text-base">
                  {item.title}
                </span>
                <span className="shrink-0 font-mono text-[0.7rem] text-text-muted sm:text-xs">
                  {item.duration}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}