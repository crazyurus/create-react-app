/* eslint-env node */
const path = require('path');
const CracoESBuildPlugin = require('craco-esbuild');
const CracoCSSModulesPlugin = require('craco-css-modules');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');
const isProduction = process.env.NODE_ENV === 'production';
const isAnalysis = process.env.ANALYZE === 'TRUE';

process.env.BUILD_PATH = path.resolve('./dist');
process.env.GENERATE_SOURCEMAP = !isProduction.toString();

module.exports = {
  plugins: [
    {
      plugin: CracoCSSModulesPlugin,
    },
    {
      plugin: CracoESBuildPlugin,
    },
  ],
  style: {
    modules: {
      localIdentName: '[local]--[hash:base64:5]',
      exportLocalsConvention: 'camelCase',
    },
  },
  webpack: {
    alias: {
      '@': path.resolve('./src'),
    },
    plugins: {
      add: [
        new SubresourceIntegrityPlugin({
          hashFuncNames: ['sha256', 'sha512'],
          enabled: isProduction,
        }),
      ].concat(
        isAnalysis ? [new BundleAnalyzerPlugin(), new SpeedMeasurePlugin()] : []
      ),
      remove: ['WebpackManifestPlugin', 'ESLintWebpackPlugin'],
    },
    configure(options) {
      options.output.crossOriginLoading = 'anonymous';
      options.devtool = isProduction ? 'hidden-source-map' : 'cheap-module-source-map';
      options.watchOptions = {
        ignored: /node_modules/,
      };
      options.resolve.extensions = ['.js', '.ts', '.tsx'];

      return options;
    },
  },
};
