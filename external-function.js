// Sample external module.
// These are original functions
// we want to mock.

function fooExternal() {
  console.log("foo-original");
}

function barExternal() {
  console.log("bar-original");
}

module.exports = {
  fooExternal,
  barExternal
};
