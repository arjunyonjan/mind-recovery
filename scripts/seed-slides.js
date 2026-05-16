const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const slides = [
  {
    title: 'Brain Toxins & Recovery',
    titleNe: 'मस्तिष्क विषाक्त पदार्थ र पुनःप्राप्ति',
    subtitle: 'FastMind Movement',
    subtitleNe: 'फास्टमाइन्ड अभियान',
    content: 'Your brain produces ROS, amyloid-beta, and tau every hour. Recovery starts with awareness.',
    contentNe: 'तपाईंको मस्तिष्कले प्रत्येक घण्टा ROS, एमाइलोइड-बीटा, र tau उत्पादन गर्छ। पुनःप्राप्ति जागरूकताबाट सुरु हुन्छ।',
    backgroundImage: 'https://res.cloudinary.com/your-cloud/image/upload/v1/mind-recovery/slide1',
    order: 1,
    createdAt: new Date()
  },
  {
    title: 'Alcohol & Brain Health',
    titleNe: 'रक्सी र मस्तिष्क स्वास्थ्य',
    subtitle: 'The Triple Hit',
    subtitleNe: 'त्रिहस्त प्रहार',
    content: 'Alcohol increases ROS by 200%, amyloid-beta by 50%, and tau tangles by 300%. Know what you consume.',
    contentNe: 'रक्सीले ROS 200%, एमाइलोइड-बीटा 50%, र tau ट्याङ्गल 300% ले बढाउँछ। तपाईंले के उपभोग गर्नुहुन्छ जान्नुहोस्।',
    backgroundImage: 'https://res.cloudinary.com/your-cloud/image/upload/v1/mind-recovery/slide2',
    order: 2,
    createdAt: new Date()
  },
  {
    title: 'Sleep = Brain Cleaning',
    titleNe: 'निद्रा = मस्तिष्क सफाई',
    subtitle: 'Glymphatic System',
    subtitleNe: 'ग्लिम्फेटिक प्रणाली',
    content: 'During deep sleep, your brain clears 60-90% of amyloid-beta. Sleep is non-negotiable.',
    contentNe: 'गहिरो निद्राको समयमा, तपाईंको मस्तिष्कले 60-90% एमाइलोइड-बीटा सफा गर्छ। निद्रा अनिवार्य छ।',
    backgroundImage: 'https://res.cloudinary.com/your-cloud/image/upload/v1/mind-recovery/slide3',
    order: 3,
    createdAt: new Date()
  },
  {
    title: 'Mind Recovery Journey',
    titleNe: 'मानसिक पुनःप्राप्ति यात्रा',
    subtitle: 'Start Today',
    subtitleNe: 'आज सुरु गर्नुहोस्',
    content: 'Small daily choices → Better clearance → Sharper mind. Your brain can heal.',
    contentNe: 'साना दैनिक छनौटहरू → राम्रो निकासी → तीव्र दिमाग। तपाईंको मस्तिष्क निको हुन सक्छ।',
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
    console.log('✅ Seeded', slides.length, 'slides with Nepali translations');
  } catch (error) {
    console.error('❌ Seed failed:', error);
  } finally {
    await client.close();
  }
}

seed();
