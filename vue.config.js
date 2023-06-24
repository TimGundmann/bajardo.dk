const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery",
        bootstrap: "bootstrap",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /assets\/js/, // exclude all JS in the assets/js directory
        },
      ],
    },
  },
});
