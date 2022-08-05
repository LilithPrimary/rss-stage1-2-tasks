module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ["@typescript-eslint", "import"],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'airbnb-typescript/base'
            ],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],
}