import { getBrainWasteSlides } from "@/lib/brain-waste-data";
import BrainWasteSlider from "@/components/BrainWasteSlider";

export const dynamic = "force-static";

export default async function BrainWastePage() {
  const slides = await getBrainWasteSlides();
  return <BrainWasteSlider slides={slides} />;
}
