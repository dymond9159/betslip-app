import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const TrashIcon = ({
  size = 20,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={(size * 21) / 20}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5.5H17.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8334 5.5V17.1667C15.8334 18 15.0001 18.8333 14.1667 18.8333H5.83341C5.00008 18.8333 4.16675 18 4.16675 17.1667V5.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66675 5.49999V3.83332C6.66675 2.99999 7.50008 2.16666 8.33341 2.16666H11.6667C12.5001 2.16666 13.3334 2.99999 13.3334 3.83332V5.49999"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.33325 9.66666V14.6667"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 9.66666V14.6667"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
