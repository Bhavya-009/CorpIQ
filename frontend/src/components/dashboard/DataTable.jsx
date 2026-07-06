import { useData } from "@/context/DataContext";

export default function DataTable() {
  const { dataset } = useData();

  if (!dataset.length) return null;

  const headers = Object.keys(dataset[0]);

  return (
    <div className="mt-10 overflow-auto rounded-xl border">

      <table className="w-full">

        <thead className="bg-muted">

          <tr>

            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left"
              >
                {header}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {dataset.slice(0, 10).map((row, index) => (
            <tr
              key={index}
              className="border-t"
            >
              {headers.map((header) => (
                <td
                  key={header}
                  className="px-4 py-3"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}