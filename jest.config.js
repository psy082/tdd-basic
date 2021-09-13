module.exports = async () => ({
    moduleFileExtensions: [
        "js",
        "mjs"
    ],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.mjs$": "babel-jest"
    },
    testRegex: "((\\.|/*.)(test))\\.js?$",
})