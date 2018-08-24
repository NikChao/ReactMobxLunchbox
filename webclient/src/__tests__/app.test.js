import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../app";

configure({ adapter: new Adapter() });

describe("App test suite", function() {
  it("Mounts without an issue", function() {
      const app = mount(<App />);
  });
});
