'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { t, type Locale } from "@/lib/i18n";

export function Onboarding({ locale }: { locale: Locale }) {
  const T = t(locale);
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // In a real app, this would be controlled by app state (e.g., after login)
    const hasOnboarded = localStorage.getItem('onboarded');
    const langSelected = localStorage.getItem('lang_selected');

    if (!hasOnboarded && langSelected) {
        // Delay to allow language picker to disappear
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }
  }, []);

  const completeOnboarding = () => {
    localStorage.setItem('onboarded', 'true');
    setIsVisible(false);
    // You might want to reload or navigate to ensure the app state is correct
    router.refresh();
  };

  const nextStep = () => setStep(s => s + 1);
  const skip = () => completeOnboarding();

  if (!isVisible) {
    return null;
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return <div>{T.onboarding.role.title}</div>; // Placeholder
      case 1:
        return <div>{T.onboarding.topics.title}</div>; // Placeholder
      case 2:
        return <div>{T.onboarding.follow.title}</div>; // Placeholder
      default:
        completeOnboarding();
        return null;
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={skip} className="skipBtn">{T.skip}</button>
        {renderStep()}
        <button onClick={step === 2 ? completeOnboarding : nextStep}>
          {step === 2 ? T.finish : T.next}
        </button>
      </div>
    </div>
  );
}
