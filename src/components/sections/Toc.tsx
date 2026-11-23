import { toc } from '@/pkg/content'

export function Toc() {
  return (
    <section className="w-full border-y border-border bg-bg-raised">
      <div className="mx-auto w-full max-w-content px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-widest text-text-muted">
          {toc.eyebrow}
        </p>
        <h2 className="font-display text-2xl font-bold text-text-primary sm:text-3xl">
          {toc.title}
        </h2>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2">
          {toc.items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="flex items-baseline gap-4 rounded-card border border-border bg-surface p-4 transition hover:border-border-strong hover:bg-surface-hover sm:p-5"
              >
                <span className="font-mono text-xs text-accent">{item.number}</span>
                <span className="flex-1 font-display text-base font-semibold text-text-primary">
                  {item.title}
                </span>
                <span className="font-mono text-xs text-text-muted">{item.duration}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}