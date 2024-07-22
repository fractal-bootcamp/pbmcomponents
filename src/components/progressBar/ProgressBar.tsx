import React, { useState, useEffect } from "react";

type ProgressBarProps = {
  currentValue: number;
  maxValue: number;
  backgroundColor?: string;
  isLinear?: boolean;
  displayPercentage?: undefined | number | string;
  colorOnProgress?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentValue,
  maxValue,
  backgroundColor,
  isLinear,
  displayPercentage,
  colorOnProgress,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    setValue(currentValue);
  }, []);

  return (
    <>
      <progress className="progress" value={currentValue} max={maxValue}>
        {value}
      </progress>
    </>
  );
};

export default ProgressBar;
