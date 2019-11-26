const path = require("path");

const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const NonJsEntryCleanupPlugin = require("./build/nonJsEntry");

const {
  context,
  entry,
  outputFolder,
  publicFolder
} = require("./build/config");

const getPublicPath = require("./build/publicPath");

module.exports = options => {
  return {
    mode: "production",
    context: path.resolve(context),
    entry: {
      "styles/main": entry.styles,
      "scripts/main": entry.scripts
    },
    output: {
      path: path.resolve(outputFolder),
      publicPath: getPublicPath(publicFolder),
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)\/(?!(dom7|ssr-window|swiper)\/).*/,
          use: [{ loader: "babel-loader" }]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            ...[MiniCssExtractWebpackPlugin.loader],
            { loader: "css-loader" },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss"
              }
            },
            { loader: "resolve-url-loader" },
            {
              loader: "sass-loader",
              options: { sourceMap: true }
            }
          ]
        },
        {
          test: /\.(ttf|otf|eot|woff2?|png|jpe?g|gif|svg|ico|mp4|webm)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractWebpackPlugin({
        filename: "[name].css"
      }),
      new NonJsEntryCleanupPlugin({
        context: "styles",
        extensions: "js",
        includeSubfolders: true
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin(
        [
          {
            from: path.resolve(`${context}/**/*`),
            to: path.resolve(outputFolder)
          }
        ],
        {
          ignore: ["*.js", "*.ts", "*.scss", "*.css"]
        }
      )
    ]
  };
};
