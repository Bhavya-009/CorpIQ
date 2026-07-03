import {
  BarChart3,
  Bot,
  TrendingUp,
  Lightbulb,
  FileText,
  ShieldCheck,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: BarChart3,
    title: "Interactive Dashboards",
    description:
      "Transform spreadsheets into executive dashboards with KPIs, charts, and business metrics.",
  },
  {
    icon: Bot,
    title: "AI Business Analyst",
    description:
      "Ask business questions in plain English and receive accurate, data-backed insights instantly.",
  },
  {
    icon: TrendingUp,
    title: "Trend Detection",
    description:
      "Automatically identify growth opportunities, anomalies, and changing business patterns.",
  },
  {
    icon: Lightbulb,
    title: "Strategic Recommendations",
    description:
      "Receive AI-generated recommendations that support confident business decisions.",
  },
  {
    icon: FileText,
    title: "Executive Reports",
    description:
      "Generate concise business summaries and presentation-ready reports in seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Processing",
    description:
      "Business data remains protected with privacy-first processing throughout the workflow.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-muted/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-widest text-primary">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Everything you need to
            understand your business.
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            CorpIQ combines business intelligence,
            AI-powered analysis, and executive reporting
            into one intuitive platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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