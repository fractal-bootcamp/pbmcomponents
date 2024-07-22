import React from "react";
import ProgressBar from "./ProgressBar";

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

// Linear progress bar stories
export const LinearProgress30 = Template.bind({});
LinearProgress30.args = {
  currentValue: 30,
  maxValue: 100,
  isLinear: true,
  backgroundColor: "bg-gray-200",
  progressColor: "bg-green-500",
};

export const LinearProgress60 = Template.bind({});
LinearProgress60.args = {
  currentValue: 60,
  maxValue: 100,
  isLinear: true,
  backgroundColor: "bg-gray-200",
  progressColor: "bg-green-500",
};

// Circular progress bar stories
export const CircularProgress30 = Template.bind({});
CircularProgress30.args = {
  currentValue: 30,
  maxValue: 100,
  isLinear: false,
  backgroundColor: "bg-gray-200",
  progressColor: "bg-green-500",
};

export const CircularProgress60 = Template.bind({});
CircularProgress60.args = {
  currentValue: 60,
  maxValue: 100,
  isLinear: false,
  backgroundColor: "bg-gray-200",
  progressColor: "bg-green-500",
};
