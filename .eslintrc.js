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
    "react/react-in-jsx-scope": "off"
  }
}
