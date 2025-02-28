import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ProfileIcon = ({
  size = 20,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_666_4086)">
        <path
          d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z"
          stroke={color}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 10.8333C11.3807 10.8333 12.5 9.71402 12.5 8.33331C12.5 6.9526 11.3807 5.83331 10 5.83331C8.61929 5.83331 7.5 6.9526 7.5 8.33331C7.5 9.71402 8.61929 10.8333 10 10.8333Z"
          stroke={color}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.8335 17.2184V15.8334C5.8335 15.3913 6.00909 14.9674 6.32165 14.6548C6.63421 14.3423 7.05814 14.1667 7.50016 14.1667H12.5002C12.9422 14.1667 13.3661 14.3423 13.6787 14.6548C13.9912 14.9674 14.1668 15.3913 14.1668 15.8334V17.2184"
          stroke={color}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_666_4086">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
