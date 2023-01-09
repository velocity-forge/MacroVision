# Forum One Next.js Starter App

This is a starter app for [Next.js](https://nextjs.org/) (bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)) that includes the following features:
* [TypeScript](https://www.typescriptlang.org/)
* [Emotion](https://emotion.sh/docs/introduction)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)

Note that Next v11 comes with the following installed already:
* [Webpack v5](https://webpack.js.org/concepts/)
* [Babel v7](https://babeljs.io/docs/en/)

## Getting Started

## Initial Setup


1. Go to the `services/app` directory.
    ```bash
    cd services/app
    ```

1. Ensure that you are using the proper Node version for this app. We currently use v16. Assuming you have [nvm](https://github.com/nvm-sh/nvm) installed locally, you can simply run:
    ```bash
    nvm use
    ```
    This will set your Node version to match the `.nvmrc` file.

1. Next, install packages for local development:
    ```bash
    npm ci
    ```

1. Next, copy `.env.local.example` to `.env.local` and define any local environment variables you need for local development.
    ```bash
    cp .env.local.example .env.local
    ```

1. Now you are ready to start up the app. To do that, run `ddev start` from within the `services/app` directory:
    ```bash
    ddev start
   ```

## Starting and stopping the project

After following the "Initial Setup" instructions, you can start the local development server for the app by going to the `services/app` directory and running:
```bash
ddev start
```
Open [https://nyu-cdhdb.ddev.site/](https://nyu-cdhdb.ddev.site/) with your browser to see the app. Note that the script will continue to run in your terminal tab. Killing or exiting the script (e.g. `ctrl+C`) will stop the Nextjs app.

To stop `ddev` for the project:
```bash
ddev stop
```

Note that these `ddev` commands _must_ be run in the `services/app` directory.

## Helpful commands

### Monitoring the applications
If you want to monitor the status of `app` or `storybook`. Please use `ddev nextjs monit`

### Restarting a specific service
If you want to restart `storybook` or `app`, please use the following:

`app`
```bash
ddev nextjs restart app
```
`storybook`
```bash
ddev nextjs restart storybook
```

To restart the whole application

```bash
ddev restart
```

### Build production application

```bash
ddev nextjs build
```
Runs `next build`, which builds the production application in the `.next` folder. For more information, see the [Next.js CLI documentation](https://nextjs.org/docs/api-reference/cli#build).

### Start application in production mode

```bash
npm run start
```

Runs `next start`, which starts a Node.js server that supports [hybrid pages](https://nextjs.org/docs/basic-features/pages), serving both statically generated and server-side rendered pages. Note that `npm run build` should be ran first. For more information, see the [Next.js CLI documentation](https://nextjs.org/docs/api-reference/cli#production).

### Export application to static HTML

```bash
ddev nextjs export
```

Runs `next build && next export`. This allows you to export your app to static HTML (exported in the `out` folder), which can be run standalone without the need of a Node.js server. For more information, see the [Next.js Static HTML Export documentation](https://nextjs.org/docs/advanced-features/static-html-export).

### Run linter

```bash
ddev nextjs lint
```

Runs `next lint`, which runs the ESLint command. This is useful to catch lint errors that you might miss during development. For more information, see the [Next.js ESLint documentation](https://nextjs.org/docs/basic-features/eslint).

### Run prettier

#### Prettier check

```bash
ddev nextjs prettier
```

Runs `prettier --check`, which will check that all files within the `pages` and `source` directories use the Prettier code style from `.prettierrc`. This might be redundant with the `lint` script above, since it extends whatever Prettier rules we have set.

#### Prettier write

```bash
ddev nextjs prettier:write
```

Runs `prettier --write`, which will find and fix all prettier issues found within the `pages` and `source` directories. Note that this will automatically overwrite your files.

### Run TypeScript compiler (tsc)

```bash
ddev nextjs tsc
```

Runs `tsc --noEmit`, which will compile the TypeScript code without emitting files. This acts as a TS error check in your CLI. This is useful to catch TS errors that you might miss during development. For more information, see the [TypeScript Compiler (tsc) documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html).

### Scaffold new component

```bash
ddev nextjs component
```
Runs the `lib/component.js` script, which will scaffold a new React or Emotion component,
with the option to include a Storybook story file as well.


## Notes

* Code for the app is currently configured to go into the `pages` directory (for [Next.js pages](https://nextjs.org/docs/basic-features/pages)) and `source` for theming, components, providers, helpers, etc.
* Starting in Next.js v9.4, TypeScript errors do not show up in your browser when running the dev server (i.e. `npm run dev`). However, TS errors will prevent `next build` (i.e. `npm run build`) from running successfully. Be sure to run `npm run lint` and `npm run tsc` before committing and pushing code. This will give you lint and TS errors that will most likely cause your builds to fail.
    * For discussion: should we include a [TS checker in the config](https://github.com/vercel/next.js/issues/12735#issuecomment-629404102)? Note that a Next.js dev warns that [this will greatly slow development](https://github.com/vercel/next.js/issues/12735#issuecomment-629404842).
* The current favicon implementation will probably not display correctly locally in Chrome (v94), but does display correctly in Firefox and Safari. Note that the favicon _does_ display correctly once deployed. Not sure why.


## Helpful tips

### Starting project is slow

If the npm install is running slow you can enable `mutagen`,  to do this:
* In the `.ddev` folder create a file named: `config.mutagen.yaml`
* In the file place: `mutagen_enabled: true`
* Please Restart the project.
**NOTE**: if you run into an issue with problems starting please run `ddev delete -O`.

### Installing npm packages within ddev

If you would want to use `npm`, please do `ddev npm [package]`.

### If the application never starts

To verify that it is working please run: `ddev nextjs monit` and if it is not working as expected please try the following:
* Stop DDev, `ddev stop`
* Remove `node_modules` folder from the `services/app`
* Then restart DDev, `ddev start`


