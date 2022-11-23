# node-ts-aliasing

tying to understand aliasing and its restrictions in Node with Typescript

Apparently, for transpiling, only one package is required: [module-alising](https://www.npmjs.com/package/module-alias)

It allows you to add aliasing within the package.json itself. You can do some from a TypeScript file if desired

For your IDE, aliasing needs to be done within tsconfig.json. However, this has no impact on the actual compiling of the code.