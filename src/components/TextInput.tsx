import React, { useState } from "react";

export interface TextInputProps {
  size?: "single-line" | "multi-line";
  onChange?: (value: string) => void;
  disabled?: boolean;
  censored?: boolean;
  placeholder?: string;
  popover?: string;
  valState?: "error" | "success" | "default";
}

const TextInput = ({
  size = "single-line",
  onChange,
  disabled = false,
  censored = false,
  placeholder = "",
  popover,
  valState = "default",
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
    <>
      <div className="flex flex-row p-2 font-mono border-2 border-green-500 rounded-sm relative">
        {popover && <ToolTipGroup popover={popover} />}

        <div className="px-2 text-green-500">&gt;</div>
        <textarea
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder={placeholder}
          className={`bg-black text-green-500 w-full resize-none ${
            size === "single-line" ? "h-8 overflow-hidden" : "h-24"
          }
          ${censored ? "text-security" : ""}
          `}
          rows={size === "single-line" ? 1 : 3}
        />
      </div>
    </>
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
