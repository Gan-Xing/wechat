// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = [
  // UMD Configuration
  {
    entry: "./src/index.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "index.umd.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        name: "utils",
        type: "umd",
      },
      globalObject: "this",
    },
  },
  // CommonJS Configuration
  {
    entry: "./src/index.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "index.cjs.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        type: "commonjs2",
      },
    },
  },
  // ES Module Configuration
  {
    entry: "./src/index.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "index.esm.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        type: "module",
      },
    },
    experiments: {
      outputModule: true,
    },
  },
];
