# electron-mikro-orm-example-app

An example app integrating Electron.js with Mikro-ORM. The Electron.js app is scaffolded using [electron-vite](https://electron-vite.org/guide/#scaffolding-your-first-electron-vite-project).

MikroORM uses so called [MetadataProvider](https://mikro-orm.io/docs/metadata-providers) to get necessary type information about our entities' properties. In this project we use `TsMorphMetadataProvider` as metadata provider, its process can be performance heavy and time-consuming. For this reason, metadata cache is automatically generated and stored inside `./temp` folder to JSON files. [^1]

However, in Electron.js the app gets bundled using Vite into a single JavaScript file, therefore we need to deploy only the compiled output, without TS source files at all. In order to do that, we genrate cache bundle file which can be used together with `GeneratedCacheAdapter`.

In order to create new migrations you need to follow these steps:

## How to create a new migration

1. Generate new metadata cache (This command will generate new metadata json file in the `temp` folder located in the project root)

```bash
yarn cache:generate
```

2. Generate a new migration

```bash
yarn migration:create
```

## How to create initial migration

1. Remove existing migrations by deleting your `migrations` folder
2. Ensure you drop the existing database if it was previously created
3. Remove or comment out the import of `metadata.json` from `mikro-orm-shared.config.ts` if you haven't created your first metadata cache yet.
4. Generate new metadata cache

```bash
yarn cache:generate
```

5. Generate the initial migration

```bash
yarn migration:create-init
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

---

If you have any questions or suggestions, please feel free to open a new issue.

I would appreciate a :star: if this repository has been helpful to you in any way.

[^1]: [Metadata cache](https://mikro-orm.io/docs/metadata-cache)
