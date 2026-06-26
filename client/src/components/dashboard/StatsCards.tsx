import { HardDrive, FolderOpen, Share2, Star } from "lucide-react";

import StatCard from "@/components/common/StatCard";

const StatsCards = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Storage Used"
        value="2.5 GB"
        subtitle="of 10 GB"
        icon={HardDrive}
      />

      <StatCard
        title="Total Files"
        value="24"
        subtitle="Files uploaded"
        icon={FolderOpen}
      />

      <StatCard
        title="Shared Files"
        value="8"
        subtitle="Currently shared"
        icon={Share2}
      />

      <StatCard
        title="Starred Files"
        value="12"
        subtitle="Marked favourite"
        icon={Star}
      />
    </section>
  );
};

export default StatsCards;
