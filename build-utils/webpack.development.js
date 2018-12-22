module.exports = () => ({
  devServer: {
    open: true,
    overlay: true,
    // temp until webpack fixes host check bug
    disableHostCheck: true
  }
});
