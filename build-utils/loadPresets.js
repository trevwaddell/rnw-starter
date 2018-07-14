const webpackMerge = require("webpack-merge");

const applyPresets = env => {
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(preset =>
    require(`./presets/webpack.${preset}`)(env)
  );

  return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
