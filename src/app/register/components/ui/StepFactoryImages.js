"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function StepFactoryImages({ prevStep }) {
  const [image, setImage] = useState(null);

  return (
    <div className="w-full max-w-md space-y-4 text-center">
      <h2 className="text-2xl font-semibold text-[#2D464C]">Factory Images</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="w-full border border-gray-300 p-2 rounded-lg"
      />
      {image && <p className="text-sm text-gray-600">Selected: {image.name}</p>}

      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          className="border-[#2D464C] text-[#2D464C]"
          onClick={prevStep}
        >
          ← Back
        </Button>
        <Button
          className="bg-[#2D464C] text-white"
          disabled={false}
          onClick={() => alert("Registration Completed ✅")}
        >
          Finish
        </Button>
      </div>
    </div>
  );
}
