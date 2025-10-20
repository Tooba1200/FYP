"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/app/register/components/ui/header";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";


export default function StepFactoryImages({ nextStep, prevStep, images, setImages }) {
  const router = useRouter();

  const addImageSlot = () =>
    setImages([...images, { file: null }]);

  // Remove a specific image slot
  const removeImage = (index) =>
    setImages(images.filter((_, i) => i !== index));

  // Handle file selection
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    const updated = [...images];
    updated[index].file = file;
    setImages(updated);
  };

  // Proceed to next step or page
  const handleNext = () => {
    const uploadedImages = images.filter((img) => img.file);
    console.log("Uploaded Images:", uploadedImages);
    // Next route
    router.push("/sellerlogin");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* === Top Logo === */}
      <Header />

      {/* === Form Card === */}
      <div className="w-full max-w-2xl space-y-6 mt-5 min-h-120 relative">
        {/* Top-right: Circular + button */}
        <div className="flex justify-end">
          <Button
            onClick={addImageSlot}
            className="bg-[#2D464C] text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl"
          >
            <Plus size={28} />
          </Button>
        </div>

        {/* Grid of 2 columns */}
        <div className="grid grid-cols-2 gap-4 h-85 overflow-y-auto overflow-x-hidden pr-2 ">
          {images.map((img, index) => (
            <div key={index} className="relative">
              {/* Delete X button */}
              {images.length > 2 && (
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <X size={14} />
                </button>
              )}

              <label
                htmlFor={`factoryImage-${index}`}
                className="w-80 h-40 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-[#2D464C] text-center"
              >
                {img.file ? img.file.name : "Upload Image"}
              </label>
              <input
                id={`factoryImage-${index}`}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, index)}
                className="hidden"
              />
            </div>
          ))}
        </div>


        {/* === Bottom Navigation Buttons === */}
        <div className="flex justify-between w-full max-w-2xl absolute bottom-0">
          <Button
            variant="outline"
            onClick={prevStep}
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#2D464C] text-[#2D464C] hover:bg-[#2D464C] hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <Button
            onClick={handleNext} // ✅ Always clickable
            className="flex items-center gap-2 px-10 py-3 rounded-xl text-lg font-medium bg-[#2D464C] hover:bg-[#243b40] text-white transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
