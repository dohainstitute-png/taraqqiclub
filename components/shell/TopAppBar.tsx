'use client';

import { useRouter, usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n';
import { ArrowLeft } from 'lucide-react';

const TopAppBar = ({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> }) => {
  const router = useRouter();
  const pathname = usePathname();

  const showBackButton = pathname.split('/').length > 3;

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b">
      {showBackButton ? (
        <button onClick={() => router.back()} className="p-2">
          <ArrowLeft />
        </button>
      ) : (
        <div />
      )}
      <h1 className="text-xl font-bold">{dictionary.appName}</h1>
      <div>
        {/* Add actions here */}
      </div>
    </header>
  );
};

export default TopAppBar;
