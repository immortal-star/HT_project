import { cn } from "../lib/utils";
import React from "react";

export const BentoGrid = ({ className, children }) => (
  <div
    className={cn(
      "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
      className
    )}
  >
    {children}
  </div>
);

const BentoGridItemComponent = ({
  className,
  title,
  description,
  header,
  icon
}) => (
  <div
    className={cn(
      "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
      className
    )}
  >
    {header}
    <div className="transition duration-700 group-hover/bento:translate-x-2">
      {icon}
      <div
        className=" font-sans font-bold text-neutral-600 dark:text-neutral-200">
        {title}
      </div>
      <div
        className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
        {description}
      </div>
    </div>
  </div>
);

export const BentoGridItem = React.memo(BentoGridItemComponent);

// Example usage with image from public/img/tracking.png
{/* <BentoGridItem
  header={<img src="/img/tracking.png" alt="Tracking" className="w-full h-full object-cover rounded-xl" />}
  title="Tracking"
  description="Efficient package tracking for your needs."
/> */}
