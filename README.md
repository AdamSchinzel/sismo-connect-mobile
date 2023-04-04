# zkConnect mobile

This is example how to use zkConnect in mobile app written in React Native (Expo).

Right now it works only when you run it in web browser because the `@sismo-core/zk-connect-client` only works in web browser. However I manage to tweak this library so it works in mobile app, the real problem was to get past authorized domains set by Sismo when creating zkConnect app.

## Documentation

Project is based on `Expo`, a framework and a platform for universal React applications. Check out the [documentation](https://docs.expo.dev/) for more information.

## Prerequisites

- `node`
- `npm`

## Usage

**Firstly, install all necessary dependencies:**

```sh
npm install
```

**To start a Metro Bundler:**

```sh
npm run web
```

## Folder structure

```bash
template-expo/
├── .expo
├── expo-shared
├── assets
└── src
│   ├── components (inspired by atomic design principles)
│   │   ├── elements (small building blocks)
│   │   ├── layouts (wrappers for templates)
│   │   ├── modules (more building blocks together)
│   │   └── templates (screen specific content)
│   ├── config
│   ├── graphql
│   ├── hooks
│   ├── screens
│   ├── services
│   └── utils
└── web (simulate mobile in browser window)
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
