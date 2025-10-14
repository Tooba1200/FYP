"use client";
import { useState } from "react";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "./header";
export default function StepAbout({ nextStep, prevStep }) {
  const [form, setForm] = useState({ about: "" });
  const [touched, setTouched] = useState({});
  const isValid = form.about.trim().length >= 10; // min 10 chars
  const allValid = isValid;

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* === Top Logo === */}
      <Header />

      {/* === About Box === */}
      <div className="flex-1 w-full max-w-2xl mx-auto mt-5">
        <Label className="text-[#2D464C] text-[18px] font-medium">
          About
        </Label>
        <textarea
          placeholder="Enter Your About"
          value={form.about}
          onBlur={() => setTouched({ ...touched, about: true })}
          onChange={(e) => setForm({ ...form, about: e.target.value })}
          className={`mt-2 w-full min-h-[20vh] border rounded-lg p-3 text-[16px] resize-none focus:ring-2 focus:ring-[#2D464C] ${touched.about && form.about.trim().length < 10
            ? "border-red-500 focus:ring-red-400"
            : "border-gray-300"
            }`}
        />
        {touched.about && form.about.trim().length < 10 && (
          <p className="text-red-500 text-sm mt-1">
            Please enter at least 10 characters
          </p>
        )}
      </div>

      {/* === Buttons (Fixed at Bottom, Same Design) === */}
      <div className="w-full max-w-2xl mx-auto flex justify-between px-6 py-4  sticky bottom-0 bg-white">
        <Button
          variant="outline"
          className="border-[#2D464C] text-[#2D464C]"
          onClick={prevStep}
        >
          <ArrowLeft />
        </Button>
        <Button
          disabled={!allValid}
          className={`px-10 py-3 rounded-xl text-lg font-medium transition-all ${allValid
              ? "bg-[#2D464C] hover:bg-[#243b40] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          onClick={nextStep}
        >
          <ArrowRight />
        </Button>
      </div>

    </div>
  );
}
