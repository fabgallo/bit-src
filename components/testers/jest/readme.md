# A testing environment for React components using Jest
 * Bit's Jest testing environment for components
 * Based on the official [Bit's Jest tester](https://bitsrc.io/bit/envs/testers/jest?version=0.0.35) v0.0.35
 * Modified to avoid `SecurityError: localStorage is not available for opaque origins` by adding `testURL: "http://localhost/"` in `jest.config.js`
 * Added `enzyme`, , and `enzyme-to-json/serializer`

## How to use?
Import the environment
```bash
bit import upchain.utils/testers/jest -t
```
