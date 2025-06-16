import { Button } from "@/components/ui/button/Button";
import { LogoApp } from "@/components/ui/LogoApp";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-8">
      <div className="text-center text-white space-y-8">
        <LogoApp />
        <h1 className="font-sans text-5xl font-bold mb-4">
          Your Financial Journey Starts Here
        </h1>
        <p className="font-sans text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Experience the power of smart financial management with RingkU. Track
          expenses, manage cards, and achieve your financial goals.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="started_signUp">
            <Link to="/sign-up">Get Started</Link>
          </Button>
          <Button variant="started_signIn">
            <Link to="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
