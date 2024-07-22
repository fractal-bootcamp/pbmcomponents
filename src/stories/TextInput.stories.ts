import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../components/TextInput";

const meta = {
  title: "Example/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#000000" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["single-line", "multi-line"] },
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
    censored: { control: "boolean" },
    placeholder: { control: "text" },
    popover: { control: "text" },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    disabled: false,
    censored: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Cannot edit",
    disabled: true,
  },
};

export const Censored: Story = {
  args: {
    placeholder: "Censored input",
    censored: true,
  },
};
