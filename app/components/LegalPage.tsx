import type { LegalPageData } from '../lib/legal';

export function LegalPage({ page }: { page: LegalPageData }) {
  return (
    <section className="section">
      <div className="page-shell max-w-4xl">
        <header>
          <h1 className="section-title">{page.title}</h1>
          <p className="body-copy mt-6">{page.intro}</p>
        </header>
        <div className="mt-12 grid gap-8 text-base leading-relaxed">
          {page.sections.map((section) => (
            <section key={section.title} className="pt-1">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {section.body ? <p className="mt-3 text-muted dark:text-white/68">{section.body}</p> : null}
              {section.items ? (
                <ul className="mt-4 grid gap-2 pl-5 text-sm text-muted dark:text-white/68">
                  {section.items.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
        {page.updated ? <p className="mt-12 text-sm text-muted dark:text-white/55">{page.updated}</p> : null}
      </div>
    </section>
  );
}
