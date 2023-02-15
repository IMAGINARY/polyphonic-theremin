# polyphonic-theremin

A multi-touch operated polyphonic Theremin for embedding in your projects.

## Installation

Install the package via `npm`:

```shell
npm install @imaginary-maths/polyphonic-theremin
```

This component relies on `PointerEvent` internally for a unified handling of
touch and mouse input. To support older browsers, you may add the
[Pointer Events Polyfill](https://www.npmjs.com/package/pepjs) to your project.

## Usage

Take a look at the `docs` and `src` folders.

## Build

Install the dependencies:

```shell
npm install
```

Build the redistributable files to the `dist` folder using

```shell
npm run build
```

or start a development server using

```shell
npm run serve
```

Before sending any pull requests, your changes should be properly formatted
using

```shell
npm run format
```

and the linter should not have any complaints:

```shell
npm run lint
```

Check out `package.json` for additional `run` scripts.

This project is using Parcel as a build system. The demo is written in HTML,
SCSS and Typescript.

## ToDo

- Fix broken TypeDoc.
- Add usage examples.

## Credits

Developed by Christian Stussak for IMAGINARY gGmbH.

## License

Copyright © 2022 IMAGINARY gGmbH

Licensed under the MIT license (see the [`LICENSE`](LICENSE) file).
