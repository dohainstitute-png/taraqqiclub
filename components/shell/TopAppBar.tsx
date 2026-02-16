'use client';

import Image from 'next/image';

export default function TopAppBar() {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white px-4">
      <div className="flex items-center gap-2">
        <Image src="/brand/logo.png" alt="TaraqqiClub" width={36} height={36} />
        <h1 className="text-lg font-bold">TaraqqiClub</h1>
      </div>
    </header>
  );
}
