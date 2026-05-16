// Static slide data - Main Title + 6 Content Slides
export type Slide = {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
  order: number;
  bgImage?: string;
  isTitleSlide?: boolean;
};

const staticSlides: Slide[] = [
  // SLIDE 0: MAIN TITLE (with 3D brain image)
  {
    _id: "title",
    title: "Your Brain Makes Toxins Every Hour",
    subtitle: "",
    content: "",
    order: 0,
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1778931298/mind-recovery/b5227091-da54-40fa-a78a-b949fe409dc8.png",
    isTitleSlide: true
  },
  // SLIDE 1
  {
    _id: "1",
    title: "🧠 Your brain makes waste.",
    subtitle: "One type: Amyloid-beta",
    content: "",
    order: 1,
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1778925083/mind-recovery/file_000000001f4c720b9e0816ff28ebad0e_gw8m7e.png"
  },
  // SLIDE 2
  {
    _id: "2",
    title: "⏱️ Each hour → ~1 μg of amyloid-beta",
    subtitle: "🧂 That's ~1/50th of a grain of salt",
    content: "",
    order: 2,
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1778925120/mind-recovery/file_000000001438720bb009ad1a20c7ab37_nuwpiz.png"
  },
  // SLIDE 3
  {
    _id: "3",
    title: "⚠️ Problem isn't making it.",
    subtitle: "Problem is clearing it.",
    content: "Healthy brain: clears ~90% during sleep\nAging / Poor sleep → plaques form",
    order: 3,
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1778928373/mind-recovery/ChatGPT_Image_May_16_2026_04_00_49_PM_xtvymf.png"
  },
  // SLIDE 4
  {
    _id: "4",
    title: "📈 5,000+ pg/mg → plaques form",
    subtitle: "🗑️ Clearance failure → neurodegeneration",
    content: "",
    order: 4,
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1778928379/mind-recovery/ChatGPT_Image_May_16_2026_04_29_42_PM_ziqpds.png"
  },
  // SLIDE 5
  {
    _id: "5",
    title: "💤 Best clearance tool?",
    subtitle: "Deep sleep",
    content: "(Glymphatic system activates)",
    order: 5,
    bgImage: "https://res.cloudinary.com/dpnxmo8ak/image/upload/v1778928384/mind-recovery/ChatGPT_Image_May_16_2026_04_29_35_PM_ftckjm.png"
  },
  // SLIDE 6
  {
    _id: "6",
    title: "Your brain cleans itself while you sleep.",
    subtitle: "Don't skip it. 🧠💤",
    content: "",
    order: 6,
    bgImage: ""
  }
];

export async function getSlides(): Promise<Slide[]> {
  return Promise.resolve(staticSlides);
}

export async function connectToDatabase() {
  return { db: null, client: null };
}
