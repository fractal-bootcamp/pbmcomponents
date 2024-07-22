import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from '../../components/Dropdown/dropdown';

const meta = {
  title: 'Examples/Dropdown',
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleSelect: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select an option",
    disabled: false,
    multiSelect: false,
    borderedOptions: false
  }
};

export const MultiSelect: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select an option",
    disabled: false,
    multiSelect: true,
    borderedOptions: false
  }
};

export const Disabled: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select an option",
    disabled: true,
    multiSelect: false,
    borderedOptions: false
  }
};

export const BorderedOptions: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "This is a dropdown with bordered options",
    disabled: false,
    multiSelect: true,
    borderedOptions: true
  }
};