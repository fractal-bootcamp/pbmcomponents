import React from "react";
import SingleFileUploader from "./SingleFileUploader"; // Adjust the import path as needed

export default {
  title: "Components/SingleFileUploader",
  component: SingleFileUploader,
};

const Template = (args) => <SingleFileUploader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithFile = Template.bind({});
WithFile.args = {
  // You can add arguments here if needed
};
