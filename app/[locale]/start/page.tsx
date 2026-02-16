"use client";

import { useRouter } from "next/navigation";
import { t, isLocale, type Locale } from "../../lib/i18n";
import { useState } from "react";

const STEPS_COUNT = 4;

export default function StartPage({ params }: { params: { locale: string } }) {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const loc = (isLocale(params.locale) ? params.locale : "ar") as Locale;
  const isRtl = loc === "ar";
  const labels = t(loc);

  const onNext = () => {
    if (step < STEPS_COUNT) setStep((s) => s + 1);
    else router.push(`/${loc}/home`);
  };

  const onPrev = () => setStep((s) => s - 1);

  const onSkip = () => router.push(`/${loc}/home`);

  return (
    <div className="startShell">
      <header className="startHeader">
        {/* Logo */}
        <div className="topbarTitle" aria-label="App title">
          {isRtl ? null : <span className="copperKeyline" aria-hidden="true" />}
          <span>{labels.appName}</span>
          {isRtl ? <span className="copperKeyline" aria-hidden="true" /> : null}
        </div>

        {/* Skip */}
        {step < STEPS_COUNT ? (
          <button type="button" className="textBtn" onClick={onSkip}>
            {labels.skip}
          </button>
        ) : null}
      </header>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          gap: 4,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {Array.from({ length: STEPS_COUNT + 1 }).map((_, i) => (
          <div key={i} className={`dot ${i === step ? "dotActive" : ""}`} />
        ))}
      </div>

      <div className="startContent">
        <OnboardingStep step={step} />
      </div>

      {/* Actions */}
      <div className="startActions">
        {step > 0 ? (
          <button type="button" className="textBtn" onClick={onPrev}>
            {labels.back}
          </button>
        ) : (
          <div />
        )}

        <button type="button" className="primaryBtn" onClick={onNext}>
          {step < STEPS_COUNT ? labels.next : labels.start}
        </button>
      </div>
    </div>
  );
}

function OnboardingStep({ step }: { step: number }) {
  if (step === 0) return <div>First step</div>;
  if (step === 1) return <div>Second step</div>;
  if (step === 2) return <div>Third step</div>;
  if (step === 3) return <div>Fourth step</div>;
  return <div>Final step</div>;
}
