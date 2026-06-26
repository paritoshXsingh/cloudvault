
const HeroBanner = () => {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 p-8 text-white shadow-lg">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-2 text-indigo-100">Welcome back 👋</p>

          <h1 className="text-4xl font-bold leading-tight">
            Securely manage your files from anywhere.
          </h1>

          <p className="mt-4 max-w-xl text-indigo-100">
            Upload, organize, download and securely share documents, images and
            other important files using CloudVault.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
