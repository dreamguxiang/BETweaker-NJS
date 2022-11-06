import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import json from "@rollup/plugin-json";

export default {
  input: "src/main.ts",
  output: {
    file: "dist/BETweaker.js",
    format: "iife",
  },
  plugins: [
    typescript({
      outDir: "./dist",
    }),
    commonjs({ extensions: [".js", ".ts"] }),
    json(),
    resolve({ browser: true })
  ]
};