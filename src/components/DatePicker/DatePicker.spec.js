import React from "react";
import { shallow } from "enzyme";
import DatePicker from "./index";
import { ArrowLeft, ArrowRight } from "./icons";

describe("<DatePicker />", () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      date: new Date("10/21/2018")
    };
    wrapper = shallow(<DatePicker {...props} />);
  });

  it("renders as expected", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
