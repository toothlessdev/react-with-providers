import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";

export default [
    {
        input: "src/index.tsx",
        output: [
            {
                file: "dist/cjs/index.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                dir: "dist/esm",
                format: "esm",
                sourcemap: true,
                preserveModules: true,
            },
        ],
        plugins: [
            commonjs(),
            nodeResolve(),
            peerDepsExternal(),
            typescript({ tsconfig: "./tsconfig.json" }),
            babel({ babelrc: "./babel.config.json", babelHelpers: "bundled" }),
        ],
    },

    {
        input: "dist/esm/index.d.ts",
        output: [
            {
                file: "dist/index.d.ts",
                format: "esm",
            },
        ],
        plugins: [dts()],
    },
];
