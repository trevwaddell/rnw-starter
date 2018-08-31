module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "react-native-web",
      {
        commonjs: true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "^react-native$": "react-native-web"
        }
      }
    ]
  ]
};
