const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  const analyzeBundle = process.argv.indexOf('--analyze-bundle') !== -1;
  config = rewireStyledComponents(config, env);

  if (analyzeBundle) {
    const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html',
    });
  }

  return config;
};
