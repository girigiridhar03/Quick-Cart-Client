import React from "react";

const Register = () => {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex bg-[#1C1C1E] p-16 flex-col justify-between relative overflow-hidden">
        <a
          className="text-3xl font-bold font-display tracking-tight text-white z-10 transition-transform hover:scale-105"
          href="/"
          data-discover="true"
        >
          Quick<span className="text-[#FF6B35]">Mart</span>
        </a>
        <div className="z-10 space-y-12">
          <h2 className="text-5xl font-bold font-display text-white leading-tight">
            The platform for <br />
            <span className="text-[#FF6B35]">Speed &amp; Growth.</span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
              <div className="w-10 h-10 rounded-2xl bg-[#00B894]/20 flex items-center justify-center mb-4 border border-[#00B894]/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check text-[#00B894]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">10M+ Apps Sold</h4>
              <p className="text-gray-400 text-xs">
                Reach millions of daily customers instantly.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md translate-y-8 shadow-2xl">
              <div className="w-10 h-10 rounded-2xl bg-[#6C63FF]/20 flex items-center justify-center mb-4 border border-[#6C63FF]/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles text-[#6C63FF]"
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
              </div>
              <h4 className="text-white font-bold mb-2">AI Optimization</h4>
              <p className="text-gray-400 text-xs">
                Smarter routes, better inventory, higher profits.
              </p>
            </div>
          </div>
        </div>
        <div className="text-gray-500 text-[11px] uppercase tracking-widest font-bold z-10">
          Join 50K+ storage and delivery partners nationwide.
        </div>
      </div>
      <div className="flex items-center justify-center p-3 bg-[#F7F7F5] overflow-y-auto">
        <div className="border hover:shadow-md transition-all duration-300 overflow-hidden w-full max-w-150 p-8 py-10 space-y-8 border-[#EBEBEB] shadow-2xl rounded-3xl bg-white">
          <div>
            <a
              className="text-[#FF6B35] font-bold text-xs flex items-center gap-1 mb-4 hover:-translate-x-1 transition-transform uppercase tracking-wider"
              href="/login"
              data-discover="true"
            >
              ← Back to Login
            </a>
            <h1 className="text-3xl font-bold font-display tracking-tight text-[#1C1C1E]">
              Join QuickMart
            </h1>
            <p className="text-[#8A8A8A] mt-2 text-sm">
              Create an account to start ordering or earning today.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5 focus-within:text-[#FF6B35] transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-widest pl-1">
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#EBEBEB] outline-none focus:bg-white focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5 focus-within:text-[#FF6B35] transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-widest pl-1">
                  Email Address
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#EBEBEB] outline-none focus:bg-white focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-1.5 focus-within:text-[#FF6B35] transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-widest pl-1">
                Phone Number
              </label>
              <input
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#EBEBEB] outline-none focus:bg-white focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all text-sm"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5 focus-within:text-[#FF6B35] transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-widest pl-1">
                  Password
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#EBEBEB] outline-none focus:bg-white focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all text-sm"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="space-y-1.5 focus-within:text-[#FF6B35] transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-widest pl-1">
                  Confirm Password
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#EBEBEB] outline-none focus:bg-white focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all text-sm"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>
          </div>
          <a className="block" href="/shop" data-discover="true">
            <button className="transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 active:scale-95 px-5 py-2.5 rounded-xl w-full h-14 text-base font-bold shadow-xl shadow-brand/20">
              Create Secure Account
            </button>
          </a>
          <p className="text-[11px] text-[#8A8A8A] text-center leading-relaxed font-medium">
            By joining, you agree to QuickMart's{" "}
            <a
              className="text-[#1C1C1E] font-bold underline"
              href="/register"
              data-discover="true"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              className="text-[#1C1C1E] font-bold underline"
              href="/register"
              data-discover="true"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
