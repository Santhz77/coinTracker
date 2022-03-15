const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'images/[hash][ext][query]'
  },

  devtool: "eval-source-map",
  devServer: {
    contentBase: "./dist",
  },

  module: {
    rules: [
      // {
      //   test:  /\.(scss|css)$/,
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     "style-loader",
      //     // Translates CSS into CommonJS
      //     "css-loader",

      //     // Compiles Sass to CSS
      //     "sass-loader",
      //   ],
      // },

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

            {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(gif|png|jpe?g)$/,
        type: 'asset/resource'

        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       name: "[name].[ext]",
        //       outputPath: "assets/images/",
        //     },
        //   },
        // ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html",
      filename: "index.html",
    }),

    new MiniCssExtractPlugin(),
  ],
};
