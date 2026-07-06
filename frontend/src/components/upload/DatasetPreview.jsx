export default function DatasetPreview({ fileName, data }) {
  if (!data.length) return null;

  const headers = Object.keys(data[0]);

  return (
    <div className="mt-10 rounded-2xl border bg-card p-6">

      <h2 className="text-xl font-semibold">
        Dataset Preview
      </h2>

      <p className="mt-2 text-muted-foreground">
        {fileName}
      </p>

      <div className="mt-6 overflow-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr>

              {headers.map((header) => (
                <th
                  key={header}
                  className="border px-4 py-2 text-left"
                >
                  {header}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {data.slice(0, 5).map((row, index) => (
              <tr key={index}>

                {headers.map((header) => (
                  <td
                    key={header}
                    className="border px-4 py-2"
                  >
                    {row[header]}
                  </td>
                ))}

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}