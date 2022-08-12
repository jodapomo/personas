# personas

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

## Setup VSCode

1. `F1` + `Remote-Containers: Reopen in Container`
2. `yarn`

If edited the contents of the `.devcontainer` folder

`F1` + `Remote-Containers: Rebuild Container`
or
`F1` + `Remote-Containers: Rebuild and Reopen in Container`

- [Yarn 3 + VSCode](https://yarnpkg.com/getting-started/editor-sdks)

## Packages

### Add

`yarn workspace <workspace> add <package>`

`yarn add <package>`

`yarn add <package> --dev`

### Uninstall

`yarn workspace <workspace> remove <package>`

`yarn remove <package>`

## Node

### Dev

`nodemon -q -L index.ts`

`tsc && concurrently \"tsc --watch\" \"nodemon -q -L dist/index.js\"`
