module.exports = {
  env: {
    "cypress/globals": true,
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'universe',
    'universe/shared/typescript-analysis',
  ],
  overrides: [
      {
          files: [
            '*.ts',
            '*.tsx',
            '*.d.ts'
          ],
          parserOptions: {
            project: './tsconfig.json'
          },
        },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    // project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react'
  ],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    "no-unneeded-ternary": "off",
    "no-useless-return": "off"
  }
}
