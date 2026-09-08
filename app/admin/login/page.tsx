import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Admin Login</h1>
      <p className="mt-4 max-w-xl text-muted">Sign in to manage the site.</p>
      <LoginForm />
    </div>
  );
}
