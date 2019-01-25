module.exports = {
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
        "/.git/"
    ],
    testURL: "http://localhost/"
};
