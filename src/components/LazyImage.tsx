import React, { useState } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    aspectRatio?: string;
}

export function LazyImage({
    src,
    alt,
    className = '',
    aspectRatio = 'aspect-video',
}: LazyImageProps) {
    // Flag indicating image loading success in the DOM
    const [loaded, setLoaded] = useState(false);

    return (
        <div
            className={`relative overflow-hidden bg-warmgray ${aspectRatio} ${className}`}
        >
            {/* 1. PULSING SHIMMER BACKDROP: Renders while assets list is loading */}
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-full animate-pulse bg-linear-to-r from-warmgray via-stone-200 to-warmgray" />
                </div>
            )}

            {/* 2. PROGRESSIVE FADE IMAGE */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={`h-full w-full object-cover transition-all duration-1000 ease-out ${
                    loaded
                        ? 'scale-100 opacity-100 blur-0'
                        : 'scale-105 opacity-0 blur-sm'
                }`}
                referrerPolicy="no-referrer"
            />
        </div>
    );
}
