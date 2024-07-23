import React from "react";
import {
  Size,
  Shape,
  Labels,
  EventMarker,
  EmojiSet,
  EmojiType,
  TimeLineProps,
  Event,
  DefaultTimeLinePoint,
  DefaultTimelineLineProps,
} from "../../../shared/shared.ts";

// Example usage in a component
const EventMarkerComponent: React.FC<EventMarker> = ({
  shape,
  color,
  size,
  labels,
  customLabels = [],
}) => {
  const allLabels = [...(labels || []), ...customLabels];

  return (
    <div style={{ color, fontSize: size }}>
      <div>Shape: {shape}</div>
      <div>Labels: {allLabels.join(", ")}</div>
    </div>
  );
};

// Example usage in a form to add custom labels
const AddLabelForm: React.FC<{ onAddLabel: (label: string) => void }> = ({
  onAddLabel,
}) => {
  const [newLabel, setNewLabel] = React.useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (newLabel) {
      onAddLabel(newLabel);
      setNewLabel("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newLabel}
        onChange={(e) => setNewLabel(e.target.value)}
        placeholder="Add a custom label"
      />
      <button type="submit">Add Label</button>
    </form>
  );
};
