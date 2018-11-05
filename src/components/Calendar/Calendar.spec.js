import React from "react";
import { shallow } from "enzyme";
import Calendar from "./index";
import { ArrowLeft, ArrowRight } from "./icons";

describe("<Calendar />", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      date: new Date("10/21/2018")
    };
    wrapper = shallow(<Calendar {...props} />);
  });

  it("renders as expected", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
