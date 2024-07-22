import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../components/TextInput";

const meta = {
  title: "Example/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
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
    value: "",
    placeholder: "Enter text...",
    disabled: false,
    censored: false,
  },
};

export const Disabled: Story = {
  args: {
    value: "Disabled input",
    placeholder: "Cannot edit",
    disabled: true,
  },
};

export const Censored: Story = {
  args: {
    value: "Secret text",
    placeholder: "Censored input",
    censored: true,
  },
};
