import type { Meta, StoryObj } from '@storybook/react';

import Rating from '../../components/Rating/rating';

const meta = {
  title: 'Examples/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    halfRating: false,
    disabled: true,
    ratingIcon: "star",
    startingRating: 3
  }
};

export const StarRating: Story = {
  args: {
    halfRating: false,
    disabled: false,
    ratingIcon: "star",
    startingRating: 1
  }
};

export const HeartRating: Story = {
  args: {
    halfRating: false,
    disabled: false,
    ratingIcon: "heart",
    startingRating: 1
  }
};