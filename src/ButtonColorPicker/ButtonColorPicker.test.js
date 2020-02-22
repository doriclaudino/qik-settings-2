import React from "react";
import { mount } from "enzyme";

import ButtonColorPicker from "./ButtonColorPicker";

describe("<ButtonColorPicker />", () => {
  it("renders without error", () => {
    const wrapper = mount(<ButtonColorPicker />);
    expect(wrapper).toExist();
  });
});

describe("<ButtonColorPicker />", () => {
  it("renders with title without error", () => {
    const wrapper = mount(<ButtonColorPicker title={"teste"} />);
    expect(wrapper).toExist();
  });
});
