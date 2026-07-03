import { useState } from "react";
import { Briefcase, TrendingUp, LineChart } from "lucide-react";

const cases = [
    {
        icon: TrendingUp,
        title: "Sales Intelligence",
        question: "Which region performed best this quarter?",
        response:
            "North region shows highest growth due to enterprise client expansion.",
    },
    {
        icon: Briefcase,
        title: "Finance Analysis",
        question: "Why did expenses increase last month?",
        response:
            "Operational costs increased due to marketing spend and logistics expansion.",
    },
    {
        icon: LineChart,
        title: "Market Research",
        question: "What customer segment is growing fastest?",
        response:
            "Millennial enterprise users show the highest adoption rate.",
    },
];

export default function UseCases() {
    const [active, setActive] = useState(null);

    return (
        <section id="use-cases" className="py-24 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Use Cases
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Built for real business decisions
                    </h2>

                    <p className="mt-6 text-lg text-muted-foreground">
                        See how CorpIQ answers real-world business questions across different domains.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-16 grid gap-6 md:grid-cols-3">

                    {cases.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = active === index;

                        return (
                            <div
                                key={item.title}
                                onClick={() => setActive(index)}
                                className={`
    relative
    cursor-pointer
    rounded-2xl
    border
    p-6
    bg-card
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
    overflow-hidden
    ${active === index
                                        ? "border-primary shadow-lg scale-[1.02]"
                                        : "opacity-90 hover:opacity-100"}
  `}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3">
                                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                                        <Icon size={20} />
                                    </div>

                                    <h3 className="font-semibold">{item.title}</h3>
                                </div>

                                {/* Question */}
                                <p className="mt-4 text-sm text-muted-foreground">
                                    <span className="font-medium text-foreground">Q:</span>{" "}
                                    {item.question}
                                </p>

                                {/* AI Response (FIXED - no layout shift) */}
                                {isActive && (
                                    <div className="mt-4 animate-in fade-in duration-300">
                                        <div className="rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground">
                                            <div className="mb-2 font-medium text-primary">
                                                AI Insight
                                            </div>

                                            <p>{item.response}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Helper text */}
                <div className="mt-10 text-center text-sm text-muted-foreground">
                    Click a use case to preview AI response
                </div>

            </div>
        </section>
    );
}