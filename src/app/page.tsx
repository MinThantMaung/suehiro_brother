import Image from "next/image";

const images = [
  {
    src: "/APL.jpg",
    title: "APL",
    caption: "The man who did everything except work",
  },
  {
    src: "/kmk.png",
    title: "KMK",
    caption: "He said they are brother but we all know they are not xD",
  },
  {
    src: "/kmk1.png",
    title: "KMK",
    caption: "The man who afraid of someone",
  },
  {
    src: "/kp.jpg",
    title: "KPZA",
    caption: "I just want to sleep!",
  },
  {
    src: "/sla.jpg",
    title: "SLA",
    caption: "The man who always try to look cool",
  },
  {
    src: "/zlpt.jpg",
    title: "ZLPT",
    caption: "Mama Enjoyer",
  },
  {
    src: "/mkk.jpg",
    title: "MKK",
    caption: "The man who try to look cute",
  },
  {
    src: "/kmk2.jpg",
    title: "KMK & ZLPT",
    caption: "Y2k bois",
  },
  {
    src: "/kmk3.jpg",
    title: "KMK",
    caption:
      "He thought he look like luffy,actually he look like Aung khant Paing",
  },
  {
    src: "/kmk4.jpg",
    title: "KMK",
    caption: "In chiba mind,don't touch me you filthy human",
  },
  {
    src: "/kmk5.jpg",
    title: "KMK",
    caption: "Modern Samusa boy",
  },
  {
    src: "/kmk6.jpg",
    title: "KMK & APM",
    caption: "The brotherhood",
  },
  {
    src: "/mtm.jpg",
    title: "MTM",
    caption: "The day he almost lost his life",
  },
  {
    src: "/hah.jpg",
    title: "HAH & KMK",
    caption: "Water Vendor & Donator",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="container mx-auto px-6 pt-10 pb-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Suehiro Bros
          </span>
        </h1>
        <p className="text-gray-600 mt-2">
          A curated set of shots—clean, simple, and fast.
        </p>
      </header>

      <main className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {images.map(({ src, title, caption }, i) => (
            <figure
              key={src}
              className="group relative rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-200/70 transition hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={src}
                  alt={title}
                  fill
                  priority={i < 3}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0">
                <div className="from-black/60 via-black/30 to-transparent bg-linear-to-t p-3 pt-8">
                  <div className="text-white text-sm font-semibold drop-shadow-sm">
                    {title}
                  </div>
                  <div className="text-white/80 text-xs">{caption}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
}
