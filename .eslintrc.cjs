module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "browser": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "prettier",
        "react-hooks",
        "@typescript-eslint"
    ],
    "overrides": [
        {
            "files": [
                ".ts",
                ".jsx",
                ".tsx",
                "**/*.test.ts",
                "**/*.test.tsx",
                "**/*.spec.tsx"
            ]
        }
    ],
    "rules": {
        "import/order": [
            "error",
            {
                "newlines-between": "always",
                "pathGroupsExcludedImportTypes": [
                    "react"
                ],
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                },
                "groups": [
                    "builtin",
                    "external",
                    "parent",
                    "sibling",
                    "index"
                ],
                "pathGroups": [
                    {
                        "pattern": "react",
                        "group": "external",
                        "position": "before"
                    }
                ]
            }
        ],
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "consistent-return": "off",
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            },
            {
                "blankLine": "always",
                "prev": [
                    "const",
                    "let",
                    "var"
                ],
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": [
                    "const",
                    "let",
                    "var"
                ],
                "next": [
                    "const",
                    "let",
                    "var"
                ]
            }
        ],
        "no-shadow": "off",
        "no-debugger": "error",
        "no-unused-vars": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
        "no-magic-numbers": "off",
        "no-use-before-define": "off",
        "no-param-reassign": [
            "error",
            {
                "props": true,
                "ignorePropertyModificationsFor": [
                    "state",
                    "self"
                ]
            }
        ],
        "default-param-last": "off",
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".jsx",
                    ".tsx"
                ]
            }
        ],
        "react/function-component-definition": [
            2,
            {
                "namedComponents": "arrow-function",
                "unnamedComponents": "arrow-function"
            }
        ],
        "react/jsx-props-no-spreading": [
            0,
            {
                "html": "ignore"
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "error"
        ],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                "allowExpressions": true,
                "allowedNames": [
                    "ignoredFunctionDeclaration"
                ]
            }
        ]
    },
    settings: {
      'import/resolver': {
        alias: true
      }
    }
}
