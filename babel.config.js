module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".js",
          ".ts",
          ".tsx",
          ".json",
        ],
        alias: {
          "@assets": "./assets",
          "@types": "./src/types",
          "@theme": "./src/theme",
          "@utils": "./src/utils",
          "@hooks": "./src/hooks",
          "@screens": "./src/screens",
          "@components": "./src/components",
          "@routes": "./src/routes"
        }
      }
    ]
  ]
  };
};
