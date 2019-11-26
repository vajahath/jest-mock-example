// this feature we want to test

const { barExternal, fooExternal } = require("./external-function");

function myFeature() {
  console.log("running my feature");

  barExternal();
  fooExternal();
}

module.exports = { myFeature };
