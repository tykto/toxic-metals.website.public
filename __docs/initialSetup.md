# Intial Setup

These are the steps used to setup the project.

## SvelteKit

```bash
# Initialise project
npm init svelte@next
```

Replace `@sveltejs/adapter-auto` with `@sveltejs/adapter-static` in the [package.json](../package.json) file, and update each dependency to the latest.

Configure [svelte.config.js](../svelte.config.js) to use `@sveltejs/adapter-static`.

## GIT

Configure [.gitignore](../.gitignore) and [.gitattributes](../.gitattributes) files.

## Code Format

```bash
# Install dev dependencies
pnpm add commitizen cz-conventional-changelog husky lint-staged prettier prettier-plugin-packagejson prettier-plugin-svelte --save-dev
```

Use a pre-commit hook to run **prettier** to format the code.
Use a prepare-commit-msg hook to run **commitizen** for conventional commit messages.

```bash
# Install Husky, and add hooks
npx husky install
npx husky set .husky/pre-commit "./node_modules/.bin/lint-staged"
npx husky set .husky/prepare-commit-msg "exec < /dev/tty && ./node_modules/.bin/cz --hook || true"
```

Configure [.czrc](../.czrc), [.lintstagedrc.json](../.lintstagedrc.json), [.prettierignore](../.prettierignore), [.prettierrc](../.prettierrc) files.

Update the `format` script in the [package.json](../package.json) file to ignore using **.prettierignore** as well as **.gitignore**.

## Testing

```bash
# Install dev dependencies
pnpm add @types/jest jest ts-jest --save-dev
```

Configure the [jest.config.cjs](../jest.config.cjs) file.

Add a `test` script to the [package.json](../package.json) file.

## Tailwind

TODO
