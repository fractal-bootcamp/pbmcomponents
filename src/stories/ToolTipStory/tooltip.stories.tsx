import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from '../../components/ToolTip/tooltip';

const meta = {
  title: 'Examples/ToolTip',
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

const btn = () => {
  return (
    <div className="flex justify-center align-middle">
      <button className="border border-black">Hover over me</button>
    </div>
  )
}

export const HoverTop: Story = {
  args: {
    children: btn(),
    position: "top",
    trigger: "hover",
    content: "This is a tooltip. It hovers above.",
    delay: 200
  }
};

export const HoverBottom: Story = {
  args: {
    children: btn(),
    position: "bottom",
    trigger: "hover",
    content: "This is a tooltip. It hovers below.",
    delay: 200
  }
};

export const HoverLeft: Story = {
  args: {
    children: btn(),
    position: "left",
    trigger: "hover",
    content: "This is a tooltip. It hovers left.",
    delay: 200
  }
};

export const HoverRight: Story = {
  args: {
    children: btn(),
    position: "right",
    trigger: "hover",
    content: "This is a tooltip. It hovers right.",
    delay: 200
  }
};

export const FocusTop: Story = {
  args: {
    children: btn(),
    position: "top",
    trigger: "focus",
    content: "This is a tooltip. It focuses above.",
    delay: 200
  }
};

export const FocusBottom: Story = {
  args: {
    children: btn(),
    position: "bottom",
    trigger: "focus",
    content: "This is a tooltip. It focuses below.",
    delay: 200
  }
};

export const FocusLeft: Story = {
  args: {
    children: btn(),
    position: "left",
    trigger: "focus",
    content: "This is a tooltip. It focuses left.",
    delay: 200
  }
};

export const FocusRight: Story = {
  args: {
    children: btn(),
    position: "right",
    trigger: "focus",
    content: "This is a tooltip. It focuses right.",
    delay: 200
  }
};

export const Delayed: Story = {
  args: {
    children: btn(),
    position: "bottom",
    trigger: "hover",
    content: "This is a tooltip. It is delayed by 1000ms.",
    delay: 1000
  }
};

