import useAuth from "@/hooks/auth/useAuth";
import { Info } from "lucide-react";
import React, { useEffect, useState } from "react";

const Login = () => {
  const { loading, error, login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    if (!error || typeof error === "string") return;

    setFieldErrors(error);
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(fieldErrors);
    setFieldErrors((prev) => {
      if (prev?.[name] === "") return prev;
      const { [name]: _, ...rest } = prev;
      return rest;
    });
  };

  const handleAutoFill = (e) => {
    if (e.animationName === "onAutoFillStart") {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setFieldErrors((prev) => {
        if (prev?.[name] === "") return prev;
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = () => {
    let errors = {};
    if (!formData.email.trim()) {
      errors.email = ["Email is required"];
    }

    if (!formData.password) {
      errors.password = ["Password is required"];
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    login(formData);
    setFieldErrors({});
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex bg-[#1C1C1E] p-16 flex-col justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 blur-[100px] rounded-full translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6C63FF]/10 blur-[100px] rounded-full -translate-x-20 translate-y-20"></div>
        <a
          className="text-3xl font-bold font-display tracking-tight text-white z-10 transition-transform hover:scale-105"
          href="/"
          data-discover="true"
        >
          Quick<span className="text-[#FF6B35]">Mart</span>
        </a>
        <div className="space-y-8 z-10">
          <h2 className="text-5xl font-bold font-display text-white leading-tight">
            Delivery in <br />
            10 minutes, <br />
            <span className="text-[#6C63FF]">powered by AI.</span>
          </h2>
          <div className="space-y-4">
            <div>
              <div className="border hover:shadow-md transition-all duration-300 overflow-hidden bg-white/5 border-white/10 p-5 backdrop-blur-md rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/20 flex items-center justify-center border border-[#FF6B35]/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#FF6B35"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-[#FF6B35]"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      Best quick commerce app in India!
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border hover:shadow-md transition-all duration-300 overflow-hidden bg-white/5 border-white/10 p-5 backdrop-blur-md rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/20 flex items-center justify-center border border-[#FF6B35]/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#FF6B35"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-[#FF6B35]"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      The AI suggestions are surprisingly good.
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="border hover:shadow-md transition-all duration-300 overflow-hidden bg-white/5 border-white/10 p-5 backdrop-blur-md rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/20 flex items-center justify-center border border-[#FF6B35]/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#FF6B35"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-[#FF6B35]"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      Delivery really happened in 8 minutes!
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-500 text-[11px] z-10 uppercase tracking-widest font-bold">
          © 2026 QuickMart Technologies. Join 2M+ happy customers.
        </div>
      </div>
      <div className="flex items-center justify-center p-3 bg-[#F7F7F5]">
        <div className="bg-white border hover:shadow-md transition-all duration-300 overflow-hidden w-full max-w-130 p-8 space-y-8 border-[#EBEBEB] shadow-2xl rounded-3xl">
          <div>
            <h1 className="text-3xl font-bold font-display tracking-tight text-[#1C1C1E]">
              Welcome Back
            </h1>
            <p className="text-[#8A8A8A] mt-2 text-sm">
              Login to manage your orders and personalized AI picks.
            </p>
          </div>
          {error && typeof error === "string" ? (
            <div className="bg-red-50 border-2 border-red-100 p-5 rounded-2xl flex items-start gap-2 text-sm">
              <div>
                <Info className="text-red-600 h-5" />
              </div>
              <p className="text-red-600 font-bold">{error}</p>
            </div>
          ) : (
            fieldErrors &&
            Object.values(fieldErrors).length > 0 &&
            Object.keys(fieldErrors)?.map((item, i) => (
              <div key={`${item}-${i}`} className="my-3">
                <div className="bg-red-50 border-2 border-red-100 p-5 rounded-2xl flex items-start gap-2 text-sm">
                  <div>
                    <Info className="text-red-600 h-5 mt-0.5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-red-400 font-semibold text-[0.75rem] capitalize">
                      {item}
                    </p>
                    {fieldErrors[item] &&
                      fieldErrors[item]?.map((item) => (
                        <p key={item} className="text-red-600 font-bold">
                          {item}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            ))
          )}
          <div className="space-y-4">
            <div className="space-y-1.5 focus-within:text-[#FF6B35] transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-widest pl-1">
                Email or Phone
              </label>
              <input
                placeholder="Enter your email or Phone"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#EBEBEB] outline-none focus:bg-white focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all text-sm"
                type="text"
                name="email"
                onChange={handleChange}
                onAnimationStart={handleAutoFill}
                value={formData.email}
              />
            </div>
            <div className="space-y-1.5 focus-within:text-[#FF6B35] transition-colors">
              <div className="flex items-center justify-between pl-1">
                <label className="text-[10px] font-bold uppercase tracking-widest">
                  Password
                </label>
                <a
                  className="text-[#FF6B35] text-[10px] font-bold tracking-widest uppercase"
                  href="/login"
                  data-discover="true"
                >
                  Forgot?
                </a>
              </div>
              <input
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-[#EBEBEB] outline-none focus:bg-white focus:ring-4 focus:ring-[#FF6B35]/10 focus:border-[#FF6B35] transition-all text-sm"
                type="password"
                name="password"
                onChange={handleChange}
                onAnimationStart={handleAutoFill}
                value={formData.password}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="w-4 h-4 rounded border-[#EBEBEB] accent-[#FF6B35]"
              type="checkbox"
            />
            <span className="text-xs text-[#8A8A8A] font-medium">
              Keep me logged in
            </span>
          </div>
          <a data-discover="true">
            <button
              onClick={handleSubmit}
              className="transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90 active:scale-95 px-5 py-2.5 rounded-xl w-full h-14 text-sm font-bold shadow-xl shadow-brand/20"
            >
              Login to Account
            </button>
          </a>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#EBEBEB]"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase">
              <span className="bg-white px-4 text-[#8A8A8A] font-bold tracking-widest">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider border text-[#FF6B35] hover:bg-[#FFF0E8] active:scale-95 px-5 py-2.5 h-12 flex items-center justify-center gap-2 bg-white rounded-xl border-[#EBEBEB] hover:border-[#FF6B35]/40 text-xs font-bold">
              <svg size="18" width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              Google
            </button>
            <button className="transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider border text-[#FF6B35] hover:bg-[#FFF0E8] active:scale-95 px-5 py-2.5 h-12 flex items-center justify-center gap-2 bg-white rounded-xl border-[#EBEBEB] hover:border-[#FF6B35]/40 text-xs font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-smartphone"
                aria-hidden="true"
              >
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
              OTP
            </button>
          </div>
          <p className="text-center text-[13px] text-[#8A8A8A]">
            Don't have an account?{" "}
            <a
              className="text-primary font-bold hover:underline"
              href="/register"
              data-discover="true"
            >
              Register Now
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
