const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 5000,
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/assets/sass/prepend.scss";
        `,
      },
    },
  },
});
