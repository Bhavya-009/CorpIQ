import {
  BarChart3,
  Bot,
  FileText,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: BarChart3,
    title: "Interactive Dashboards",
    description:
      "Convert spreadsheets into clean dashboards with KPIs, charts, and business metrics.",
  },
  {
    icon: Bot,
    title: "AI Business Analyst",
    description:
      "Ask questions in natural language and receive business-focused insights from your data.",
  },
  {
    icon: TrendingUp,
    title: "Trend Detection",
    description:
      "Automatically discover trends, anomalies, and performance changes across datasets.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Recommendations",
    description:
      "Receive AI-generated suggestions that support informed business decisions.",
  },
  {
    icon: FileText,
    title: "Executive Reports",
    description:
      "Generate concise reports suitable for meetings, presentations, and stakeholders.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Uploaded business data is processed securely with user privacy as a priority.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Built for modern business decision making.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            CorpIQ combines AI, business intelligence, and executive reporting
            into a single workspace that helps teams understand their data
            faster and make better decisions.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
}