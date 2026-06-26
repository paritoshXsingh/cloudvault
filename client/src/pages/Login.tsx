import { Card, CardContent } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>

          <p className="mt-2 text-slate-500">
            Sign in to your CloudVault account.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
