import { Card, CardContent } from "@/components/ui/card";

import LoginForm from "./LoginForm";

const AuthCard = () => {
  return (
    <div className="flex flex-1 items-center justify-center bg-slate-50 p-8">
      <Card className="w-full max-w-md rounded-3xl shadow-xl">
        <CardContent className="p-10">
          <h2 className="text-4xl font-bold tracking-tight">Welcome Back</h2>

          <p className="mt-3 text-slate-500">
            Sign in to continue to CloudVault.
          </p>

          <div className="mt-8">
            <LoginForm />
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account?
            <span className="ml-1 cursor-pointer font-semibold text-indigo-600 hover:text-indigo-700">
              Create one
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthCard;
