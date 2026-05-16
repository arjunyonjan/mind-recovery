import { getSlides } from '@/lib/mongodb';
import ParallaxSlider from '@/components/ParallaxSlider';

// Force static generation at build time
export const dynamic = 'force-static';

export default async function Home() {
  let slides = [];
  try {
    slides = await getSlides();
  } catch (error) {
    console.error('Failed to load slides:', error);
    // Fallback slides if DB not available
    slides = [
      {
        _id: '1',
        title: 'Mind Recovery',
        subtitle: 'Neuroscience-Based Healing',
        content: 'Understanding brain toxins and recovery pathways',
        backgroundImage: '/fallback-bg.jpg',
        order: 1
      }
    ];
  }

  return <ParallaxSlider slides={slides} />;
}
