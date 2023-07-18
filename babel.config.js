module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [["inline-dotenv"], ["react-native-reanimated/plugin"]],
    presets: ["babel-preset-expo"],
  };
};
