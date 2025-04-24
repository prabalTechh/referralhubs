"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { WaveBackground, WaveBackground2 } from "@/components/svg";
import Google from "@/components/svg/Google";
import Facebook from "@/components/svg/Facebook";
import X from "@/components/svg/X";
import Linkedin from "@/components/svg/LinkedIn";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    router.push("/platform")
    console.log("Form submitted:", { email, password });
  };

  const handleClick = () => {
    router.push("/signup");
  };

  return (
    <div className="min-h-screen text-sm py-4 flex flex-col items-center max-w-screen justify-center bg-[#F5F5F5] relative ">
      {/* Wave backgrounds */}
      
      <div className="text-center space-y-2  mb-4">
        <h1 className="text-3xl font-semibold text-[#333333] ">
          Login to ReferralHub
        </h1>
        <p className="text-sm text-[#666666]">
          Please enter your details to sign in
        </p>
      </div>
      <div className="min-w-md lg:min-w-lg bg-white rounded-2xl shadow-lg py-5 px-10 relative z-10">
        <div className="space-y-2 text-sm">
          <Button className="w-full px-4 rounded-lg py-3 border-2   border-[#4F46E5]  text-[#4F46E5] ">
            Continue with Google/Microsoft
          </Button>
          <div>
            <label
              htmlFor="magicLogin"
              className="block text-sm font-medium text-[#333333] mb-2"
            >
              Magic Link login
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#333333] placeholder-[#B3B3B3]"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700/80 to-[#B5D2FF] text-white py-3 px-4 rounded-lg hover:from-[#4338CA] hover:to-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 transition-colors font-medium"
          >
            Send magic Link
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#CCCCCC]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[#666666]">or</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="space-y-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#333333] mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#333333] placeholder-[#B3B3B3]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#333333] mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#CCCCCC] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#333333] placeholder-[#B3B3B3]"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-[#4F46E5] border-[#CCCCCC] rounded focus:ring-[#4F46E5]"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-[#666666]"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-[#4F46E5] hover:text-[#4338CA]">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700/80 to-[#B5D2FF] text-white py-3 px-4 rounded-lg hover:from-[#4338CA] hover:to-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 transition-colors font-medium"
          >
            Sign in
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#CCCCCC]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[#666666]">or</span>
            </div>
          </div>

          <div className="container inline-flex  items-center justify-center gap-4 ">
            <button className="flex items-center justify-center size-12     rounded-full hover:bg-[#E5E5E5] transition-colors">
              <Google />
            </button>
            <button className="flex items-center justify-center size-12   rounded-full hover:bg-[#E5E5E5] transition-colors">
              <Facebook />
            </button>
            <button className="flex items-center justify-center size-12   rounded-full hover:bg-[#E5E5E5] transition-colors">
              <X />
            </button>
            <button className="flex items-center justify-center size-12   rounded-full hover:bg-[#E5E5E5] transition-colors">
              <Linkedin />
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-[#666666]">
              Don't have an account?{" "}
              <button
                className="text-[#4F46E5] hover:text-[#4338CA]"
                onClick={handleClick}
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
      <div className="fixed top-0 left-0 w-screen  hidden lg:block">
        <WaveBackground2 className="absolute top-[60px] w-full   " />
        <WaveBackground className="absolute top-[280px] w-full " />
      </div>
    </div>
  );
}
