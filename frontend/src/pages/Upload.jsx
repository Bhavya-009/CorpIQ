import { useState } from "react";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import { useData } from "@/context/DataContext";
import UploadZone from "@/components/upload/UploadZone";
import DatasetPreview from "@/components/upload/DatasetPreview";

export default function Upload() {
    const navigate = useNavigate();

    const {
        dataset,
        setDataset,
        fileName,
        setFileName,
    } = useData();

    const handleUpload = (file) => {
        setFileName(file.name);

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,

            complete: (results) => {
                setDataset(results.data);
            },
        });
    };

    return (
        <main className="min-h-screen bg-background px-6 py-10">

            <div className="mx-auto max-w-6xl">

                <h1 className="text-4xl font-bold">
                    Upload Dataset
                </h1>

                <p className="mt-3 text-muted-foreground">
                    Upload a CSV file and let CorpIQ generate business insights.
                </p>

                <UploadZone onFileUpload={handleUpload} />

                <DatasetPreview
                    fileName={fileName}
                    data={dataset}
                />

                {dataset.length > 0 && (
                    <div className="mt-8 flex justify-end">

                        <button
                            onClick={() => navigate("/dashboard")}
                            className="rounded-xl bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90"
                        >
                            Continue to Dashboard →
                        </button>

                    </div>
                )}

            </div>

        </main>
    );
}