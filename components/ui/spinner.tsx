import React from 'react';

// Define the props type for the Spinner component
interface SpinnerProps {
  className?: string; // Optional className prop for additional styling
}

// Spinner component definition
export const Spinner: React.FC<SpinnerProps> = ({ className }) => (
  <svg
    className={`animate-spin ${className}`} // Combine animate-spin with any additional className
    xmlns="http://www.w3.org/2000/svg" // SVG namespace
    fill="none" // No fill for the circle
    viewBox="0 0 24 24" // Viewbox dimensions
  >
    <circle
      className="opacity-25" // Circle opacity
      cx="12" // Center x-coordinate
      cy="12" // Center y-coordinate
      r="10" // Radius
      stroke="currentColor" // Stroke color inherits from current text color
      strokeWidth="4" // Stroke width
    ></circle>
    <path
      className="opacity-75" // Path opacity
      fill="currentColor" // Fill color inherits from current text color
      d="M4 12a8 8 0 018-8v8H4z" // Path data for the spinner
    ></path>
  </svg>
);