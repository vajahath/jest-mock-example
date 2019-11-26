# [Jest](https://jestjs.io/) mock example

The repo it self is an example.

- Let the external module be `external-function.js`
- The feature we want to test: `feature.js`
- Test for feature: `feature.spec.js`

## Usage

- clone the repo
- `npm i`
- `npm test`

### Output

```sh
➜  test npm test

> jest-mock-example@1.0.0 test /home/xxx/test
> jest

 PASS  ./feature.spec.js
  ✓ testing my feature (4ms)

  console.log feature.js:6
    running my feature

  console.log feature.spec.js:9
    mocked bar

  console.log feature.spec.js:6
    mocked foo

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.924s, estimated 1s
Ran all test suites.
➜  test
```

## Licence

MIT
