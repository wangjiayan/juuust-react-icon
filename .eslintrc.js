// 在根目录新建 .eslintrc.js，并添加以下代码

module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',  // 解析器
    sourceType: 'module',
    ecmaVersion: 12
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',  // eslint
    'plugin:prettier/recommended', // plugin-prettier
    'plugin:react/recommended'
  ],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error'
  }
}
