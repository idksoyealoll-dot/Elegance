import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in:", { email, password });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-light mb-2 tracking-wide">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                data-testid="input-email"
                required
              />
            </div>

            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-muted-foreground">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                data-testid="input-password"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <Link href="/forgot-password">
                <span className="text-muted-foreground hover:text-foreground underline transition-colors" data-testid="link-forgot-password">
                  Forgot password?
                </span>
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full h-12"
              data-testid="button-signin"
            >
              SIGN IN
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup">
                <span className="text-foreground hover:underline" data-testid="link-signup">
                  Sign up
                </span>
              </Link>
            </div>
          </form>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
