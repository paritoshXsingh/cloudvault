import AuthCard from "@/components/auth/AuthCard";
import AuthPreview from "@/components/auth/AuthPreview";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      <AuthPreview />

      <AuthCard />
    </div>
  );
};

export default Login;
