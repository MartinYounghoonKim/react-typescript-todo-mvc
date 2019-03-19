const path = require("path");

module.exports = {
  extends: ["airbnb"],
  // parser: "babel-eslint",
  parser: "typescript-eslint-parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    jsx: true,
    useJSXTextNode: true
  },
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  globals: {
    TMON: true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".tsx"] }],
    // airbnb eslint 규칙을 그대로 가져왔습니다.
    // 그리고 devDependencies 를 사용할 패턴을 새롭게 등록합니다.
    //https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L71
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**", // tape, common npm pattern
          "tests/**", // also common npm pattern
          "spec/**", // mocha, rspec-like pattern
          "**/__tests__/**", // jest pattern
          "**/__mocks__/**", // jest pattern
          "test.{js,jsx}", // repos with a single test file
          "test-*.{js,jsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{js,jsx}", // tests where the extension or filename suffix denotes that it is a test
          "**/jest.config.js", // jest config
          "**/jest.setup.js", // jest setup
          "**/vue.config.js", // vue-cli config
          "**/webpack.config.js", // webpack config
          "**/webpack.config.*.js", // webpack config
          "**/rollup.config.js", // rollup config
          "**/rollup.config.*.js", // rollup config
          "**/gulpfile.js", // gulp config
          "**/gulpfile.*.js", // gulp config
          "**/Gruntfile{,.js}", // grunt config
          "**/protractor.conf.js", // protractor config
          "**/protractor.conf.*.js", // protractor config
          "scripts/**", // npm scripts
          "webpack/**", // webpack config
          "gulp/**", // gulp config
          "postcss.config.js" // postcss config
        ],
        optionalDependencies: false
      }
    ]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: path.resolve(__dirname, "webpack/config.core.js")
      }
    }
  }
};
