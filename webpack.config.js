const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",

  entry: "./script.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "index.html", to: "index.html" },
        { from: "style.css", to: "style.css" },
        { from: "favicon.ico", to: "favicon.ico" },
      ],
    }),
  ],
};