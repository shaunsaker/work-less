# Assets Generator

## How it works

It reads all of the image assets in `@app/src/assets/images` and creates `Assets.ts`, `index.native.ts` and `index.ts` to use these assets on native and web. On web, we use remote images hosted at the `DOMAIN` listed in `@app/src/config.ts`. On native, we use locally required images. This is a ReactXP thing apparently.

## Requirements

- All images should be png.
- All image file names should be in kebab-case.
- All images should be referenced in snakeCase.
