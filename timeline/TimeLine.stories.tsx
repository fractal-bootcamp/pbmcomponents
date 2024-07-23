// src/components/TimeLine.stories.tsx

import React from "react";
import TimeLine from "./TimeLine";
import { Meta } from "@storybook/react";
import {
  Size,
  Shape,
  Labels,
  EmojiType,
  EmojiSet,
  EventMarker,
  TimeLineProps,
  Event,
  DefaultTimeLinePoint,
  DefaultTimelineLineProps,
} from "../../../shared/shared";

export default {
  title: "Components/TimeLine",
  component: TimeLine,
  argTypes: {
    vertical: { control: "boolean" },
    eventMarker: {
      control: "object", // Use object for complex structures like arrays of objects
      description: "Array of EventMarker objects",
    },
    eventDetails: { control: "text" },
    imagesAndIcons: {
      control: "object", // Use object for arrays of strings (if needed, customize with a specific object control)
      description: "Array of image and icon URLs",
    },
    collapsibleGroups: { control: "boolean" },
  },
} as Meta;

// Horizontal Timeline
export const HorizontalTimeline = () => (
  <TimeLine
    vertical={false}
    eventMarker={[
      {
        shape: Shape.Birthday,
        color: "red",
        size: Size.Medium,
        labels: Labels.Important,
      },
      {
        shape: Shape.Milestone,
        color: "blue",
        size: Size.Large,
        labels: Labels.WorkMeeting,
      },
    ]}
    eventDetails="Details about the events."
    imagesAndIcons={[
      "https://es.wikipedia.org/wiki/Dal%C3%A1i_lama#/media/Archivo:Dalai_Lama_1471_Luca_Galuzzi_2007.jpgimage1.png",
      "https://es.wikipedia.org/wiki/Dal%C3%A1i_lama#/media/Archivo:Emblem_of_Tibet.svg",
    ]}
    collapsibleGroups={true}
  />
);

// Vertical Timeline
export const VerticalTimeline = () => (
  <TimeLine
    vertical={true}
    eventMarker={[
      { shape: Shape.NewYearsEve, color: "green", size: Size.Small },
      { shape: Shape.Holidays, color: "purple", size: Size.ExtraLarge },
    ]}
    eventDetails="Details about the events."
    imagesAndIcons={[
      "https://es.wikipedia.org/wiki/Dal%C3%A1i_lama#/media/Archivo:Dalai_Lama_1471_Luca_Galuzzi_2007.jpgimage1.png",
      "https://es.wikipedia.org/wiki/Dal%C3%A1i_lama#/media/Archivo:Emblem_of_Tibet.svg",
    ]}
    collapsibleGroups={true}
  />
);
