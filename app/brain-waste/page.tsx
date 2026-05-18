import { getBrainWasteSlides } from "@/lib/brain-waste-data";
import BrainWasteSlider from "@/components/BrainWasteSlider";

export const dynamic = "force-static";

export default async function BrainWastePage() {
  const slides = await getBrainWasteSlides();
  return <div className="w-full px-4 sm:px-6 lg:px-8"><BrainWasteSlider slides={slides} /></div>;
}

