module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["plugin:@typescript-eslint/recommended"],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],

  rules: {
		"consistent-return": "error", // return try catch
    "@typescript-eslint/no-unused-vars": "warn", // variable not read file
    "@typescript-eslint/semi": ["warn", "always"], // ;;;;;;
    "@typescript-eslint/no-var-requires": "off", // use import and const require
    "@typescript-eslint/quotes": "warn", // """"""""
		"no-console": ["warn", { allow: ["error", "info"] }], // error console
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }], // ++
		"linebreak-style": "off", // enter windows and mac
		camelcase: ["error", { properties: "never", ignoreDestructuring: false, ignoreImports: false, ignoreGlobals: false }], // camelcase rule
		"no-undef": "error",
		"no-unused-expressions": "off",
		"no-else-return": "error", // return after if
    quotes: ["error", "double"], // ""
		"max-len": "off", // length row
		semi: ["warn", "always"], // ;
		"no-tabs": "off", // off error tab
		"no-plusplus": "off", // ++
		"object-curly-newline": [0, "always"], // {} new line,
		"operator-linebreak": [0, "after"], // down the line
		"no-unused-vars": "warn", // variable not use
		"no-underscore-dangle": ["error", { allow: ["_create", "_find", "_update", "_id", "_list", "_get", "_exec"] }], // ignore _ or error
		"prefer-template": "warn", // template string
		"one-var": ["off", "always"], // multiple variable
		"one-var-declaration-per-line": ["off", "always"], // multiple variable in 1 line
		"import/no-useless-path-segments": ["off"],
		"no-param-reassign": "off", // param in function assign
		"linebreak-style": "off", // enter windows and mac
		"no-restricted-syntax": "off", // syntax NaN error, syntax for error
		"no-shadow": "error", // duplicate variable in block
		"prefer-arrow-callback": "warn", // use arrow function
		"no-redeclare": "error", // no redeclare variable in block
		"no-duplicate-imports": "error", // duplicate import
  },
};
