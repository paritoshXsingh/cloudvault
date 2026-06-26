const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-900">
          👋 Welcome back, Paritosh
        </h1>

        <p className="mt-3 max-w-2xl text-slate-500">
          Manage, organize and securely share your files from one place.
        </p>
      </section>

      {/* Placeholder */}
      <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-20 text-center">
        <p className="text-lg font-medium text-slate-600">
          Dashboard content coming next...
        </p>
      </section>
    </div>
  );
};

export default Dashboard;
