import React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import centered from "@storybook/addon-centered/react";

import README from "./README.md";
import Slider from "./Slider";

const stories = storiesOf("Slider", module)
  .addDecorator(withReadme(README))
  .addDecorator(centered);

stories.add("Default", () => {
  return <Slider />;
});

stories.add("With title", () => {
  return <Slider title="teste" />;
});

stories.add("With marks", () => {
  const marks = [
    {
      value: 0,
      label: "0°C"
    },
    {
      value: 20,
      label: "20°C"
    },
    {
      value: 37,
      label: "37°C"
    },
    {
      value: 100,
      label: "100°C"
    }
  ];
  return <Slider marks={marks} styles={{ container: { minWidth: 200 } }} />;
});

stories.add("With marks custom style label display", () => {
  const marks = [
    {
      value: 0,
      label: "0°C"
    },
    {
      value: 20,
      label: "20°C"
    },
    {
      value: 37,
      label: "37°C"
    },
    {
      value: 100,
      label: "100°C"
    }
  ];
  return (
    <Slider
      defaultValue={0}
      title={"temperature °C"}
      marks={marks}
      valueLabelDisplay={"on"}
      styles={{ container: { minWidth: 200 } }}
    />
  );
});
