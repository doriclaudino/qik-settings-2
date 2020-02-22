import React from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import centered from "@storybook/addon-centered/react";

import README from "./README.md";
import Switch from "./Switch";

const stories = storiesOf("Switch", module)
  .addDecorator(withReadme(README))
  .addDecorator(centered);

stories.add("Default", () => {
  return <Switch />;
});

stories.add("With title", () => {
  return <Switch title="teste" />;
});

stories.add("Left text", () => {
  return <Switch title="teste" styles={{ label: { order: 0 } }} />;
});
