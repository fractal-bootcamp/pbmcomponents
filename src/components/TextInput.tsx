import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export interface TextInputProps {
  size?: "single-line" | "multi-line";
  onChange?: (value: string) => void;
  disabled?: boolean;
  censored?: boolean;
  placeholder?: string;
  popover?: string;
  valState?: "error" | "success" | "default";
  valMessage?: string;
}

const TextInput = ({
  size = "single-line",
  onChange,
  disabled = false,
  censored = false,
  placeholder = "",
  popover,
  valState = "default",
  valMessage,
}: TextInputProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const controls = useAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (size === "single-line" && e.key === "Enter") {
      e.preventDefault();
    }
  };

  //   useEffect(() => {
  //     if (valState === "error") {
  //       controls.start({
  //         x: [0, -10, 10, -10, 10, 0],
  //         transition: { duration: 0.5 },
  //       });
  //     }
  //   }, [valState, controls]);

  const getBorderColor = () => {
    if (disabled) return "rgb(107, 114, 128)"; // gray-500
    if (valState === "error") return "rgb(239, 68, 68)"; // red-500
    if (isFocused) return "rgb(134, 239, 172)"; // green-300
    return "rgb(34, 197, 94)"; // green-500
  };

  return (
    //

    <div className="flex flex-col text-green-500 font-mono gap-2">
      <motion.div
        animate={{
          borderColor: getBorderColor(),
          x: valState === "error" ? [0, -10, 10, -10, 10, 0] : 0,
        }}
        transition={{
          borderColor: { duration: 0.3 },
          x: { duration: 0.5, ease: "easeInOut" },
        }}
        className={`flex flex-row p-2 border-2 rounded-sm relative ${disabled ? "border-gray-500" : "border-green-500"} `}
      >
        {popover && <ToolTipGroup popover={popover} disabled={disabled} />}

        <div
          className={`px-2 ${disabled ? "text-gray-500" : "text-green-500"}`}
        >
          &gt;
        </div>
        <textarea
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className={`bg-black focus:outline-none w-full resize-none ${
            size === "single-line" ? "h-8 overflow-hidden" : "h-24"
          }
          ${censored ? "text-security" : ""}
          ${disabled ? "text-gray-500" : "text-green-500"}
          `}
          rows={size === "single-line" ? 1 : 3}
        />
        <button
          type="button"
          onClick={() => setValue("")}
          className={`relative ml-2 bottom-2 transform translate-y-1/2 bg-transparent border-none cursor-pointer ${disabled ? "text-gray-500" : "text-green-500"}`}
          aria-label="Clear input"
        >
          x
        </button>
      </motion.div>
      {valState === "error" && (
        <div className="text-red-500 text-sm">Error! {valMessage}</div>
      )}
      {valState === "success" && (
        <div className="text-sm">Success! {valMessage}</div>
      )}
    </div>
  );
};

const ToolTipGroup = ({
  popover,
  disabled,
}: {
  popover: string;
  disabled: boolean;
}) => {
  return (
    <div className="relative group">
      <div
        className={`border-[1px] px-2  ${disabled ? "border-gray-500 text-gray-500" : "border-green-500 text-green-500"}`}
      >
        i
      </div>
      <div className="absolute hidden group-hover:block bg-gray-700 text-white text-xs rounded p-1">
        {popover}
      </div>
    </div>
  );
};

export default TextInput;
