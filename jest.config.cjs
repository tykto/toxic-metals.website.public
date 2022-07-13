const fs = require('fs');
const json5 = require('json5');
const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = json5.parse(fs.readFileSync('tsconfig.json', 'utf-8'));

module.exports = {
  preset: 'ts-jest',
  passWithNoTests: true,
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths??{}, { prefix: '<rootDir>/' }),
    // Workaround: https://stackoverflow.com/a/54117206
    '^lodash-es$': 'lodash',
  },
};
