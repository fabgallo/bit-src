# A Component compiler for React TypeScript components
 * Bit's TypeScript compiler environment for components
 * Based on the official [Bit's TypeScript compiler](https://bitsrc.io/bit/envs/compilers/typescript?version=0.0.5) v0.0.5
 * Modified to add `esModuleInterop: true` for the compiler options
 * Compiles `tsx` and `ts` files

## How to use?

Import the environment
```bash
bit import upchain.utils/compilers/typescript -c
```

Then build using [bit build](https://docs.bitsrc.io/docs/cli-build.html).
```bash
bit build
```
