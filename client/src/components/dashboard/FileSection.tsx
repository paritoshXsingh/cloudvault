import EmptyState from "./EmptyState";
import FileTable from "./FileTable";

import { useFiles } from "@/hooks/useFiles";

const FileSection = () => {
  const { data, isLoading, isError } = useFiles();

  if (isLoading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center">
        Loading files...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-3xl bg-red-50 p-10 text-center text-red-600">
        Failed to load files.
      </div>
    );
  }

  if (!data || data.files.length === 0) {
    return <EmptyState />;
  }

  return <FileTable files={data.files} />;
};

export default FileSection;
