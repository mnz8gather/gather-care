import { defineConfig } from 'tsdown';

export default defineConfig([
  // {
  //   entry: {
  //     index: 'src/index.ts',
  //     'defensive/index': 'src/spec/api.defensive.ts',
  //     'trustful/index': 'src/spec/api.trustful.ts',
  //   },
  //   format: 'cjs',
  //   outDir: 'dist/cjs',
  //   dts: true,
  // },
  {
    // entry: ['src/index.ts', 'src/spec/*.ts'],
    entry: {
      index: 'src/index.ts',
      'defensive/index': 'src/spec/api.defensive.ts',
      'trustful/index': 'src/spec/api.trustful.ts',
    },
    // outDir: 'dist/esm',
    dts: true,
    exports: true,
  },
]);
