import { useData } from "@/context/DataContext";

export default function DatasetSummary() {
  const { dataset, fileName } = useData();

  if (!dataset.length) return null;

  const columns = Object.keys(dataset[0]);

  return (
    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-xl border p-6">
        <h3 className="text-sm text-muted-foreground">
          Dataset
        </h3>

        <p className="mt-2 font-semibold">
          {fileName}
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="text-sm text-muted-foreground">
          Rows
        </h3>

        <p className="mt-2 text-3xl font-bold">
          {dataset.length}
        </p>
      </div>

      <div className="rounded-xl border p-6">
        <h3 className="text-sm text-muted-foreground">
          Columns
        </h3>

        <p className="mt-2 text-3xl font-bold">
          {columns.length}
        </p>
      </div>

    </div>
  );
}