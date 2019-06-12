import React from "react";
import { render, cleanup, fireEvent, expectExport } from "@testing-library/react";

import AppreciationStation from "../AppreciationStation";

const mockThankYous = [
  {
    member: {
      name: "Test member 1",
      isMentor: true
    },
    message: {
      text: "Thank you {NAME} for being a great mentor!"
    },
    backgroundImage: {
      file: {
        url: "http://testurl1.com"
      }
    }
  },
  {
    member: {
      name: "Test member 2",
      isMentee: true
    },
    message: {
      text: "Thank you {NAME} for being a great mentee!"
    },
    backgroundImage: {
      file: {
        url: "http://testurl2.com"
      }
    }
  },
  {
    member: {
      name: "Test member 3",
      isSpeaker: true
    },
    message: {
      text: "Thank you {NAME} for being a great speaker!"
    },
    backgroundImage: {
      file: {
        url: "http://testurl3.com"
      }
    }
  },
  {
    member: {
      name: "Test member 4",
      isSponsor: true
    },
    message: {
      text: "Thank you {NAME} for being a great sponsor!"
    },
    backgroundImage: {
      file: {
        url: "http://testurl4.com"
      }
    }
  }
];

// automatically unmount and cleanup DOM after the test is finished.
// React testing library actually renders the DOM -- need to clean up every time
afterEach(cleanup);

describe("AppreciationStation", () => {
  describe("render", () => {
    it("renders a thank you card by default", () => {
      // const queries = render(<AppreciationStation thankYous={mockThankYous} />)
      // react testing library will return an object with queries so you can look into the DOM to find things
      // will often see `const { getByLabelText } = render(<AppreciationStation thankYous={mockThankYous} />)`
      const { getByLabelText } = render(
        <AppreciationStation thankYous={mockThankYous} />
      );

      const thankYouCanvas = getByLabelText(/thank you test member/i)
      expect(thankYouCanvas).not.toBeNull();
    })
  })

  describe("clicking next", () => {
    it("displays the next thank you card", () => {
      // test what the user will see
      const { getByLabelText, getByAltText } = render(
        <AppreciationStation thankYous={mockThankYous} />
      );

      const nextButton = getByAltText(/go to next/i)
      fireEvent.click(nextButton);

      const thankYouCanvas = getByLabelText(/thank you test member 2/i);
      expect(thankYouCanvas).not.toBeNull();
    })
  })
})





