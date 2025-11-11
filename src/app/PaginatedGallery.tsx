"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "./pagination";

export type ImageItem = { src: string; title: string; caption: string };

type Props = {
  images: ImageItem[];
  pageSize?: number; // default 9
};

export default function PaginatedGallery({ images, pageSize = 9 }: Props) {
  const totalPages = Math.max(1, Math.ceil(images.length / pageSize));

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageFromUrl = Number(searchParams.get("page") || "1");
  const [page, setPage] = useState(
    Number.isFinite(pageFromUrl) && pageFromUrl >= 1
      ? Math.min(pageFromUrl, totalPages)
      : 1
  );

  // keep URL in sync (?page=…)
  const updateUrl = useCallback(
    (nextPage: number) => {
      const sp = new URLSearchParams(searchParams.toString());
      if (nextPage <= 1) sp.delete("page");
      else sp.set("page", String(nextPage));
      router.replace(`${pathname}?${sp.toString()}`, { scroll: true });
    },
    [pathname, router, searchParams]
  );

  const onPageChange = (p: number) => {
    setPage(p);
    updateUrl(p);
  };

  // reflect manual URL changes / external navigation
  useEffect(() => {
    const p = Number(searchParams.get("page") || "1");
    const safe = Number.isFinite(p) && p >= 1 ? Math.min(p, totalPages) : 1;
    setPage(safe);
  }, [searchParams, totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return images.slice(start, start + pageSize);
  }, [images, page, pageSize]);

  if (images.length === 0) {
    return <p className="text-center text-gray-500">No images.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {pageItems.map(({ src, title, caption }, i) => (
          <figure
            key={`${src}-${i}`}
            className="group relative rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-200/70 transition hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={src}
                alt={title}
                fill
                priority={i < 3 && page === 1}
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

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
}
