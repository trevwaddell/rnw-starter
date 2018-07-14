module.exports = () => ({
  devtool: "source-map",
  output: {
    filename: "[name].[chunkhash].js"
  }
});
