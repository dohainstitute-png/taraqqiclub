'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardActions } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';
import { TextField } from '@/components/ui/TextField';

// --- Step 1: Welcome --- //
const StepWelcome = ({ onNext }: { onNext: () => void }) => (
    <Card>
        <CardBody>
            <h2 style={{fontSize: 22, fontWeight: 600, textAlign: 'center', marginBottom: 16}}>Welcome to the App!</h2>
            <p style={{textAlign: 'center', color: 'var(--slate)', marginBottom: 24}}>
                Let's get you set up. This will only take a minute.
            </p>
            <TextField label="What should we call you?" placeholder="e.g., Al-Khwarizmi" />
        </CardBody>
        <CardActions>
             <Button onClick={onNext} style={{marginLeft: 'auto'}}>Continue</Button>
        </CardActions>
    </Card>
);

// --- Step 2: Preferences --- //
const StepPreferences = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => {
    const [selection, setSelection] = useState<string[]>([]);
    const toggleSelection = (item: string) => {
        setSelection(prev => 
            prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
        );
    }
    const topics = ["Science", "History", "Art", "Technology", "Philosophy"];

    return (
        <Card>
            <CardBody>
                <h2 style={{fontSize: 22, fontWeight: 600, marginBottom: 16}}>What topics interest you?</h2>
                <p style={{color: 'var(--slate)', marginBottom: 24}}>Select at least 3 topics to personalize your feed.</p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 12}}>
                    {topics.map(topic => (
                        <Chip key={topic} selected={selection.includes(topic)} onClick={() => toggleSelection(topic)}>
                            {topic}
                        </Chip>
                    ))}
                </div>
            </CardBody>
            <CardActions>
                <Button variant="secondary" onClick={onBack}>Back</Button>
                <Button onClick={onNext} disabled={selection.length < 3} style={{marginLeft: 'auto'}}>Continue</Button>
            </CardActions>
        </Card>
    )
};


// --- Step 3: Finish --- //
const StepFinish = ({ onBack }: { onBack: () => void }) => (
    <Card>
        <CardBody>
             <h2 style={{fontSize: 22, fontWeight: 600, textAlign: 'center', marginBottom: 16}}>You're all set!</h2>
            <p style={{textAlign: 'center', color: 'var(--slate)', marginBottom: 24}}>
                Enjoy your personalized experience.
            </p>
        </CardBody>
         <CardActions>
            <Button variant="secondary" onClick={onBack}>Back</Button>
            <Button onClick={() => alert("Welcome!")} style={{marginLeft: 'auto'}}>Go to Home</Button>
        </CardActions>
    </Card>
);

// --- Main Flow Component --- //
export const OnboardingFlow = () => {
    const [step, setStep] = useState(1);

    const onNext = () => setStep(s => s + 1);
    const onBack = () => setStep(s => s - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <StepWelcome onNext={onNext} />;
            case 2:
                return <StepPreferences onNext={onNext} onBack={onBack} />;
            case 3:
                return <StepFinish onBack={onBack} />;
            default:
                return <StepWelcome onNext={onNext} />;
        }
    }

    return (
        <div style={{maxWidth: 520, margin: '40px auto'}}>
            {renderStep()}
        </div>
    )
}
