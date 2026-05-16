const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const slides = [
  {
    title: 'Brain Toxins & Recovery',
    subtitle: 'FastMind Movement',
    content: 'Your brain produces ROS, amyloid-beta, and tau every hour. Recovery starts with awareness.',
    backgroundImage: 'https://res.cloudinary.com/your-cloud/image/upload/v1/mind-recovery/slide1',
    order: 1,
    createdAt: new Date()
  },
  {
    title: 'Alcohol & Brain Health',
    subtitle: 'The Triple Hit',
    content: 'Alcohol increases ROS by 200%, amyloid-beta by 50%, and tau tangles by 300%. Know what you consume.',
    backgroundImage: 'https://res.cloudinary.com/your-cloud/image/upload/v1/mind-recovery/slide2',
    order: 2,
    createdAt: new Date()
  },
  {
    title: 'Sleep = Brain Cleaning',
    subtitle: 'Glymphatic System',
    content: 'During deep sleep, your brain clears 60-90% of amyloid-beta. Sleep is non-negotiable.',
    backgroundImage: 'https://res.cloudinary.com/your-cloud/image/upload/v1/mind-recovery/slide3',
    order: 3,
    createdAt: new Date()
  },
  {
    title: 'Mind Recovery Journey',
    subtitle: 'Start Today',
    content: 'Small daily choices → Better clearance → Sharper mind. Your brain can heal.',
    backgroundImage: 'https://res.cloudinary.com/your-cloud/image/upload/v1/mind-recovery/slide4',
    order: 4,
    createdAt: new Date()
  }
];

async function seed() {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db();
    await db.collection('slides').deleteMany({});
    await db.collection('slides').insertMany(slides);
    console.log('✅ Seeded', slides.length, 'slides');
  } catch (error) {
    console.error('❌ Seed failed:', error);
  } finally {
    await client.close();
  }
}

seed();
