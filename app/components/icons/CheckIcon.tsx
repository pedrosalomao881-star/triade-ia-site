import React from 'react';

interface CheckIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export default function CheckIcon({
  size = 24,
  color = '#00FF87',
  strokeWidth = 2,
  className = '',
}: CheckIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
