import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-24 h-24'
    };

    return (
        <div className={`relative group ${className}`}>
            {/* Glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r from-[#00693E] via-[#FFCD00] to-[#CE1126] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>

            {/* Main Logo Container */}
            <div className={`relative ${sizeClasses[size]}`}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                    <defs>
                        <linearGradient id="senegalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00693E" />
                            <stop offset="50%" stopColor="#FFCD00" />
                            <stop offset="100%" stopColor="#CE1126" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Shield / Badge Background - Dark Hexagon */}
                    <path
                        d="M50 5 L92 26 L92 74 L50 95 L8 74 L8 26 Z"
                        fill="#09090b"
                        stroke="url(#senegalGrad)"
                        strokeWidth="2.5"
                    />

                    {/* Abstract Muscle / Lion Mane Lines */}
                    <path d="M50 18 L75 35 V65 L50 80 L25 65 V35 Z" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" fill="none" />

                    {/* Dumbbell integrated with Lion/Face shape */}
                    {/* Central Bar / Nose */}
                    <path d="M48 68 H52 V82 H48 Z" fill="#555" />

                    {/* Weights */}
                    <path d="M35 65 H45 V85 H35 Z" fill="url(#senegalGrad)" />
                    <path d="M55 65 H65 V85 H55 Z" fill="url(#senegalGrad)" />

                    {/* Star of Senegal (Prominent) */}
                    <path
                        d="M50 25 L56 42 H74 L60 54 L65 70 L50 60 L35 70 L40 54 L26 42 H44 Z"
                        fill="#FFCD00"
                        stroke="#09090b"
                        strokeWidth="1"
                        className="group-hover:animate-pulse"
                    />

                    {/* Letters AG visible subtly or omitted in favor of symbol */}
                </svg>
            </div>
        </div>
    );
}
