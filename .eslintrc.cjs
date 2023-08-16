module.exports = {
    root: true,
    env: { browser: true, es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'
    ],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true
            },
        ],
        "react/no-unused-state": "error",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "semi": [
            "warn",
            "never"
        ],
        "prefer-const": [
            "warn",
            {
                "destructuring": "any",
                "ignoreReadBeforeAssign": false
            }
        ],
        "indent": [
            "warn",
            4
        ],
        "max-len": [
            "error",
            {
                "code": 240
            }
        ]
    },
    settings: {
        react: {
            version: "18.0.0"
        }
    }
}
