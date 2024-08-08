"use client";

import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex items-center flex-col gap-6 mt-10">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>
      <Button type="button" onClick={reset} className="w-1/12 rounded-xl">
        Try again
      </Button>
    </main>
  );
}
