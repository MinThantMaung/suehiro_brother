import Image from "next/image";
import PaginatedGallery, { ImageItem } from "./PaginatedGallery";
import { Suspense } from "react";

const images: ImageItem[] = [
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
  { src: "/kmk1.png", title: "KMK", caption: "The man who afraid of someone" },
  { src: "/kp.jpg", title: "KPZA", caption: "I just want to sleep!" },
  {
    src: "/sla.jpg",
    title: "SLA",
    caption: "The man who always try to look cool",
  },
  { src: "/zlpt.jpg", title: "ZLPT", caption: "Mama Enjoyer" },
  { src: "/mkk.jpg", title: "MKK", caption: "The man who try to look cute" },
  { src: "/kmk2.jpg", title: "KMK & ZLPT", caption: "Y2k bois" },
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
  { src: "/kmk5.jpg", title: "KMK", caption: "Modern Samusa boy" },
  { src: "/kmk6.jpg", title: "KMK & APM", caption: "The brotherhood" },
  { src: "/mtm.jpg", title: "MTM", caption: "The day he almost lost his life" },
  { src: "/hah.jpg", title: "HAH & KMK", caption: "Water Vendor & Donator" },
  { src: "/zlpt1.jpg", title: "ZLPT", caption: "Which cow gonna be lucky?" },
  { src: "/sla1.jpg", title: "SLA", caption: "Defination of true color" },
  { src: "/group.jpg", title: "Group", caption: "The memory" },
  { src: "/KMK7.jpg", title: "KMK", caption: "The Burmese soldier" },
  {
    src: "/KMK8.jpg",
    title: "KMK",
    caption: "He accepts all kinds of customers!",
  },
];

function GallerySkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="h-60 animate-pulse rounded-xl bg-gray-200"
          aria-hidden
        />
      ))}
    </div>
  );
}

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
        <Suspense fallback={<GallerySkeleton />}>
          <PaginatedGallery images={images} pageSize={9} />
        </Suspense>
      </main>
    </div>
  );
}
