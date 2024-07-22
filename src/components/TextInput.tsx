export interface TextInputProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  censored?: boolean;
  placeholder?: string;
  popover?: string;
}

const TextInput = ({
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
      className="border-8 border-red-500"
    />
  );
};

export default TextInput;
