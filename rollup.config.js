import { nodeResolve } from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import babel from '@rollup/plugin-babel';
import vuePlugin from "rollup-plugin-vue";
// import typescript from '@rollup/plugin-typescript';
import typescript from "rollup-plugin-typescript2";
import styles from "rollup-plugin-styles";
import css from "rollup-plugin-css-only";
import less from "rollup-plugin-less";
import alias from "@rollup/plugin-alias";
const extensions = [".ts", ".vue", ".js"];

export default {
    input: "src/button/index.ts",
    output: {
        file: "esm/button.js",
        format: "esm",
        sourcemap: false,
    },
    plugins: [
        alias({ entries: [{ find: "@src", replacement: "./src" }] }),
        // A Rollup plugin which locates modules using the Node resolution algorithm, for using third party modules in node_modules
        nodeResolve({
            extensions,
        }),
        // A Rollup plugin to convert CommonJS modules to ES6, so they can be included in a Rollup bundle
        // commonjs(),
        vuePlugin({
            preprocessStyles: true,
        }),
        css({ output: "button.css" }),
        // less({ output: "./esm/button1.css" }),
        // styles({ mode: "extract" }),
        typescript(),
        /*babel({
            babelHelpers: 'bundled',
            extensions
        }),*/
    ],
    external: ["vue"],
};
