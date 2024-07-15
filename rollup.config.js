import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import html from "@rollup/plugin-html";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import replace from "@rollup/plugin-replace";

const libraryConfig = {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
    postcss(),
  ],
};

const demoConfig = {
  input: "src/main.tsx",
  output: {
    dir: "dist",
    format: "iife",
    name: "App",
    sourcemap: true,
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      "react-dom/client": "ReactDOM",
    },
  },
  external: ["react", "react-dom", "react-dom/client"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    postcss(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    html({
      template: ({ files, publicPath }) => {
        const scripts = (files.js || [])
          .map(
            ({ fileName }) => `<script src="${publicPath}${fileName}"></script>`
          )
          .join("\n");
        const styles = (files.css || [])
          .map(
            ({ fileName }) =>
              `<link href="${publicPath}${fileName}" rel="stylesheet">`
          )
          .join("\n");

        return `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>Overlay Image Gallery</title>
            ${styles}
            <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
            <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
          </head>
          <body>
            <div id="root"></div>
            ${scripts}
          </body>
          </html>
        `;
      },
    }),
  ],
};

export default [libraryConfig, demoConfig];
