import React from "react";
import { mount } from "enzyme";

import Switch from "./Switch";

describe("<Switch />", () => {
  it("renders without error", () => {
    const wrapper = mount(<Switch />);
    expect(wrapper).toExist();
  });
});

describe("<Switch />", () => {
  const title = "untrackable_test_title";
  it("renders with title without error", () => {
    const wrapper = mount(<Switch title={title} />);
    expect(wrapper.find(`p#label-for-switch-${title}`).text()).toEqual(title);
  });
});
