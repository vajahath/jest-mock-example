const { myFeature } = require("./feature");

jest.mock("./external-function", () => {
  return {
    fooExternal() {
      console.log("mocked foo");
    },
    barExternal() {
      console.log("mocked bar");
    }
  };
});

test("testing my feature", () => {
  myFeature();
});
