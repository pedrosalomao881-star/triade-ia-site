import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function GearIcon({ size = 24, color = '#00FF87', strokeWidth = 1.5 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24M1 12h6m6 0h6m-17.78 7.78l4.24-4.24m5.08 0l4.24 4.24" />
      <path d="M12 2.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19z" />
    </svg>
  );
}
