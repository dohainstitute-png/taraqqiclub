'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function LangPicker() {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // This logic assumes the very first page load is where you want to pick a language.
    // In a real app, you'd check for a cookie or user preference first.
    const hasSelectedLang = localStorage.getItem('lang_selected');
    if (!hasSelectedLang) {
        // A delay to avoid flashing if the check is too fast
        const timer = setTimeout(() => setPickerVisible(true), 2100); // Show after splash
        return () => clearTimeout(timer);
    }
  }, []);

  const selectLang = (locale: 'ar' | 'en') => {
    localStorage.setItem('lang_selected', 'true');
    setPickerVisible(false);
    
    // Redirect to the same path with the new locale
    const newPath = `/${locale}` + pathname.substring(3); // Assumes pathname is /<locale>/...
    router.replace(newPath);
  };

  if (!isPickerVisible) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Select Language / اختر اللغة</h2>
        <button onClick={() => selectLang('ar')}>العربية</button>
        <button onClick={() => selectLang('en')}>English</button>
      </div>
    </div>
  );
}
