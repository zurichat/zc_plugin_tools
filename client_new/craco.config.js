singleSpaApplicationPlugin = require("craco-plugin-single-spa-application");

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  plugins: [
    {
      plugin: singleSpaApplicationPlugin,
      options: {
        orgName: "zuri",
        projectName: "zuri-plugin-tools",
        // entry: "src/index.js", //defaults to src/index.js,
        entry: "src/zuri-zuri-plugin-tools.js", //defaults to src/index.js,
        orgPackagesAsExternal: false, // defaults to false. marks packages that has @my-org prefix as external so they are not included in the bundle
        reactPackagesAsExternal: true, // defaults to true. marks react and react-dom as external so they are not included in the bundle
        externals: [], // defaults to []. marks the specified modules as external so they are not included in the bundle
        minimize: false, // defaults to false, sets optimization.minimize value
      },
    },
  ],
};
