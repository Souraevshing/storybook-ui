import { shallow } from "enzyme";
import React from "react";
import App from "../App";

describe("Initial App Component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders welcome message", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Welcome to Story Book Components :)</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});
