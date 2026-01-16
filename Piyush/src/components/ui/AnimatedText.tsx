'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
}

export default function AnimatedText({
    text,
    className = '',
    delay = 0,
    speed = 50
}: AnimatedTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const timeout = setTimeout(() => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayedText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, speed);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isVisible, text, delay, speed]);

    return (
        <div ref={elementRef} className={className}>
            {displayedText}
            <span className="animate-pulse">|</span>
        </div>
    );
}
