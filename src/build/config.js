module.exports = {
  context: "src/assets",
  entry: {
    styles: "./styles/main.scss",
    scripts: "./scripts/main.js"
  },
  devtool: "cheap-module-eval-source-map",
  outputFolder: "assets",
  publicFolder: "assets",
  watch: ["../**/*.php"]
};
