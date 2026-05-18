// Brain Waste - Timeline Slides
export type BrainWasteSlide = {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  timeLabel: string;
  bgImage?: string;
  features?: { title: string; color: string }[];
  highlight?: string;
};

const staticSlides: BrainWasteSlide[] = [
  {
    _id: "1",
    title: "Morning Reset",
    subtitle: "Clean & Refreshed",
    content: "After deep sleep, the brain enters its most refreshed state. Stress markers remain low, neural activity is balanced, and mental clarity feels effortless.",
    timeLabel: "6:00 AM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779086360/mind-recovery/ChatGPT_Image_May_18_2026_12_23_53_PM_o3jjjy.png",
    features: [
      { title: "Low Stress", color: "sky" },
      { title: "Rested Mind", color: "cyan" },
      { title: "Hydrated", color: "blue" },
      { title: "Deep Sleep Complete", color: "indigo" }
    ],
    highlight: "Brain cleared and ready for the day."
  },
  {
    _id: "2",
    title: "Getting Started",
    subtitle: "Early Activity",
    content: "Brain becomes active with early stimulation.",
    timeLabel: "8:00 AM",
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1779086999/mind-recovery/8d070535-3d4e-4b38-81b1-2d78d6a3597b.png",
    features: [
      { title: "Mild Stress", color: "orange" },
      { title: "Starting Work", color: "amber" },
      { title: "Morning Coffee", color: "yellow" },
      { title: "Screen Time Begins", color: "rose" }
    ],
    highlight: "Brain becomes active with early stimulation."
  },
  {
    _id: "3",
    title: "Afternoon: Toxins Building",
    subtitle: "Stress + Work + Environment",
    content: "ROS levels rising. Amyloid-beta begins to accumulate.",
    timeLabel: "2:00 PM",
    bgImage: "",
    features: [],
    highlight: ""
  },
  {
    _id: "4",
    title: "Evening: Peak Damage",
    subtitle: "End of day stress",
    content: "Maximum toxin levels. Plaques and tangles forming.",
    timeLabel: "9:00 PM",
    bgImage: "",
    features: [],
    highlight: ""
  },
  {
    _id: "5",
    title: "Night: Sleep Needed",
    subtitle: "Glymphatic system activates",
    content: "Deep sleep clears 60-90% of amyloid-beta.",
    timeLabel: "11:00 PM",
    bgImage: "",
    features: [],
    highlight: ""
  }
];

export async function getBrainWasteSlides(): Promise<BrainWasteSlide[]> {
  return Promise.resolve(staticSlides);
}
