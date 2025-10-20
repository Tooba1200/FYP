"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/app/register/components/ui/header";
import Select from "react-select";

export default function StepCompany({ nextStep, prevStep,form,setForm,touched,setTouched }) {

  // ✅ Validation checks
  const isCompanyValid = form.companyName.trim().length >= 2;
  const isLocationValid = form.location.trim().length >= 2;
  const isWebsiteValid = !form.website || /^https?:\/\/[^\s]+$/.test(form.website);

  const allValid =
    form.logo &&
    form.mainImage &&
    isCompanyValid &&
    isLocationValid &&
    isWebsiteValid;

  const handleFileChange = (e, key) => {
    const file = e.target.files[0];
    if (file) setForm({ ...form, [key]: file });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* === Top Logo === */}
      <Header />

      {/* === Form Card === */}
      <div className="w-full max-w-2xl  mt-5 space-y-5  ">
        <div className="flex justify-between items-start w-full gap-5  ">
          {/* === Left Side: Company + Location === */}
          <div className="flex-1 ">
            {/* Company Name */}
            <Label className="text-[#2D464C] text-[16px] font-medium">
              Company Name
            </Label>
            <Input
              placeholder="Enter full company name"
              value={form.companyName}
              onBlur={() => setTouched({ ...touched, companyName: true })}
              onChange={(e) =>
                setForm({ ...form, companyName: e.target.value })
              }
              className={`mt-2 py-5 text-[16px] rounded-sm focus:ring-2 ${touched.companyName && !isCompanyValid
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#2D464C]"
                }`}
            />
            {touched.companyName && !isCompanyValid && (
              <p className="text-red-500 text-sm mt-1">
                Company name must be at least 2 characters long.
              </p>
            )}

            {/* Location */}
            <Label className="text-[#2D464C] text-[16px] font-medium  block mt-5">
              Enter Location
            </Label>
            <Input
              placeholder="Enter location"
              value={form.location}
              onBlur={() => setTouched({ ...touched, location: true })}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className={`mt-2 py-5 text-[16px] rounded-sm focus:ring-2 ${touched.location && !isLocationValid
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#2D464C]"
                }`}
            />
            {touched.location && !isLocationValid && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid location.
              </p>
            )}
          </div>

          {/* === Right Side: Logo Upload === */}
          <div className="w-40 flex justify-center">
            <div className="relative w-full h-40 mt-2 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center cursor-pointer hover:border-[#2D464C] transition">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, "logo")}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <span className="text-sm text-gray-500">Upload Logo</span>
              {form.logo && (
                <p className="text-xs text-[#2D464C] mt-2 font-medium">
                  ✅ {form.logo.name}
                </p>
              )}
            </div>
          </div>
        </div>
        {/* === Country & City (Fixed) === */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <Label className="text-[#2D464C] text-[16px] font-medium">
              Country
            </Label>
            <Select
              value={form.country}
              isDisabled
              className="mt-2"
            />
          </div>

          <div className="w-full md:w-1/2">
            <Label className="text-[#2D464C] text-[16px] font-medium">
              City
            </Label>
            <Select
              value={form.city}
              isDisabled
              className="mt-2"
            />
          </div>
        </div>

        {/* === Website === */}
        <div>
          <Label className="text-[#2D464C] text-[16px] font-medium">
            Website Link
          </Label>
          <Input
            placeholder="Paste your website link"
            value={form.website}
            onBlur={() => setTouched({ ...touched, website: true })}
            onChange={(e) => setForm({ ...form, website: e.target.value })}
            className={`mt-2 py-5 text-[16px] rounded-sm focus:ring-2 ${touched.website && !isWebsiteValid
              ? "border-red-500 focus:ring-red-400"
              : "border-gray-300 focus:ring-[#2D464C]"
              }`}
          />
          {touched.website && !isWebsiteValid && (
            <p className="text-red-500 text-sm mt-1">
              Enter a valid website URL (https://example.com).
            </p>
          )}
        </div>

        {/* === Upload Main Image === */}
        <div className="w-full">
          <label
            htmlFor="mainImage"
            className="mt-3 flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-400 rounded-xl cursor-pointer hover:bg-gray-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-500 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span className="text-gray-600 text-[16px]">
              Click or Drag to Upload Main Image
            </span>
          </label>

          <input
            id="mainImage"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "mainImage")}
            className="hidden"
          />

          {form.mainImage && (
            <p className="text-sm text-gray-600 mt-2 text-center">
              ✅ {form.mainImage.name} selected
            </p>
          )}
        </div>

        {/* === Buttons === */}
        <div className="flex justify-between mb-5">
          <Button
            variant="outline"
            className="border-[#2D464C] text-[#2D464C]"
            onClick={prevStep}
          >
            <ArrowLeft />
          </Button>
          <Button
            disabled={!allValid}

            className={`w-full sm:w-auto px-10 py-3 rounded-xl text-lg font-medium transition-all ${allValid
              ? "bg-[#2D464C] hover:bg-[#243b40] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            onClick={nextStep}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

    </div>
  );
}
