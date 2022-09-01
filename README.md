### Prerequisite

- [git][git] >= 2
- [volta][volta] >= 1
- [node][nodejs] >= 16
- [npm][npm] >= 8

[git]: https://git-scm.com/
[nodejs]: https://nodejs.org/en/
[volta]: https://volta.sh/
[npm]: https://www.npmjs.com/

## Setup

After you've made sure to have the correct things (and versions) installed just
run:

```bash
npm install
```

## scripts

### running:

to run the app just run:

```bash
npm run dev
```

### building

to build the app just run:

```bash
npm run build
```

### linting:

to run the linter to auto-fix all the problems run:

```bash
npm run lint
```

### finding spelling errors

and for finding spelling errors just run

```bash
npm run spell
```

and if you wanted to add a new word so that it won't count as spelling error,
just add it to the `.cspell/charity.txt` and separate with a new line

## Note

note that these two (linting and finding spelling errors) are run automatically
on each commit and the commit won't be done if there's anything wrong

even for the commit messages, so be careful what you write as a commit message
:)
