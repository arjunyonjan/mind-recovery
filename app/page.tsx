import { getSlides } from "@/lib/mongodb";
import ParallaxSlider from "@/components/ParallaxSlider";

export const dynamic = "force-static";

export default async function Home() {
  const slides = await getSlides();
  // Ensure slides is always an array
  const safeSlides = slides || [];
  return <ParallaxSlider slides={safeSlides} />;
}
