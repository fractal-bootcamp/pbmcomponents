import React, { useState } from "react";

export interface TextInputProps {
  size?: "single-line" | "multi-line";
  onChange?: (value: string) => void;
  disabled?: boolean;
  censored?: boolean;
  placeholder?: string;
  popover?: string;
}

const TextInput = ({
  size = "single-line",
  onChange,
  disabled = false,
  censored = false,
  placeholder = "",
  popover,
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
    <textarea
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      placeholder={placeholder}
      className={`border-2 bg-black text-green-500 border-green-500 rounded-sm px-2 w-full resize-none ${
        size === "single-line" ? "h-8 overflow-hidden" : "h-24"
      }`}
      //   style={{
      //     WebkitText: censored ? "disc" : "none",
      //   }}
      rows={size === "single-line" ? 1 : 3}
    />
  );
};

export default TextInput;
