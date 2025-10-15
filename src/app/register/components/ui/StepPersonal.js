"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/app/register/components/ui/header";
import { ArrowRight } from "lucide-react";

export default function StepPersonal({ nextStep, prevStep,form,setForm }) {
  
  const [touched, setTouched] = useState({});

  // ✅ Validation Functions
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\+92\d{10}$/.test(phone); // +92 + 10 digits
  const validateCNIC = (cnic) => /^\d{13}$/.test(cnic); // exactly 13 digits

  // ✅ Individual Validity Checks
  const isEmailValid = validateEmail(form.email);
  const isPhoneValid = validatePhone(form.phone);
  const isCNICValid = validateCNIC(form.cnic);
  const isFirstNameValid = form.firstName.trim().length >= 2;
  const isLastNameValid = form.lastName.trim().length >= 2;

  // ✅ All fields required
  const allValid =
    isEmailValid &&
    isPhoneValid &&
    isCNICValid &&
    isFirstNameValid &&
    isLastNameValid;

  // ✅ Handle phone input (prevent removing +92)
  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (!value.startsWith("+92")) {
      value = "+92" + value.replace(/^\+?92?/, ""); // force +92 prefix
    }
    setForm({ ...form, phone: value });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* === Top Logo === */}
      <Header />

      {/* === Form Card === */}
      <div className="w-full max-w-2xl space-y-6 mt-5">
        <div className="space-y-6">
          {/* === Name Fields === */}
          <div>
            <Label className="text-[#2D464C] text-[18px] font-medium">
              Name
            </Label>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {/* First Name */}
              <Input
                placeholder="First Name"
                value={form.firstName}
                onBlur={() => setTouched({ ...touched, firstName: true })}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className={`py-5 text-[16px] rounded-sm focus:ring-2 ${
                  touched.firstName && form.firstName.trim().length < 2
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-[#2D464C]"
                }`}
              />

              {/* Last Name (now required) */}
              <Input
                placeholder="Last Name"
                value={form.lastName}
                onBlur={() => setTouched({ ...touched, lastName: true })}
                onChange={(e) =>
                  setForm({ ...form, lastName: e.target.value })
                }
                className={`py-5 text-[16px] rounded-sm focus:ring-2 ${
                  touched.lastName && form.lastName.trim().length < 2
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300 focus:ring-[#2D464C]"
                }`}
              />
            </div>
            {touched.lastName && !isLastNameValid && (
              <p className="text-red-500 text-sm mt-1">
                Last name is required.
              </p>
            )}
          </div>

          {/* === Email === */}
          <div>
            <Label className="text-[#2D464C] text-[18px] font-medium">
              Email Address
            </Label>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={form.email}
              onBlur={() => setTouched({ ...touched, email: true })}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`mt-2 py-5 text-[16px] rounded-sm focus:ring-2 ${
                touched.email && !isEmailValid
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#2D464C]"
              }`}
            />
            {touched.email && !isEmailValid && (
              <p className="text-red-500 text-sm mt-1">
                Enter a valid email address.
              </p>
            )}
          </div>

          {/* === Phone Number === */}
          <div>
            <Label className="text-[#2D464C] text-[18px] font-medium">
              Phone No
            </Label>
            <Input
              placeholder="+92XXXXXXXXXX"
              value={form.phone}
              onBlur={() => setTouched({ ...touched, phone: true })}
              onChange={handlePhoneChange}
              className={`mt-2 py-5 text-[16px] rounded-sm focus:ring-2 ${
                touched.phone && !isPhoneValid
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#2D464C]"
              }`}
            />
            {touched.phone && !isPhoneValid && (
              <p className="text-red-500 text-sm mt-1">
                Phone number must be +92 followed by 10 digits.
              </p>
            )}
          </div>

          {/* === CNIC === */}
          <div>
            <Label className="text-[#2D464C] text-[18px] font-medium">
              CNIC
            </Label>
            <Input
              placeholder="Enter 13 digits CNIC"
              value={form.cnic}
              onBlur={() => setTouched({ ...touched, cnic: true })}
              onChange={(e) =>
                setForm({
                  ...form,
                  cnic: e.target.value.replace(/\D/g, ""), // only numbers
                })
              }
              className={`mt-2 py-5 text-[16px] rounded-sm focus:ring-2 ${
                touched.cnic && !isCNICValid
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-[#2D464C]"
              }`}
              maxLength={13}
            />
            {touched.cnic && !isCNICValid && (
              <p className="text-red-500 text-sm mt-1">
                CNIC must be exactly 13 digits.
              </p>
            )}
          </div>
        </div>

        {/* === Next Button === */}
        <div className="w-full flex justify-end pt-10">
          <Button
            disabled={!allValid}
            className={`w-full sm:w-auto px-10 py-3 rounded-xl text-lg font-medium transition-all ${
              allValid
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
