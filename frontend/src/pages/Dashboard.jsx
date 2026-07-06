import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DatasetSummary from "@/components/dashboard/DatasetSummary";
import DataTable from "@/components/dashboard/DataTable";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">

      <div className="mx-auto max-w-7xl">

        <DashboardHeader />

        <DatasetSummary />

        <DataTable />

      </div>

    </main>
  );
}