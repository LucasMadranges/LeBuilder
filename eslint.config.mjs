import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

const isProd = process?.env?.NODE_ENV === 'production';

export default [
  // Fichiers à ignorer globalement
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.github/**',
      '*.md',
      '*.sql',
      'package-lock.json',
      '.idea/**',
      '.husky/**',
      '**/.next/**', // fix: ignorer correctement .next
    ],
  },

  // Base commune JS/TS
  {
    files: ['**/*.{js,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.node,
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      '@typescript-eslint': tsPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      // Qualité
      'no-console': isProd ? 'warn' : 'off',
      'no-debugger': isProd ? 'warn' : 'off',
      'no-undef': 'error',

      // Imports
      'unused-imports/no-unused-imports': 'error',

      // Variables
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true },
      ],

      // TS recommandé
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],

      // Style via Prettier
      'prettier/prettier': 'error',
    },
  },

  // Scripts à la racine (config / tooling)
  {
    files: ['*.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.node,
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },

  // Apps (Next.js / Expo React Native)
  {
    files: ['apps/*/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      // Ajoute les globals browser pour éviter no-undef sur alert, window, etc.
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': isProd ? 'warn' : 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // Prettier en dernier
  prettierConfig,
];
