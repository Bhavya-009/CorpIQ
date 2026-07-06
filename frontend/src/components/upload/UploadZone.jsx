import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

export default function UploadZone({ onFileUpload }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0]);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        mt-8
        flex
        cursor-pointer
        flex-col
        items-center
        justify-center
        rounded-2xl
        border-2
        border-dashed
        p-16
        transition-all
        duration-300
        ${
          isDragActive
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary"
        }
      `}
    >
      <input {...getInputProps()} />

      <UploadCloud className="mb-4 h-12 w-12 text-primary" />

      <h2 className="text-xl font-semibold">
        Drag & Drop your CSV
      </h2>

      <p className="mt-2 text-center text-muted-foreground">
        or click here to browse your files
      </p>

      <p className="mt-4 text-sm text-muted-foreground">
        Supported format: CSV
      </p>
    </div>
  );
}