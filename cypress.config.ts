import { defineConfig } from "cypress";
import webpackPreprocessor from "@cypress/webpack-preprocessor";
import * as path from "path";

export default defineConfig({
  env: {
    CODE: "69017",
    UPBVIRTUAL_PWD: "*BOWSER**ñoku*82",
    PDIS_LINK: "https://www.upbvirtual.net/upbvirtual/course/view.php?id=28793",
    HW_LINK:
      "https://www.upbvirtual.net/upbvirtual/mod/assign/view.php?id=1013320",
  },

  e2e: {
    setupNodeEvents(on, config) {
      on(
        "file:preprocessor",
        webpackPreprocessor({
          webpackOptions: {
            resolve: {
              extensions: [".ts", ".js"],
            },
            module: {
              rules: [
                {
                  test: /\.ts$/,
                  exclude: /node_modules/,
                  use: "ts-loader",
                },
              ],
            },
          },
          watchOptions: {},
        })
      );
      return config;
    },
    specPattern: "**/*.cy.ts",
  },
});
