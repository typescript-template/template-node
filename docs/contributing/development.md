# Development

## Setup

Follow the [Setup Guide](./setup.md) to set-up your project.

## Development

- Follow the [Contributing Guide](../../CONTRIBUTING.md).
- Run `npm run dev`

## Code Analysis, Linting & Formatting

Run `npm run lint` before you commit your code.

## Testing & Validation

### Debug Builds

To compile a debug build, run `npm run build`. The build output will appear in the `./dist` folder.

### Prod Builds

To compile a production build, run `npm run lint:prod && npm run build`. The build output will appear in the `./dist` folder.

## More

### Generating Docs

`npm run doc` and browse docs/index.html!


### Environment Variables

See `src/environment.ts` to see how to use this project's environment variables. Configure an environment in `.env` or with `process.env` (https://nodejs.org/dist/latest-v16.x/docs/api/process.html#processenv).
