import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI!;
let client: MongoClient;
let db: Db;

export async function connectToDatabase(): Promise<{ db: Db; client: MongoClient }> {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db();
  }
  return { db, client };
}

export async function getSlides() {
  const { db } = await connectToDatabase();
  return db.collection('slides').find({}).sort({ order: 1 }).toArray();
}

export async function seedSlides(slides: any[]) {
  const { db } = await connectToDatabase();
  await db.collection('slides').deleteMany({});
  return db.collection('slides').insertMany(slides);
}
