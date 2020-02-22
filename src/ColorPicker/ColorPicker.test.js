import React from "react";
import { mount } from "enzyme";

import ColorPicker from "./ColorPicker";

describe("<ColorPicker />", () => {
  it("renders without error", () => {
    const wrapper = mount(<ColorPicker />);
    expect(wrapper).toExist();
  });
});

describe("<ColorPicker />", () => {
  const title = "untrackable_test_title";
  it("renders with title without error", () => {
    const wrapper = mount(<ColorPicker title={title} />);
    expect(
      wrapper.find(`div[testid="color_picker_title_${title}"]`).text()
    ).toEqual(title);
  });
});
