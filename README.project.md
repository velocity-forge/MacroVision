# Forum One Next.js Starter App

This is a starter app for [Next.js](https://nextjs.org/) (bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)) that includes the following features:
* [Storybook](https://storybook.js.org)
* [TypeScript](https://www.typescriptlang.org/)
* [PostCSS](https://postcss.org/)
* [ESLint](https://eslint.org/)
* [Stylelint](https://stylelint.io/)
* [Prettier](https://prettier.io/)

Note that Next v14 comes with the following installed already:
* [Webpack v5](https://webpack.js.org/concepts/)
* [CSS Modules](https://github.com/css-modules/css-modules)

## App Router
The Next.js starter app uses [Next.js's App Router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router),
the newer router that supports React Server Components and shared layouts. See the [Next.js docs](https://nextjs.org/docs/app/building-your-application)
to learn more about the App Router. One important change introduced with the App Router is that components default to being rendered
on the server, so any components that need to use client-side JS, such as useState, useEffect, and event handlers, need the `use client`
directive at the top. [The Next.js docs](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components) 
have more details about which to use when. 

## Initial Setup

1. Run [nvm](https://github.com/nvm-sh/nvm) so your local node version matches the project's node version:
    ```bash
    nvm use
    ```

1. Install dependencies locally. This helps some IDEs using tools like IntelliSense to properly wireup packages to your app files,
   or if you simply want to run `npm` commands outside of `ddev`.
   View the `README.nextjs.md` file to see how to run commands outside of ddev.
    ```bash
    npm ci
    ```
   
1. Install dependencies for ddev.
   You will need to install dependencies and run the app in the same environment (either Docker/Linux for both
   or your local OS for both). Otherwise, you can end up with incompatible versions of some packages.
   ```bash
   ddev nextjs npm ci
   ```

1. Start up the app by running `ddev start`:
    ```bash
    ddev start
    ```

## Starting and stopping the project

After following the "Initial Setup" instructions, you can start the local development server for the app by running:
```bash
ddev start
```
Open [https://YOUR-PROJECT.ddev.site/](https://YOUR-PROJECT.ddev.site/) with your browser to see the app. If using storybook, use port `6006` by default to view it: [https://YOUR-PROJECT.ddev.site:6006](https://YOUR-PROJECT.ddev.site:6006).

To stop `ddev` for the project:
```bash
ddev stop
```

## Icons
After adding a new SVG to `source/01-global-icon/svgs`, you will need to
generate the React components:
```bash
ddev nextjs icons
```

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

Runs `prettier --check`, which will check that all files within the `app` and `source` directories use the Prettier code style from `.prettierrc`. This might be redundant with the `lint` script above, since it extends whatever Prettier rules we have set.

#### Prettier write

```bash
ddev nextjs prettier:write
```

Runs `prettier --write`, which will find and fix all prettier issues found within the `app` and `source` directories. Note that this will automatically overwrite your files.

### Run TypeScript compiler (tsc)

```bash
ddev nextjs tsc
```

Runs `tsc --noEmit`, which will compile the TypeScript code without emitting files. This acts as a TS error check in your CLI. This is useful to catch TS errors that you might miss during development. For more information, see the [TypeScript Compiler (tsc) documentation](https://www.typescriptlang.org/docs/handbook/compiler-options.html).


## Notes

* Code for the app is currently configured to go into the `app` directory (for [Next.js pages](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)) and `source` for theming, components, providers, helpers, etc.
* Starting in Next.js v9.4, TypeScript errors do not show up in your browser when running the dev server (i.e. `npm run dev`). However, TS errors will prevent `next build` (i.e. `npm run build`) from running successfully. You can run `npm run lint` and `npm run tsc` to check for issues, which will give you lint and TS errors that will most likely cause your builds to fail. Note also that if you have [`husky`](https://typicode.github.io/husky/#/) installed, these will automatically run when you attempt to commit to a branch.
* The current favicon implementation will probably not display correctly locally in Chrome (v94), but does display correctly in Firefox and Safari. Note that the favicon _does_ display correctly once deployed. Not sure why.


## Helpful tips

### Starting project is slow

If the npm install is running slow you can enable `mutagen`, to do this:
* In the `.ddev` folder create a file named: `config.mutagen.yaml`
* In the file place: `mutagen_enabled: true`
* Please Restart the project.
**NOTE**: if you run into an issue with problems starting please run `ddev delete -O`.

### Installing npm packages within ddev

If you would want to use `npm`, please do `ddev npm [package]`.

### If the application never starts

To verify that it is working please run: `ddev nextjs monit` and if it is not working as expected please try the following:
* Stop DDev, `ddev stop`
* Remove `node_modules`
* Then restart DDev, `ddev start`
