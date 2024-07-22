import { text } from "body-parser";

export interface TextInputProps {
  size?: "single-line" | "multi-line";
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  censored?: boolean;
  placeholder?: string;
  popover?: string;
}

const TextInput = ({
  size,
  value,
  onChange,
  disabled,
  censored,
  placeholder,
  popover,
}: TextInputProps) => {
  // TODO: validation states
  // Value and onChange handler

  // show popover only if value is not empty

  if (size === "single-line") {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className="border-2 border-green-500 rounded-sm px-2"
        style={{ verticalAlign: "center", minHeight: "30px" }}
      />
    );
  } else {
    return (
      <textarea
        placeholder={placeholder}
        className="border-2 border-green-500 rounded-sm px-2"
        style={{ verticalAlign: "center", minHeight: "100px" }}
      />
    );
  }
};

export default TextInput;
