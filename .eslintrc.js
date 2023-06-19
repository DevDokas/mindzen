module.exports = {
  env: {
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
    ecmaVersion: 'latest',
    sourceType: 'module'
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
