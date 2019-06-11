import React from "react";
import { shallow } from "enzyme";
import ThankYouCard from "../ThankYouCard";

let testMember = {
  name: "Test mentor",
  isMentor: true
};

let testMessage = {
  text: "Thank you for being a great mentor, {NAME}!",
  isMentor: true
};

let testBgdImage = {
  file: {
    url: "testUrl"
  },
  maxTextWidth: 0.75,
  textPosition: "topLeft"
};

let subject;
let renderPrevArrow = jest.fn(); // mock functions - sets something just to test
let renderNextArrow = jest.fn();


describe("ThankYouCard", () => {

  describe("#render", () => {
    it("matches snapshot", () => {
      // the first time you render a component, it takes a snapshot. if nothing changed in DOM, these match
      // shallow render API - just use the "shallow" function
      subject = shallow(<ThankYouCard member={testMember}
                          message={testMessage}
                          backgroundImage={testBgdImage}
                          prevArrow={renderPrevArrow}
                          nextArrow={renderNextArrow}
                        />)
      expect(subject).toMatchSnapshot();
    })
  })

})







