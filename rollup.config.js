import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss'
import cjs from '@rollup/plugin-commonjs';

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
        sourcemap: true
      },
    ],
    plugins: [
      cjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      external(),
      resolve(),
      copy({
        targets: [
          {
            src: "src/styles/assets/",
            dest: "dist/",
          },
        ]
      }),
      postcss({
        modules: false,
        extract: 'index.css',
        minimize: false
      }),
      url()
    ]
  }
];
