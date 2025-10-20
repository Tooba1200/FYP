"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/app/register/components/ui/header";
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function StepAuthentication({ nextStep, prevStep,form, setForm,showPassword,setShowPassword,showConfirm,setShowConfirm,error,setError }) {
  

  // Password validation function
  const isPasswordValid = (password) => {
    const lengthValid = password.length >= 6;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumberOrSpecial = /[0-9@#$]/.test(password);
    return lengthValid && hasUpper && hasLower && hasNumberOrSpecial;
  };

  const passwordsMatch =
    form.password.trim() !== "" &&
    form.confirmPassword.trim() !== "" &&
    form.password === form.confirmPassword;

  const allValid = isPasswordValid(form.password) && passwordsMatch;

  // Password strength
  const getPasswordStrength = (password) => {
    if (password.length < 6) return "Too short";
    let score = 0;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9@#$]/.test(password)) score++;
    if (/[^A-Za-z0-9@#$]/.test(password)) score++;
    if (score <= 1) return "Weak";
    if (score === 2) return "Normal";
    if (score >= 3) return "Strong";
  };

  const handleNext = () => {
    if (!isPasswordValid(form.password)) {
      setError(
        "Password must be at least 6 chars, include uppercase, lowercase & number/@#$."
      );
      return;
    }
    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    nextStep();
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* === Top Logo === */}
      <Header />

      {/* === Form Card === */}
      <div className="w-full max-w-2xl space-y-6 mt-5  min-h-120 relative">
        <div className="w-full max-w-2xl space-y-4">
          {/* Password Field */}
          <div className="flex flex-col space-y-1 relative">
            <Label className="text-[#2D464C] text-[16px] font-medium text-center">
              Password
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full py-3 text-[16px] rounded-sm focus:ring-2 focus:ring-[#2D464C] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {/* Fixed space for strength (left) and instructions (right) */}
            <div className="h-6 flex justify-between items-center px-1 text-sm">
              <span
                className={`${getPasswordStrength(form.password) === "Weak"
                    ? "text-red-500"
                    : getPasswordStrength(form.password) === "Normal"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
              >
                {form.password ? `Strength: ${getPasswordStrength(form.password)}` : ""}
              </span>
              <span className="text-red-500">
                {!isPasswordValid(form.password) && form.password
                  ? "Must be 6+ chars, include uppercase, lowercase & number/@#$"
                  : " "}
              </span>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col space-y-1 relative">
            <Label className="text-[#2D464C] text-[16px] font-medium text-center">
              Confirm Password
            </Label>
            <div className="relative">
              <Input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                disabled={!isPasswordValid(form.password)}
                className={`w-full py-3 text-[16px] rounded-sm focus:ring-2 focus:ring-[#2D464C] pr-10 ${!isPasswordValid(form.password)
                    ? "bg-gray-100 cursor-not-allowed"
                    : ""
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirm ? <EyeOff /> : <Eye />}
              </button>
            </div>

            <div className="h-6 text-right text-red-500 text-sm">
              {form.confirmPassword && !passwordsMatch && "Passwords do not match."}
            </div>
          </div>

          {/* General Error */}
          <div className="h-6 text-center text-red-500">{error}</div>
        </div>
      

      {/* Bottom Buttons */}
      <div className="w-full flex max-w-2xl mx-auto justify-between absolute bottom-0">
        <Button
          onClick={prevStep}
          variant="outline"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#2D464C] text-[#2D464C] hover:bg-[#2D464C] hover:text-white transition-all duration-300"
        >
          <ArrowLeft />
        </Button>

        <Button
          disabled={!allValid}
          onClick={handleNext}
          className={`flex items-center gap-2 px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${allValid
              ? "bg-[#2D464C] hover:bg-[#243b40] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          <ArrowRight />
        </Button>
      </div>
      </div>
    </div>
  );
}
