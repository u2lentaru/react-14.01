const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry : {
        app: './index.js',
    },
    context: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: 'index.js',
    },
};