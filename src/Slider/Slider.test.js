import React from "react";
import { mount } from "enzyme";

import Slider from "./Slider";

describe("<Slider />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Slider />);
    expect(wrapper).toExist();
  });
});

describe("<Slider />", () => {
  const title = "untrackable_test_title";
  it("renders with title without error", () => {
    const wrapper = mount(<Slider title={title} />);
    expect(wrapper.find(`p#label-for-slider-${title}`).text()).toEqual(title);
  });
});
