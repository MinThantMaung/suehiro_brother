"use client";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (p: number) => void;
  siblingCount?: number;
};

export default function Pagination({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: Props) {
  if (totalPages <= 1) return null;

  const go = (p: number) => onPageChange(Math.max(1, Math.min(totalPages, p)));

  const range = () => {
    const start = Math.max(1, page - siblingCount);
    const end = Math.min(totalPages, page + siblingCount);
    const nums: number[] = [];
    if (start > 1) nums.push(1);
    if (start > 2) nums.push(-1);
    for (let n = start; n <= end; n++) nums.push(n);
    if (end < totalPages - 1) nums.push(-2);
    if (end < totalPages) nums.push(totalPages);
    return nums;
  };

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        className="rounded-lg px-3 py-1.5 text-black text-sm ring-1 ring-gray-300 disabled:opacity-50 cursor-pointer"
        onClick={() => go(1)}
        disabled={page === 1}
      >
        First
      </button>
      <button
        className="rounded-lg px-3 py-1.5 text-sm text-black ring-1 ring-gray-300 disabled:opacity-50 cursor-pointer"
        onClick={() => go(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      {range().map((n, i) =>
        n < 0 ? (
          <span key={`gap-${i}`} className="px-2  text-gray-500">
            …
          </span>
        ) : (
          <button
            key={n}
            onClick={() => go(n)}
            aria-current={n === page ? "page" : undefined}
            className={`rounded-lg px-3 py-1.5 text-sm ring-1 ring-gray-300 cursor-pointer
              ${
                n === page
                  ? "bg-gray-900 text-white ring-gray-900"
                  : "hover:bg-gray-100 text-black"
              }`}
          >
            {n}
          </button>
        )
      )}

      <button
        className="rounded-lg px-3 py-1.5 text-sm text-black ring-1 ring-gray-300 disabled:opacity-50 cursor-pointer"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
      <button
        className="rounded-lg px-3 py-1.5 text-sm text-black ring-1 ring-gray-300 disabled:opacity-50 cursor-pointer"
        onClick={() => go(totalPages)}
        disabled={page === totalPages}
      >
        Last
      </button>
    </nav>
  );
}
