import type { Meta, StoryObj } from '@storybook/react';

import Alert from '../../components/Alert/alert';

const meta = {
  title: 'Examples/Alert',
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoAlert: Story = {
  args: {
    message: "This is an info alert",
    dismiss: "manual",
    type: "Info"
  }
};

export const InfoTimedAlert: Story = {
  args: {
    message: "This is a timed info alert",
    dismiss: "auto",
    dismissTime: 7000,
    type: "Info"
  }
};

export const ErrorAlert: Story = {
  args: {
    message: "This is an error alert",
    dismiss: "manual",
    type: "Error"
  }
};

export const ErrorTimedAlert: Story = {
  args: {
    message: "This is a timed error alert",
    dismiss: "auto",
    dismissTime: 7000,
    type: "Error"
  }
};

export const WarningAlert: Story = {
  args: {
    message: "This is a warning alert",
    dismiss: "manual",
    type: "Warning"
  }
};

export const WarningTimedAlert: Story = {
  args: {
    message: "This is a timed warning alert",
    dismiss: "auto",
    dismissTime: 7000,
    type: "Warning"
  }
};

export const SuccessAlert: Story = {
  args: {
    message: "This is a success alert",
    dismiss: "manual",
    type: "Success"
  }
};

export const SuccessTimedAlert: Story = {
  args: {
    message: "This is a timed success alert",
    dismiss: "auto",
    dismissTime: 7000,
    type: "Success"
  }
};

