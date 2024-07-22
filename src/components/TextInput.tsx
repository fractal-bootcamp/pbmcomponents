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
  return (
    <input
      type="text"
      placeholder="hello bro"
      className="border-2 border-green-500 rounded-sm px-2"
    />
  );
};

export default TextInput;
