module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          root: ['./src'],
          alias: {
            '@features': './src/features',
            '@shared': './src/shared',
            '@entities': './src/entities',
            '@widgets': './src/widgets',
            '@app': './src/app',
            '@pages': './src/pages',
            '@process': './src/process',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
    presets: ['babel-preset-expo'],
  };
};
