# Eslint config

Contains configs: 
* JavaScript
* TypeScript

## Requirements

`Node.js` version `>= 12.*`

If you use `TypeScript`:

```json
// example tsconfig.json

{
    "compilerOptions": {
        "sourceMap": true,
        "outDir": "dist",
        "noImplicitAny": true,
        "module": "es6",
        "target": "es6",
        "strict": true,
        "resolveJsonModule": true,
        "esModuleInterop": true,
    },
    "include": ["**/*.ts"],
    "exclude": [],
}
```

## Install

```console
$ npm i -D eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## NPM-script package.json

```json
{
    "scripts": {
        "eslint": "eslint src"
    }
}
```

## .eslintrc

```json
{
    "extends": ["eslint-config-kholoddev"]
}
```