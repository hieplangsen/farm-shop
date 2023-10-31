/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "@vue/eslint-config-typescript"],
	plugins: ["@typescript-eslint", "vue"],
	root: true,
	parserOptions: {
		ecmaVersion: "latest",
		parser: require.resolve("@typescript-eslint/parser"),
		extraFileExtensions: [".vue"],
		ecmaFeatures: {
			jsx: true
		}
	},
	rules: {
		"consistent-return": "error", 
		semi: [1, "always"],
		quotes: ["error", "double"],
		camelcase: ["error", { properties: "never", ignoreDestructuring: false, ignoreImports: false, ignoreGlobals: false }],
		indent: ["error", "tab", { SwitchCase: 1 }], // tabbed indentation
		"max-len": ["error", { code: 300 }],
		"no-unused-vars": ["warn", { "varsIgnorePattern": "props" }],
		"@typescript-eslint/no-unused-vars": ["warn", { "varsIgnorePattern": "props" }],
		"no-undef": "error",
		"no-unused-expressions": "off",
		"no-console": ["warn", { allow: ["error", "info"] }],
		"prefer-arrow-callback": "warn",
		"no-else-return": "error",
		"no-redeclare": "error",
		"no-duplicate-imports": "error",
		"vue/script-setup-uses-vars": "error",
		"vue/valid-template-root": "error",
		"vue/no-export-in-script-setup": "error",
		"vue/attribute-hyphenation": "off",
		"vue/v-on-event-hyphenation": "off",
		"vue/block-lang": ["error", { script: { lang: "ts" } }],
		"vue/block-order": ["error", { order: ["script[setup]", "template", "style[scoped]"] }],
		"vue/component-api-style": ["error", ["script-setup"]],
		"vue/component-name-in-template-casing": ["error", "PascalCase", { registeredComponentsOnly: true }],
		"vue/component-options-name-casing": ["error", "PascalCase"],
		"vue/custom-event-name-casing": ["error", "camelCase"],
		"vue/define-emits-declaration": ["error", "type-based"],
		"vue/define-macros-order": ["error", { order: ["defineOptions", "defineProps", "defineEmits", "defineSlots"] }],
		"vue/define-props-declaration": ["error", "type-based"],
		"vue/html-button-has-type": ["error", { button: true, submit: true, reset: true }],
		"vue/html-indent": "off",
		"vue/html-self-closing": "off",
		"vue/singleline-html-element-content-newline": ["off"],
		"vue/require-v-for-key": "error",
		"vue/multi-word-component-names": [
			"off",
			{
				ignores: ["default"]
			}
		],
		"vue/max-attributes-per-line": [
			"error",
			{
				singleline: {
					max: 5
				},
				multiline: {
					max: 5
				}
			}
		],
		"vue/no-duplicate-attributes": [
			"error",
			{
				allowCoexistClass: true,
				allowCoexistStyle: true
			}
		],
		"vue/no-unused-components": [
			"error",
			{
				ignoreWhenBindingPresent: true
			}
		],
		"vue/no-use-v-if-with-v-for": [
			"error",
			{
				allowUsingIterationVar: false
			}
		]
	}
};
