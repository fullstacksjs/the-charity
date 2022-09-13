# The Charity Frontend

## Prerequisite:

- [git][git] >= 2
- [volta][volta] >= 1

## Setup:

After you've made sure to have the correct things (and versions) installed just
run:

```bash
npm install
```

## Envs

- `APP_GRAPHQL_SCHEMA_URL`: a valid url string for graphql path.
- `API_PROXY_TARGET`: the API target proxy URL for the dev environment.

> Note: if you want add a new environment variable you should prefix it with
> `APP_`.

# Scripts:

## Running:

To start the app first set the envs as described in the (envs section)[#Envs]
then run:

```bash
npm install
npm run dev
```

### Build:

To build the app just run:

```bash
npm run build
```

## Lint:

To run the linter to auto-fix all the problems run:

```bash
npm run lint
```

## Test:

To run the unit tests run:

```bash
npm run test
```

> If you're using [vscode][vscode] like me you can install [vitest
> extension][vitest-extension] to make your life easier, after installing it
> just read it's documentation on the extension description to get started

## Find Spelling Errors

To find spelling errors just run

```bash
npm run spell
```

And if you wanted to add a new word so that it won't count as spelling error,
just add it to the `.cspell/charity.txt` and separate with a new line

> Note: These two (linting and finding spelling errors) are run automatically on
> each commit and the commit won't be done if there's anything wrong, even for
> the commit messages, so be careful what you write as a commit message :)

[git]: https://git-scm.com/
[nodejs]: https://nodejs.org/en/
[volta]: https://volta.sh/
[npm]: https://www.npmjs.com/
[vitest-extension]:
  https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer
[vscode]: https://code.visualstudio.com/
