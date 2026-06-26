import HeroBanner from "@/components/dashboard/HeroBanner";
import StatsCards from "@/components/dashboard/StatsCards";
import FileToolbar from "@/components/dashboard/FileToolbar";
import FileSection from "@/components/dashboard/FileSection";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <HeroBanner />

      <StatsCards />

      <FileToolbar />

      <FileSection />
    </div>
  );
};

export default Dashboard;
