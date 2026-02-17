'use client';

import { t, type Locale } from '@/lib/i18n';

// Placeholder for the Create Entry modal/view
export function CreateEntry({ locale }: { locale: Locale }) {
    const T = t(locale);

    // In the future, this would be a modal or a separate screen
    // Triggered by the create button in the TopAppBar

    return (
        <div style={{display: 'none'}}> {/* Hidden for now */}
            <h2>{T.createEntry.title}</h2>
        </div>
    );
}
