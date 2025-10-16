"use client";

import { Icon } from "@iconify/react";
import { steps } from "@/app/register/data";

export default function Sidebar({ step }) {
  return (
    <aside className="bg-[#2D464C] text-white min-h-screen w-65 flex flex-col p-6">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-10 mt-2">
        Account Registration
      </h2>

      {/* Steps List */}
      <div className="relative flex flex-col space-y-10">
        {steps.map((item, index) => {
          const isActive = index === step;
          const isCompleted = index < step;
          const isLast = index === steps.length - 1;

          return (
            <div key={index} className="relative flex items-start space-x-3">
              <div className="flex items-center space-x-3 relative z-10">
               
                <div>
                  <Icon
                    icon={item.icon}
                    width={25}
                    height={25}
                    className={` ${
                      isActive
                        ? "text-white"
                        : isCompleted
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  />
                </div>

                <span
                  className={`text-[14]  ${
                    isActive
                      ? "text-white"
                      : isCompleted
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {item.label}
                </span>
              </div>

             
              {!isLast && (
                <div
                  className={`absolute left-[11px] top-[28px] w-[2px] h-8  ${
                    isCompleted ? "bg-white" : "bg-gray-500/40"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
