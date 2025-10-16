"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Header from "@/app/register/components/ui/header";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";

export default function StepServices({ nextStep, prevStep }) {
  const [services, setServices] = useState([{ name: "", price: "", image: null }]);

  const addService = () =>
    setServices([...services, { name: "", price: "", image: null }]);

  const removeService = (index) => {
    const updated = services.filter((_, i) => i !== index);
    setServices(updated);
  };

  const updateService = (index, key, value) => {
    const newServices = [...services];
    newServices[index][key] = value;
    setServices(newServices);
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) updateService(index, "image", file);
  };

  const allValid = services.every((s) => s.name.trim() && s.price.trim() && s.image);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* === Top Logo === */}
      <Header />

      {/* === Form Card === */}
      <div className="w-full max-w-2xl mt-5  min-h-120 relative space-y-6">

        {/* === Add Button === */}
        <div className="w-full flex justify-end">
          <Button
            onClick={addService}
            className="bg-[#2D464C] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold"
          >
            <Plus size={28} />
          </Button>
        </div>
        <div className="  h-85 overflow-y-auto overflow-x-hidden ">
          {/* === Service Rows === */}
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-3 rounded-xl relative mb-20"
            >
              {/* 🗑 Delete Icon (Top Right Corner) */}
              {services.length > 1 && (
                <button
                  onClick={() => removeService(index)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
                  title="Delete this service"
                >
                  <X size={20} />
                </button>
              )}

              {/* 📸 Image Upload */}
              <div className="w-full md:w-35 flex flex-col items-center">
                <label
                  htmlFor={`serviceImage-${index}`}
                  className="w-35 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-[#2D464C] text-center"
                >
                  {service.image ? service.image.name : "Upload Image"}
                </label>
                <input
                  id={`serviceImage-${index}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, index)}
                  className="hidden"
                />
              </div>

              {/* ✏️ Service Details */}
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <Label className="text-[#2D464C] text-[16px] font-medium">
                    Service Name
                  </Label>
                  <input
                    type="text"
                    placeholder="Enter service name"
                    value={service.name}
                    onChange={(e) => updateService(index, "name", e.target.value)}
                    className="mt-1 w-full border-b-2 border-gray-300 focus:border-[#2D464C] outline-none text-[16px]"
                  />
                </div>
                <div>
                  <Label className="text-[#2D464C] text-[16px] font-medium">
                    Price
                  </Label>
                  <input
                    type="text"
                    placeholder="Enter unit price"
                    value={service.price}
                    onChange={(e) => updateService(index, "price", e.target.value)}
                    className="mt-1 w-full border-b-2 border-gray-300 focus:border-[#2D464C] outline-none text-[16px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* === Navigation Buttons === */}
        <div className="w-full flex max-w-2xl mx-auto mt-8 justify-between absolute bottom-0">
          <Button
            variant="outline"
            onClick={prevStep}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#2D464C] text-[#2D464C] hover:bg-[#2D464C] hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <Button
            disabled={!allValid}
            onClick={nextStep}
            className={`flex items-center gap-2 px-10 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${allValid
              ? "bg-[#2D464C] hover:bg-[#243b40] text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
