import { Sparkles } from "lucide-react";

export default function AIInsights() {
    const insights = [
        "Revenue shows a positive growth trend across the dataset.",
        "Certain categories appear to contribute disproportionately to overall performance.",
        "A deeper investigation into low-performing segments may uncover opportunities.",
        "Business metrics indicate potential areas for optimization and expansion.",
    ];

    return (
        <div className="rounded-2xl border bg-card p-6">
            <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">
                    AI Executive Summary
                </h2>
            </div>

            <div className="mt-6 space-y-3">
                {insights.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-lg bg-muted/40 p-3 text-sm"
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <button
                    className="w-full rounded-xl bg-primary px-4 py-3 text-primary-foreground"
                >
                    Ask CorpIQ
                </button>
            </div>
        </div>
    );
}