import React from "react";
import ProgressBar from "./ProgressBar";
import index from "../../index.css";
import { Meta } from "@storybook/react";

// Default export for Storybook
export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    currentValue: { control: "number" },
    maxValue: { control: "number" },
    backgroundColor: { control: "color" },
    progressColor: { control: "color" },
    isLinear: { control: "boolean" },
    displayPercentage: { control: "text" },
  },
};

// Template for the ProgressBar component
const Template = (args) => <ProgressBar {...args} />;

// Meta configuration for the storybook
const meta: Meta = {
  title: "Components/Buttons",
  component: ProgressBar,
};

// Linear progress bar stories
export const LinearProgress = Template.bind({});
LinearProgress.args = {
  currentValue: 0,
  maxValue: 100,
  isLinear: true,
  backgroundColor: "bg-gray-200",
  progressColor: "bg-green-500",
};

// Circular progress bar stories
export const CircularProgress = Template.bind({});
CircularProgress.args = {
  currentValue: 66,
  maxValue: 100,
  isLinear: false,
  backgroundColor: "bg-gray-200",
  progressColor: "bg-green-500",
};
