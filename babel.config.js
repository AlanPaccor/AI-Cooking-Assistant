module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
    ],
    plugins: [
      // v4 often needs reanimated plugin listed last
      "react-native-reanimated/plugin", 
    ],
  };
};