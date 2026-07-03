import { ArrowRight, PlayCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-2">

        {/* Left Content */}
        <div>

          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            AI-Powered Business Intelligence
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
            Your AI Business
            <span className="block text-primary">
              Intelligence Agent
            </span>
          </h1>

          <p className="mt-6 text-xl text-muted-foreground">
            Turn business data into executive decisions.
          </p>

          <p className="mt-6 max-w-xl leading-8 text-muted-foreground">
            Upload your business data and let CorpIQ analyze
            performance, uncover business trends, generate
            executive-ready insights, and recommend strategic
            actions—all without writing a single query.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button size="lg">
              Upload Dataset
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              View Demo
            </Button>

          </div>

        </div>

        {/* Right Content */}

        <div className="rounded-3xl border bg-card p-8 shadow-lg">

          {/* AI Workspace Preview */}

          <div className="rounded-3xl border bg-card p-8 shadow-xl">

            {/* Header */}

            <div className="flex items-center justify-between border-b pb-4">

              <div>
                <h3 className="text-xl font-semibold">
                  AI Workspace
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Business Intelligence Preview
                </p>
              </div>

              <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Demo
              </div>

            </div>

            {/* Uploaded File */}

            <div className="mt-6 rounded-xl border p-4">

              <p className="text-sm text-muted-foreground">
                Uploaded Dataset
              </p>

              <p className="mt-2 font-medium">
                📄 sales_data.csv
              </p>

            </div>

            {/* Processing Steps */}

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-3">

                <span className="text-green-600">✓</span>

                <p className="text-sm">
                  Dataset successfully validated
                </p>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-green-600">✓</span>

                <p className="text-sm">
                  Business metrics identified
                </p>

              </div>

              <div className="flex items-center gap-3">

                <span className="text-green-600">✓</span>

                <p className="text-sm">
                  AI insights ready for exploration
                </p>

              </div>

            </div>

            {/* AI Prompt */}

            <div className="mt-8 rounded-xl border bg-muted/40 p-5">

              <p className="mb-3 text-sm font-medium">
                Ask CorpIQ
              </p>

              <div className="rounded-lg bg-background px-4 py-3 text-sm text-muted-foreground">
                Why did customer churn increase this quarter?
              </div>

            </div>

            {/* CTA */}

            <button
              className="
      mt-8
      w-full
      rounded-xl
      bg-primary
      py-3
      font-medium
      text-primary-foreground
      transition-colors
      hover:bg-primary/90
    "
            >
              Generate Interactive Dashboard
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}