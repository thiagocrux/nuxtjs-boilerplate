export default {
  '*.{js,jsx,ts,tsx,vue}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `vitest related --run ${filenames.join(' ')}`,
  ],
};
