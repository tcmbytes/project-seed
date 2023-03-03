# Project Seed 🌱

The seed you plant to grow your project.

## Project setup

### Clone the project locally

If you have `SSH` setup on your account, run the following command:

```bash
$ git clone git@github.com:alexcristea/project-seed.git
```

Otherwise, you may use the `HTTPS` version (might ask for username and password):

```bash
$ git clone https://github.com/alexcristea/project-seed.git
```

### Install dependencies

Change the working directory to the repo directory:

```bash 
cd project-seed
```

If you're developing on macOS, then run the [setup-macos.sh](./bin/setup-macos.sh) script. It will install the system dependencies, project dependencies and the evironment for your app:

```bash
bash ./bin/setup-macos.sh
```

Otherwise, make sure to manually install [Node.js](https://nodejs.org) and [yarn](https://yarnpkg.com) on your machine before continuing with the development.

```bash
$ node --version
v16.19.1

$ yarn --version
1.22.4
```

To install the project dependencies, run the following install command:

```bash
$ yarn
```

## Development

To configure the environment variables of your project, make sure to configure the environment variables in the `.env` file:

```bash
cp .example.env .env
```

or copy the next lines into your `.env` file:

```bash
MY_ENV_VAR='MY_ENV_VAR'
```

### Run in development mode

To start the project in development mode, run the following command from the root directoy of the project:

```bash
$ yarn dev
```

### Run in watch mode

To continuously watch for file changes and check for syntax errors, run the following command:

```bash
$ yarn dev:watch
```

### Run unit tests

To run the unit test, run the following command from the root directoy of the project:

```bash
$ yarn test
```

To continuously run the unit tests as you code, run the following command:

```bash
$ yarn test:watch
```

The generated tests reports are available in `./reports/test-results.html` file.

### Generate code coverage report

To generate the coverage report for your app, run the following command:

```bash
$ yarn test:coverage
```

The generated report is available in `./reports/coverage` directory.

### Build for production

To transpile the `TypeScript` files into `JavaScript`, run the following command from the root directoy of the project:

```bash
$ yarn build
```

### Run for production

To build and start the transpiled project, run the following command from the root directoy of the project:

```bash
$ yarn start
```

### Project checks

To run type, linting and prettier checks on your project, run the following command from the root directoy of the project:

```bash
$ yarn check:all
```

Alternatively, you can run the scripts independently:

```bash
$ yarn check:type
$ yarn check:lint
$ yarn check:prettier
```

Futhermore, to check for project dependency cycles, run the following command from the root directoy of the project:

```bash
$ yarn check:dpdm
```

