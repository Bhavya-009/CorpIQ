import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DatasetSummary from "@/components/dashboard/DatasetSummary";
import DataTable from "@/components/dashboard/DataTable";
import AIInsights from "@/components/dashboard/AIInsights";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <DashboardHeader />

        <DatasetSummary />

        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">
            <DataTable />
          </div>

          <div>
            <AIInsights />
          </div>

        </div>

      </div>
    </main>
  );
}