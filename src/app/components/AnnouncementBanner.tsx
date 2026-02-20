"use client";
import { CustomButton } from "@/components/ui/custom-button";

export default function AnnouncementBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#0000FF] z-[1001] border-b border-white/10">
      <div className="flex items-center justify-center py-2.5 w-full">
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <span className="text-sm md:text-base text-white font-medium">
            Torque Labs announces $5 million fundraise
          </span>
          <CustomButton
            buttonSize="small"
            buttonColor="secondary"
            showArrow={false}
          >
            Read more
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

