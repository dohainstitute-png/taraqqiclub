"use client";
import { useEffect, useState } from 'react';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Splash screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="splashScreen">
      {/* Placeholder for TaraqqiClub Logo */}
      <h1>TaraqqiClub</h1>
    </div>
  );
}
