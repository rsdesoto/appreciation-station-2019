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
let renderPrevArrow = jest.fn();
let renderNextArrow = jest.fn();

function loadSubject(props = {}) {
  subject = shallow(
    <ThankYouCard
      member={testMember}
      message={testMessage}
      backgroundImage={testBgdImage}
      prevArrow={renderPrevArrow}
      nextArrow={renderNextArrow}
      {...props}
    />
  );
}

describe("ThankYouCard", () => {
  beforeEach(() => {
    loadSubject();
  });

  describe("#render", () => {
    it("matches snapshot", () => {
      expect(subject).toMatchSnapshot();
    });
  });

  describe("#setCanvasSize", () => {
    it("updates the canvas width and height", () => {
      // arrange part, act part, assert part
      // arrange: setting up pre-conditions before you test
      let canvas = {};
      const width = 200;
      const height = 100;

      // act: call the unit you're testing
      // .instance() - comes with enzyme - puts a wrapper around your react component so you can use this.functions
      subject.instance().setCanvasSize(canvas, width, height);

      // assert: what you expect to have happen
      expect(canvas.width).toEqual(width);
      expect(canvas.height).toEqual(height);
    })
  })
});
