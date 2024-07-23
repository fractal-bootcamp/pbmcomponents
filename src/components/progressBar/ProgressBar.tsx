import React, { useState, useEffect } from "react";

// Define the prop types for the ProgressBar component
type ProgressBarProps = {
  currentValue: number;
  maxValue: number;
  backgroundColor?: string;
  progressColor?: string;
  oppositeColors?: boolean;
  isLinear?: boolean;
  displayPercentage?: undefined | number | string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentValue,
  maxValue,
  backgroundColor = "bg-progress-bg",
  oppositeColors,
  isLinear = false,
  displayPercentage,
  progressColor = "bg-progress-bar",
}) => {
  return isLinear ? (
    <LinearProgressBar
      currentValue={currentValue}
      maxValue={maxValue}
      backgroundColor={backgroundColor}
      displayPercentage={displayPercentage}
      progressColor={progressColor}
    />
  ) : (
    <CircularProgressBar
      currentValue={currentValue}
      maxValue={maxValue}
      backgroundColor={backgroundColor}
      displayPercentage={displayPercentage}
      progressColor={progressColor}
    />
  );
};

export default ProgressBar;

// I will build a function where, based on the chosen color, the graphs will create a transition from 0 to 100 where 0 is the starting
//color, and 100 is its opposite according to this calculator.
export function colorsForGraph(color: string) {
  //How will the color be picked? How does the conversion from color string non-hex to hex could work here?

  function invertColor(hex: string) {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    const newHex = "#" + padZero(r) + padZero(g) + padZero(b);
    return newHex;
  }

  function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join("0");
    return (zeros + str).slice(-len);
  }

  const newHex = invertColor(color);

  const pairOfHexes = [color, newHex];

  return pairOfHexes;
}

const LinearProgressBar: React.FC<ProgressBarProps> = ({
  currentValue,
  maxValue,
  backgroundColor,
  isLinear = true,
  displayPercentage,
  progressColor,
}) => {
  // State to manage the percentage
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage((currentValue / maxValue) * 100);
  }, []);
  // Inline style for the progress bar
  const barStyle = {
    width: `${percentage}%`,
    backgroundColor: progressColor,
  };

  return (
    <div
      className={`progress w-full h-6 border-2 border-green-500 relative ${backgroundColor}`}
    >
      <div
        className={`progress-bar h-full shadow-md ${progressColor}`}
        style={barStyle}
      />
      {displayPercentage && (
        <div className="progress-label absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          {typeof displayPercentage === "number"
            ? displayPercentage.toFixed(2)
            : displayPercentage}
        </div>
      )}
    </div>
  );
};

const CircularProgressBar: React.FC<ProgressBarProps> = ({
  currentValue,
  maxValue,
  backgroundColor = "bg-progress-bg",
  progressColor = "bg-progress-bar",
}) => {
  const radius = 45;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const percentage = Math.min(
    Math.max((currentValue / maxValue) * 100, 0),
    100
  );
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          className="text-black stroke-current"
          strokeWidth={strokeWidth}
          cx="50"
          cy="50"
          r={normalizedRadius}
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          className={`${progressColor} stroke-current`}
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          cx="48"
          cy="48"
          r={normalizedRadius}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 50 50)"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
        {/* Center text */}
        <text
          x="48"
          y="50"
          fontFamily="monospace"
          fontSize="20"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {Math.round(percentage)}%
        </text>
      </svg>
    </div>
  );
};
