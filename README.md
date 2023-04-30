# Sismo Connect mobile

This is an example how to use Sismo Connect in mobile app written in React Native (Expo).

Right now it works only when you run it in web browser because the `@sismo-core/zk-connect-client` only works in web browser. However I manage to tweak this library so it works in mobile app, the real problem was to get past authorized domains set by Sismo when creating Sismo Connect app (it only accepts web domains).

## Documentation

Project is based on `Expo`, a framework and a platform for universal React applications. Check out the [documentation](https://docs.expo.dev/) for more information.

## Prerequisites

- `node`
- `npm`

## Usage

First start [sismo-connect-backend](https://github.com/AdamSchinzel/sismo-connect-backend) so you can verify proof in secure way.

**Then install all necessary dependencies:**

```sh
npm install
```

**Finally start the app:**

```sh
npm run web
```

## Folder structure

```bash
sismo-connect-mobile/
├── .expo
├── expo-shared
├── assets
└── src
│   ├── components
│   │   ├── elements
│   │   ├── layouts
│   │   ├── modules
│   │   └── templates
│   ├── config
│   ├── graphql
│   ├── hooks
│   ├── screens
│   └── services
└── web
```

## What's Inside

- React Native Framework

  - [Expo](https://expo.dev/)

- Type-checking

  - [TypeScript](https://www.typescriptlang.org/docs/home.html)

- Code quality tools

  - [Prettier](https://prettier.io/)
  - [ESLint](https://eslint.org/)
  - [EditorConfig](https://editorconfig.org/)
