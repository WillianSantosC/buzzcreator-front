const config = {
  staticDirs: ["../public"],
  stories: ["../src/components/**/stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};
export default config;
