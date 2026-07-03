import {
  Upload,
  BrainCircuit,
  LayoutDashboard,
  MessageSquareText,
  FileText,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Dataset",
    description:
      "Import CSV or Excel files containing your business data.",
  },
  {
    icon: BrainCircuit,
    title: "AI Understands Data",
    description:
      "CorpIQ identifies business metrics, cleans data, and prepares it for analysis.",
  },
  {
    icon: LayoutDashboard,
    title: "Interactive Dashboard",
    description:
      "Automatically generate dashboards with meaningful visualizations.",
  },
  {
    icon: MessageSquareText,
    title: "Ask Business Questions",
    description:
      "Interact with your data using natural language instead of SQL or formulas.",
  },
  {
    icon: FileText,
    title: "Executive Reports",
    description:
      "Export concise summaries and actionable insights for decision-makers.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="bg-muted/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Workflow
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            From raw data to business decisions
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            CorpIQ transforms spreadsheets into meaningful business insights
            through a simple five-step AI-powered workflow.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative text-center"
              >
                {/* Connector Line */}

                {index < steps.length - 1 && (
                  <div className="absolute left-[60%] top-8 hidden h-0.5 w-full bg-border lg:block" />
                )}

                {/* Step Number */}

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">

                  {index + 1}

                </div>

                {/* Icon */}

                <div className="mx-auto mt-5 inline-flex rounded-xl bg-primary/10 p-4 text-primary">

                  <Icon size={26} />

                </div>

                {/* Content */}

                <h3 className="mt-5 text-lg font-semibold">

                  {step.title}

                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">

                  {step.description}

                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}