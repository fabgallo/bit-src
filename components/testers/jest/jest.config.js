import "identity-obj-proxy";
import "enzyme-to-json/serializer";

module.exports = {
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/.git/"
    ],
    testURL: "http://localhost/",
    setupFiles: [
        `${__dirname}/jest.setup.js`
    ]
};
