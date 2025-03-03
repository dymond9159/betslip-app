import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const CheckIcon = ({
  size = 18,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={(size * 13) / 19}
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 1L6.5 12L1.5 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
