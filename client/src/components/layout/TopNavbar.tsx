import { Bell, Search, Upload } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UploadDialog from "@/components/upload/UploadDialog";

const TopNavbar = () => {
  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

        <p className="text-sm text-slate-500">Securely manage your files.</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input placeholder="Search files..." className="w-72 pl-10" />
        </div>

        {/* Upload */}
        <UploadDialog>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
        </UploadDialog>

        {/* Notifications */}
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        {/* Avatar */}
        <Avatar>
          <AvatarFallback>PS</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default TopNavbar;
