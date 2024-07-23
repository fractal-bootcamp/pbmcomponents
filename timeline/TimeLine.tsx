import React from "react";
import {
  Size,
  Shape,
  Labels,
  EventMarker,
  TimeLineProps,
  ModalProps,
  Event,
  DefaultTimeLinePoint,
  DefaultTimelineLineProps,
} from "../../../shared/shared.ts";

const DefaultTimelineLine: React.FC<DefaultTimelineLineProps> = ({
  points,
  vertical,
}) => {
  return (
    <div
      className={`relative flex ${vertical ? "flex-col" : "flex-row"} items-center w-full ${vertical ? "h-full" : "h-8"} bg-white`}
      style={{ minHeight: vertical ? "100px" : "auto" }}
    >
      {points.map((point, index) => (
        <React.Fragment key={index}>
          {/* Line */}
          {index < points.length - 1 && (
            <div
              className={`absolute ${vertical ? "w-1" : "h-1"} ${vertical ? "bg-slategray" : "bg-slategray"}`}
              style={{
                [vertical ? "top" : "left"]: `${point.position}%`,
                [vertical ? "height" : "width"]:
                  `${Math.abs(points[index + 1].position - point.position)}%`,
                [vertical ? "left" : "top"]: "50%",
                transform: vertical ? "translateX(-50%)" : "translateY(-50%)",
              }}
            />
          )}

          {/* Point */}
          <div
            className={`absolute ${vertical ? "bg-green-500 w-4 h-4" : "bg-green-500 w-4 h-4"} rounded-full`}
            style={{
              [vertical ? "top" : "left"]: `${point.position}%`,
              transform: vertical ? "translateY(-50%)" : "translateX(-50%)",
            }}
          />

          {/* Label */}
          <div
            className="absolute text-sm text-gray-700"
            style={{
              [vertical ? "top" : "left"]: `${point.position}%`,
              transform: vertical
                ? "translateY(1rem)"
                : "translateY(-50%) translateX(1rem)",
            }}
          >
            {point.label}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const TimeLine: React.FC<TimeLineProps> = ({
  vertical,
  eventMarker,
  event,
  eventDetails,
  imagesAndIcons,
  collapsibleGroups,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div
        className={`relative ${vertical ? "w-1/2" : "w-full"} max-w-4xl mx-auto p-4 bg-white`}
      >
        <h1 className="text-center mb-4">Hi-Yo!</h1>
        <DefaultTimelineLine
          points={[
            { position: 0, label: "In the beginning..." },
            { position: 50, label: "You are here" },
            { position: 100, label: "...The end" },
          ]}
          vertical={vertical}
        />
      </div>
    </div>
  );
};

export default TimeLine;
