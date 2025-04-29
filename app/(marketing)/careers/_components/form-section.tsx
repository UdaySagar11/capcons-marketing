'use client'

import { useEffect, useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton'; // Make sure this path matches your setup

export const FormSection = () => {
    const formRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.async = true;
        script.onload = () => {
            // @ts-ignore
            if (window.hbspt) {
                // @ts-ignore
                window.hbspt.forms.create({
                    portalId: '46947612',
                    formId: '015f50b2-2904-4e3c-81a0-fddd9b26bcfd',
                    region: 'na1',
                    target: '#hubspotForm',
                    onFormReady: () => setIsLoading(false),
                });
            }
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="space-y-4">
            {isLoading && (
                <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4 bg-neutral-300" />
                    <Skeleton className="h-8 w-full bg-neutral-300" />
                    <Skeleton className="h-8 w-1/2 bg-neutral-300" />
                </div>
            )}
            <div id="hubspotForm" ref={formRef} className={isLoading ? 'hidden' : ''} />
        </div>
    );
};
