import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign up:", { name, email, password });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-light mb-2 tracking-wide">
              Create Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Join our community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs tracking-widest uppercase mb-2 text-muted-foreground">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-12 px-4 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
                data-testid="input-name"
                required
              />
            </div>

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

            <Button
              type="submit"
              className="w-full h-12"
              data-testid="button-signup"
            >
              CREATE ACCOUNT
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/signin">
                <span className="text-foreground hover:underline" data-testid="link-signin">
                  Sign in
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
