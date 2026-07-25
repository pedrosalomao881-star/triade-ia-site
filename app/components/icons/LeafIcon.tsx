import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function LeafIcon({ size = 24, color = '#00FF87', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 22H2v-7a4 4 0 0 1 4-4h5" />
      <path d="M14.894 14.446a4.047 4.047 0 0 0-6.753-3.139L2 17.085" />
      <path d="M13 22a4 4 0 0 1-4-4v-5" />
    </svg>
  );
}
