// Brain Waste - Static data
export type BrainWasteSlide = {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  timeLabel: string;
  bgImage?: string;
};

const staticSlides: BrainWasteSlide[] = [
  {
    _id: "1",
    title: "Your Brain Makes Toxins Every Hour",
    subtitle: "ROS · Amyloid-beta · Tau",
    content: "Every hour, your brain produces waste. Deep sleep clears 60-90% of it.",
    timeLabel: "24 Hours",
    bgImage: ""
  }
];

export async function getBrainWasteSlides(): Promise<BrainWasteSlide[]> {
  return Promise.resolve(staticSlides);
}
