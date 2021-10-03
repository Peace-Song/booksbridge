module.exports = {
	'env': {
		'node': true,
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
	],
	'rules': {
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'no-param-reassign': ['error', { 'props': false }],
		'no-redeclare': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off'
	},
	'overrides': [{
		'files': ['*.js'],
		'rules': {
		'semi': [
			'error',
			'always'
		],
		'@typescript-eslint/no-var-requires': 'off'
		}
	}]
};
