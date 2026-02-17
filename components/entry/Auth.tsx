'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { t, type Locale } from "@/lib/i18n";

export function Auth({ locale }: { locale: Locale }) {
  const T = t(locale);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // In a real app, this would be based on actual authentication status
    const hasOnboarded = localStorage.getItem('onboarded');
    const isAuthenticated = localStorage.getItem('authenticated');

    if (hasOnboarded && !isAuthenticated) {
        const timer = setTimeout(() => setIsVisible(true), 500); // Show after onboarding fades
        return () => clearTimeout(timer);
    }
  }, []);

  const completeAuth = () => {
    localStorage.setItem('authenticated', 'true');
    setIsVisible(false);
    router.refresh(); // Refresh to update the app state
  };


  if (!isVisible) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="modal">
        <h2>{T.auth.title}</h2>
        {/* Placeholder for Auth form */}
        <p>{T.auth.placeholder}</p>
        <button onClick={completeAuth}>{T.auth.cta}</button>
      </div>
    </div>
  );
}
