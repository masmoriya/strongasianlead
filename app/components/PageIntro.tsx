type PageIntroProps = {
  title: string;
  eyebrow?: string;
  body?: string;
};

export function PageIntro({ title, eyebrow, body }: PageIntroProps) {
  return (
    <section className="section">
      <div className="page-shell fade-in">
        {eyebrow ? <p className="mb-4 text-sm font-semibold text-red">{eyebrow}</p> : null}
        <h1 className="section-title">{title}</h1>
        {body ? <p className="body-copy mt-6">{body}</p> : null}
      </div>
    </section>
  );
}
