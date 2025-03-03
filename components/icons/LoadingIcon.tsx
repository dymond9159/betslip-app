import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LoadingIcon = ({
  size = 20,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={(size * 22) / 21}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 2C15.47 2 19.5 6.03 19.5 11"
        stroke="#0000004D"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 2C15.47 2 19.5 6.03 19.5 11C19.5 15.97 15.47 20 10.5 20C5.53 20 1.5 15.97 1.5 11C1.5 6.03 5.53 2 10.5 2Z"
        stroke={color}
        strokeOpacity="0.3"
        strokeWidth="2.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
