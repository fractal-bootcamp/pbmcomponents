import React, { useState } from "react";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string | number;
  onClick?: () => void;
}
export function Button({
  primary = false,
  backgroundColor,
  size = "medium",
  label = "Button", // Default value for label
  onClick,
}: ButtonProps) {
  const btnClass = `font-mono border-2 ${primary ? "bg-green-500 text-black" : "bg-black text-green-500"} ${size === "small" ? "w-16 h-8" : size === "large" ? "w-24 h-12" : "w-20 h-10"} text-lg`;

  return (
    <button className={btnClass} onClick={onClick} style={{ backgroundColor }}>
      {label}
    </button>
  );
}
export function EnableDisableButtons() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const disableButton = () => {
    setIsButtonDisabled(true);
    alert("Button has been disabled.");
  };

  const enableButton = () => {
    setIsButtonDisabled(false);
    alert("Button has been enabled.");
  };

  return (
    <>
      <button
        onClick={disableButton}
        className={` active:bg-green-400 active:shadow-lg active:transform active:translate-y-1 hover:bg-slate-600 font-mono font-bold  m-2 p-4 rounded-lg border-none shadow-md ${
          isButtonDisabled
            ? "bg-black text-green-500 cursor-not-allowed"
            : "bg-green-500 text-black"
        }`}
        disabled={isButtonDisabled}
      >
        Disable
      </button>
      <button
        onClick={enableButton}
        className={`active:bg-green-400 hover:bg-slate-600 active:shadow-lg active:transform active:translate-y-1 font-mono font-bold cursor-pointer m-2 p-4 rounded-lg border-none shadow-md ${
          !isButtonDisabled
            ? "bg-black text-green-500 cursor-not-allowed"
            : "bg-green-500 text-black "
        }`}
        disabled={!isButtonDisabled}
      >
        Enable
      </button>
    </>
  );
}

export function LoadingButton() {
  return (
    <>
      <div>
        <button
          disabled
          className="font-mono font-bold flex items-center 
                 justify-center gap-1 px-5 py-2 
                 mt-2 rounded bg-green-500 text-black 
                 disabled:bg-green-500/80 disabled:cursor-not-allowed"
        >
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-15"
              cx="12"
              cy="12"
              r="50"
              stroke="currentColor"
              stroke-width="20"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading...
        </button>
      </div>
    </>
  );
}

export function ToolTipOnHover() {
  return (
    <>
      <div className="group relative m-12 flex justify-center">
        <button className="font-mono rounded bg-black px-4 py-2 text-sm text-green-500 shadow-sm hover:bg-slate-600">
          Hover over me, Mr. Anderson...
        </button>
        <span className="font-mono absolute top-10 scale-0 rounded bg-black p-2 text-xs text-green-500 group-hover:scale-100">
          Never send a human to do a machine's job.
        </span>
      </div>
    </>
  );
}
