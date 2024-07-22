import React from "react";
import { Meta, StoryFn as Story } from "@storybook/react";
import {
  Button,
  EnableDisableButtons,
  LoadingButton,
  ToolTipOnHover,
} from "./Button";
import { ButtonProps } from "../button/Button";

// Meta configuration for the storybook
const meta: Meta = {
  title: "Components/Buttons",
  component: Button,
};

export default meta;

// Stories for Button with primary style
const TemplatePrimary: Story<ButtonProps> = (args) => <Button {...args} />;
export const Primary = TemplatePrimary.bind({});
Primary.args = {
  label: "Primary Button",
  primary: true, // Set primary to true
};

// Stories for Button with secondary style
const TemplateSecondary: Story<ButtonProps> = (args) => <Button {...args} />;
export const Secondary = TemplateSecondary.bind({});
Secondary.args = {
  label: "Secondary Button",
  primary: false, // Set primary to false
};

// Stories for EnableDisableButtons
const TemplateEnableDisable: Story = () => <EnableDisableButtons />;
export const EnableDisable = TemplateEnableDisable.bind({});

// Stories for LoadingButton
const TemplateLoading: Story = () => <LoadingButton />;
export const Loading = TemplateLoading.bind({});

// Stories for ToolTipOnHover
const TemplateToolTip: Story = () => <ToolTipOnHover />;
export const ToolTip = TemplateToolTip.bind({});
