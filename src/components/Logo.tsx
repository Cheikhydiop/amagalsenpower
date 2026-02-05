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
                    </defs>

                    {/* Circle Background */}
                    <circle cx="50" cy="50" r="45" fill="#09090b" stroke="url(#senegalGrad)" strokeWidth="3" />

                    {/* Muscular Arm Icon */}
                    <path
                        d="M30 65 C30 65 25 75 35 80 C45 85 50 75 50 75 L55 65 C55 65 65 60 75 60 C85 60 90 50 90 40 C90 30 80 25 70 30 C60 35 55 45 55 45 L50 45 C40 40 35 50 30 65 Z"
                        fill="url(#senegalGrad)"
                        stroke="#fff"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:opacity-90 transition-opacity"
                    />

                    {/* Bicep definition details */}
                    <path d="M60 40 Q70 30 80 40" stroke="#09090b" strokeWidth="2" fill="none" opacity="0.5" />
                    <path d="M55 50 Q45 55 40 65" stroke="#09090b" strokeWidth="2" fill="none" opacity="0.5" />

                    {/* Star of Senegal (Small, as accent) */}
                    <path
                        d="M75 15 L77 20 H82 L78 23 L80 28 L75 25 L70 28 L72 23 L68 20 H73 Z"
                        fill="#FFCD00"
                        stroke="#09090b"
                        strokeWidth="0.5"
                    />
                </svg>
            </div>
        </div>
    );
}
