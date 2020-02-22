import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { withReadme } from "storybook-readme";
import centered from "@storybook/addon-centered/react";

import README from "./README.md";
import ButtonColorPicker from "../ButtonColorPicker";

const stories = storiesOf("ButtonColorPicker", module)
  .addDecorator(withReadme(README))
  .addDecorator(centered);

stories.add("With title", () => {
  const [color, setColor] = useState("red");
  return (
    <ButtonColorPicker
      title="teste"
      color={color}
      onChange={color => {
        setColor(color.rgb);
      }}
    />
  );
});
