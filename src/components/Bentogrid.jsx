import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    
    <div className="h-full w-full mt-5 ">

    
      <h1 className="text-5xl text-center text-white mb-10">Features</h1>
      <BentoGrid className="w-[80%] mx-auto">
        {items.map((item) => (
          <BentoGridItem
            key={item.title}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={item.className || ""}
          />
        ))}
      </BentoGrid>
      </div>
    
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Progress tracking",
    description:
      "Modern sports app feature showing progress tracking and benchmarking",
    header: (
      <img
        src="/img/tracking.png"
        alt="Innovation"
        loading="lazy"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    className: "",
  },
  {
    title: "Video recording & AI analysis",
    description:
      "This feature lets users record videos and receive real-time AI-powered analysis for performance improvement.",
    header: (
      <img
        src="/img/AIrecording.png"
        alt="Innovation"
        loading="lazy"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    className: "",
  },
  {
    title: "Gamification & achievements",
    description: "This feature incorporates gamification with detailed achievement badges, level progress, leaderboards, and celebratory trophies to motivate and engage users through rewarding milestones and competitive elements",
   header: (
      <img
        src="/img/Achivements.png"
        alt="Innovation"
        loading="lazy"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    className: "",
  },
  {
    title: "Admin dashboards for officials",
    description:
      "The Admin Dashboard for officials provides a sleek interface for managing users, monitoring sports analytics, and accessing detailed performance reports, streamlining event and team oversight.",
    header: (
      <img
        src="/img/DashBoard.png"
        alt="Innovation"
        loading="lazy"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Community & social features",
    description: "This feature fosters user interaction through group chats, social connections, sharing achievements, and community engagement within a vibrant and modern app environment.",
    header: (
      <img
        src="/img/Community.png"
        alt="Innovation"
        loading="lazy"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    className: "",
  },
  // {
  //   title: "The Joy of Creation",
  //   description: "Experience the thrill of bringing ideas to life.",
  //   header: <Skeleton />,
  //   // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  //   className: ""
  // },
  // {
  //   title: "The Spirit of Adventure",
  //   description: "Embark on exciting journeys and thrilling discoveries.",
  //   header: <Skeleton />,
  //   // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  //   className: "md:col-span-2"
  // },
];
