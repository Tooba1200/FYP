"use client";
import { useRegFormContext } from "@/app/usestate";
import Sidebar from "@/app/register/components/ui/Sidebar";
import { steps } from "@/app/register/data";
import StepPersonal from "@/app/register/components/ui/StepPersonal";
import StepCompany from "@/app/register/components/ui/StepCompany";
import StepServices from "@/app/register/components/ui/StepServices";
import StepAbout from "@/app/register/components/ui/StepAbout";
import StepAuthentication from "./components/ui/StepAuthentication";
import StepFactoryImages from "./components/ui/StepFactoryImages";

export default function RegisterPage() {

  const { RegStep, setRegStep, RegPersonalForm, setRegPersonalForm } = useRegFormContext();
  const { RegaboutData, setRegAboutData, RegAboutBlurBox, setRegAboutBlurBox } = useRegFormContext();
  const { RegComapnyData, setRegComapnyData, RegCompanyBlurBox, setRegCompanyBlurBox } = useRegFormContext();
  const { RegServices, setRegServices } = useRegFormContext();
  const { RegAuthPassword, setRegAuthPassword, RegshowPassword, setShowPassword, RegShowConfirm, setRegShowConfirm, RegAutherror, setRegAuthError } = useRegFormContext();
  const { RegFactoryImages, setRegFactoryImages } = useRegFormContext();


  console.log("page = ", { RegStep })
  const nextStep = () => setRegStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setRegStep((prev) => Math.max(prev - 1, 0));

  const renderStep = () => {

    switch (RegStep) {
      case 0:
      return <StepPersonal nextStep={nextStep} form={RegPersonalForm} setForm={setRegPersonalForm} />;
      case 1:
      return <StepCompany nextStep={nextStep} prevStep={prevStep} form={RegComapnyData} setForm={setRegComapnyData} touched={RegCompanyBlurBox} setTouched={setRegCompanyBlurBox}   />;
      case 2:
      return <StepServices nextStep={nextStep} prevStep={prevStep} services={RegServices} setServices={setRegServices} />;
      case 3:
      return <StepAbout nextStep={nextStep} prevStep={prevStep} form={RegaboutData} setForm={setRegAboutData} touched={RegAboutBlurBox} setTouched={setRegAboutBlurBox} />;
      case 4:
        return <StepAuthentication nextStep={nextStep} prevStep={prevStep} phone={RegPersonalForm.phone}
          form={RegAuthPassword} setForm={setRegAuthPassword}
          showPassword={RegshowPassword} setShowPassword={setShowPassword}
          showConfirm={RegShowConfirm} setShowConfirm={setRegShowConfirm}
          error={RegAutherror} setError={setRegAuthError}
        />;
      case 5:
        return <StepFactoryImages nextStep={nextStep} prevStep={prevStep}  images={RegFactoryImages} setImages={setRegFactoryImages} />;
      default:
        return <p>No step matched</p>;
    }
  };

  return (

    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* ✅ Fixed Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-full w-64 z-10">
        <Sidebar step={RegStep} steps={steps} />
      </div>

      {/* ✅ Step content (moves independently) */}
      <div className="flex-1 md:ml-64 flex flex-col items-center justify-center px-6  ">
        {renderStep()}
      </div>
    </div>
  );
}
