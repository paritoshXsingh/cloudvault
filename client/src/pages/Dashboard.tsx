import HeroBanner from "@/components/dashboard/HeroBanner";
import StatsCards from "@/components/dashboard/StatsCards";
import FileBrowser from "@/components/dashboard/FileBrowser";

import { useFiles } from "@/hooks/useFiles";

const Dashboard = () => {
  const { data, isLoading, isError } = useFiles();

  const files = data?.files ?? [];

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

  return (
    <div className="space-y-8">
      <HeroBanner />

      <StatsCards files={files} />

      <FileBrowser />
    </div>
  );
};

export default Dashboard;
