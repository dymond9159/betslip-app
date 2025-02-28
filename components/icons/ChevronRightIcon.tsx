import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ChevronRightIcon = ({
  size = 20,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size / 2}
      height={size}
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9.5L5 5.5L1 1.5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
