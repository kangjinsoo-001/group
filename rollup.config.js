import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";
import html, { makeHtmlAttributes } from "@rollup/plugin-html";

const production = !process.env.ROLLUP_WATCH;
const hash = Math.random().toString(36).slice(2, 7);

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "start", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

const htmlOptions = {
  meta: [
    { charset: "utf-8" },
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  ],
  title: "Document",
  template: async ({ files, meta, title }) => {
    const script = (files.js || [])
      .map(({ fileName }) => {
        return `<script defer src='/${fileName}'></script>`;
      })
      .join("\n");

    const metas = meta
      .map((input) => {
        const attrs = makeHtmlAttributes(input);
        return `<meta${attrs}>`;
      })
      .join("\n");

    const css = `<link rel="stylesheet" href="${
      production ? `/assets.${hash}.css` : "/assets.css"
    }" />`;

    return `
      <!DOCTYPE html>
        <html lang="en">
          <head>
            ${metas}
            <title>${title}</title>
            <link rel="icon" type="image/png" href="/favicon.png" />
            ${css}
            ${script}
          </head>
          <body></body>
        </html>
      `;
  },
};

export default {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: production
      ? `public/build/bundle.${hash}.js`
      : "public/build/bundle.js",
  },
  plugins: [
    svelte(require("./svelte.config")),
    scss({
      output: production
        ? `public/build/assets.${hash}.css`
        : "public/build/assets.css",
      outputStyle: "compressed",
      watch: ["src"],
    }),
    // we'll extract any component CSS out into
    // a separate file - better for performance
    // css({ output: "bundle.css" }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),
    html(htmlOptions),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
