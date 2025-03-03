import React from "react";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const DollarIcon = ({
  size = 21,
  color = "currentColor",
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_810)">
        <path
          d="M9.06708 3.54254L12.2701 16.6228"
          stroke={color}
          strokeWidth="1.4877"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.8176 4.70351L7.91252 5.90463C7.30543 6.05329 6.78225 6.43702 6.45809 6.97142C6.13393 7.50582 6.03534 8.1471 6.184 8.75419C6.33266 9.36128 6.71639 9.88446 7.25079 10.2086C7.78519 10.5328 8.42647 10.6314 9.03356 10.4827L12.3036 9.68197C12.9107 9.53331 13.552 9.63191 14.0864 9.95607C14.6208 10.2802 15.0045 10.8034 15.1532 11.4105C15.3018 12.0176 15.2033 12.6589 14.8791 13.1933C14.5549 13.7277 14.0318 14.1114 13.4247 14.2601L7.86556 15.6213"
          stroke={color}
          strokeWidth="1.4877"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_810">
          <rect
            width="16.16"
            height="16.16"
            fill={color}
            transform="translate(0.898621 4.15607) rotate(-13.7594)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
