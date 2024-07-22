import React, { useState } from "react";

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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (size === "single-line" && e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col text-green-500 font-mono gap-2">
      <div className="flex flex-row p-2  border-2 border-green-500 rounded-sm relative">
        {popover && <ToolTipGroup popover={popover} />}

        <div className="px-2 ">&gt;</div>
        <textarea
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className={`bg-black focus:outline-none w-full resize-none ${
            size === "single-line" ? "h-8 overflow-hidden" : "h-24"
          }
          ${censored ? "text-security" : ""}
          `}
          rows={size === "single-line" ? 1 : 3}
        />
        <button
          type="button"
          onClick={() => setValue("")}
          className="relative ml-2 bottom-2 transform translate-y-1/2 bg-transparent border-none cursor-pointer"
          aria-label="Clear input"
        >
          x
        </button>
      </div>
      {valState === "error" && (
        <div className="text-red-500 text-sm">Error! {valMessage}</div>
      )}
      {valState === "success" && (
        <div className="text-sm">Success! {valMessage}</div>
      )}
    </div>
  );
};

const ToolTipGroup = ({ popover }: { popover: string }) => {
  return (
    <div className="relative group">
      <div className="border-[1px] border-green-500  px-2 text-green-500">
        i
      </div>
      <div className="absolute hidden group-hover:block bg-gray-700 text-white text-xs rounded p-1">
        {popover}
      </div>
    </div>
  );
};

export default TextInput;
