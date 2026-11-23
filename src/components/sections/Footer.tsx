import { Brand } from '@/components/ui/Brand'
import { author, footer, MicoHarnessRelease } from '@/pkg/content'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-base">
      <div className="mx-auto w-full max-w-content px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0">
            <Brand size="md" />
            <p className="mt-1 text-sm text-text-muted">{author.role}</p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {author.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-4 sm:items-end">
            <div className="flex flex-wrap gap-2">
              {footer.hashtags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-badge border border-border bg-surface px-3 py-1 font-mono text-xs text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-text-muted">
              Дальше,{' '}
              <a
                href="https://okmic.github.io/Mico.Harness.Code/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary"
              >
                <span className="text-accent">Mico.Harness.Code</span>.
              </a>{' '}
              {MicoHarnessRelease.next}.
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-text-muted">{footer.copyright}</p>
      </div>
    </footer>
  )
}