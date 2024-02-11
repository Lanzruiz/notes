[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![David](https://img.shields.io/david/iamfreee/typescript-api-template.svg)]()


# Notes API Typescript

Custom API description here.

Already configured:

- `typescript`: compiles to a `build` folder and has a task to watch and compile, comes with some @types in the `package.json`

## Requirements
- `node` (using v8)
- `yarn` (faster than npm)

## Instructions to develop
- `yarn install` - installs the dependencies
- `yarn start` - watch's `.ts` files and compiles to `build` folder then the server is reloaded at `localhost:3000`
- `yarn test` - runs the tests with jest (`typescript` tests)
- `yarn build` - compiles `.ts` files to `build` folder
- `yarn serve` - starts the app (`node build/bin/server.js`)
- `yarn prettier` - runs prettier to prettify the code (also runs before each commit)

## API End Points

- POST `/notes/` - add notes 
- GET  `/notes/` - fetch all data notes
- GET  `/notes/:id` - fetch specific notes by id
- UPDATE `/notes/:id` - update data in specific id
- DELETE `/notes/:id` - delete the specific note
         