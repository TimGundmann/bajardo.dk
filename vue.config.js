const webpack = require("webpack");
const { defineConfig } = require('@vue/cli-service')
const VueI18nPlugin = require('@intlify/unplugin-vue-i18n/vite');
const meta = require('vue-router');

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
