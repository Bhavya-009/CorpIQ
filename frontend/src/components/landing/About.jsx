
export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Built by developers, for decision makers
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            CorpIQ is an AI-powered Business Intelligence agent that transforms raw business data
            into insights, trends, and actionable decisions - without writing queries.
          </p>
        </div>

        {/* Card */}
        <div className="mt-12 mx-auto max-w-2xl rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">

          <div className="text-center">
            <h3 className="text-xl font-semibold">Project Builder</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Designed and developed as a full-stack AI BI assistant concept for hackathons
              and real-world business use cases.
            </p>
          </div>

          {/* Links */}
          <div className="mt-6 flex items-center justify-center gap-6">

            <a
              href="https://github.com/Bhavya-009/"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {/* <Github size={18} /> */}
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bhavya-lakhani-profile/"
              target="_blank"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {/* <Linkedin size={18} /> */}
              LinkedIn
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}