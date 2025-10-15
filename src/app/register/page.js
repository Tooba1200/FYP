"use client";
import { useState } from "react";
import Sidebar from "@/app/register/components/ui/Sidebar";
import { steps } from "@/app/register/data";

import StepPersonal from "@/app/register/components/ui/StepPersonal";
import StepCompany from "@/app/register/components/ui/StepCompany";
import StepServices from "@/app/register/components/ui/StepServices";
import StepAbout from "@/app/register/components/ui/StepAbout";
import StepAuthentication from "./components/ui/StepAuthentication";
import StepFactoryImages from "./components/ui/StepFactoryImages";

export default function RegisterPage() {
  const [step, setStep] = useState(0);
  const [personalForm, setPersonalForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "+92", 
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {
    switch (step) {
      case 0:
        return <StepPersonal nextStep={nextStep} form={personalForm} setForm={setPersonalForm} />;
      case 1:
        return <StepCompany nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <StepServices nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <StepAbout nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <StepAuthentication nextStep={nextStep} prevStep={prevStep} phone={personalForm.phone} />;
      case 5:
        return <StepFactoryImages nextStep={nextStep} prevStep={prevStep}/>;
      default:
        return <p>No step matched</p>;
    }
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* ✅ Fixed Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-64 z-10">
        <Sidebar step={step} steps={steps} />
      </div>

      {/* ✅ Step content (moves independently) */}
      <div className="flex-1 md:ml-64 flex flex-col items-center justify-center px-6  ">
        {renderStep()}
      </div>
    </div>
  );
}
