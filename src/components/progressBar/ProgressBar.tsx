import React, { useState, useEffect } from "react";

// Define the prop types for the ProgressBar component
type ProgressBarProps = {
  currentValue: number;
  maxValue: number;
  backgroundColor?: string;
  progressColor?: string;
  isLinear?: boolean;
  displayPercentage?: undefined | number | string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentValue = 0,
  maxValue = 100,
  backgroundColor = "bg-progress-bg",
  isLinear = false,
  displayPercentage,
  progressColor = "bg-progress-bar",
}) => {
  // State to manage the percentage
  const [percentage, setPercentage] = useState((currentValue / maxValue) * 100);

  // Inline style for the progress bar
  const barStyle = {
    width: isLinear ? `${percentage}%` : "100%",
    backgroundColor: progressColor,
  };

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

const LinearProgressBar: React.FC<ProgressBarProps> = ({
  currentValue,
  maxValue,
  backgroundColor = "bg-progress-bg",
  isLinear = true,
  displayPercentage,
  progressColor = "bg-progress-bar",
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
  isLinear = false,
  displayPercentage,
  progressColor = "bg-progress-bar",
}) => {
  const [value, setValue] = useState(0);
  const radius = 40; // Define the radius of the circle
  const circumference = 2 * Math.PI * radius; // Calculate the circumference of the circle

  //   const radius = 63.66; // radius of the circle // equates to zero
  //   const radius = 23.66; // equates to 100

  const strokeDashoffset = circumference - (value / 100) * circumference;
  useEffect(() => {
    const percentage = (currentValue / maxValue) * 100; // Calculate the percentage
    setValue(percentage); // Update the value state with the calculated percentage
  }, [currentValue, maxValue]); // Ensure the effect runs when currentValue or maxValue changes

  return (
    <>
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* <!-- Background circle --> */}
          <circle
            className="text-black stroke-current"
            stroke-width="10"
            cx="50"
            cy="50"
            r={radius - 10}
            fill="transparent"
          ></circle>
          {/* <!-- Progress circle --> */}
          <circle
            className="text-green-500  progress-ring__circle stroke-current"
            stroke-width="15"
            stroke-linecap="straight"
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            strokeDashoffset={strokeDashoffset}
            strokeDasharray={circumference}
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          ></circle>

          {/* <!-- Center text --> */}
          <text
            x="50"
            y="50"
            font-family="monospace"
            font-size="12"
            text-anchor="middle"
            alignment-baseline="middle"
          >
            {Math.round(value)}%
          </text>
        </svg>
      </div>
    </>
  );
};
