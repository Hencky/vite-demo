// module.exports = {
//   input: ['src/index.js'],
//   output: {
//     // 产物输出目录
//     dir: 'dist/es',
//     // 产物格式
//     format: 'esm',
//   },
// };

// /**
//  * @type { import('rollup').RollupOptions }
//  */
// const buildOptions = {
//   input: ['src/index.js', 'src/util.js'],
//   output: [
//     {
//       dir: 'dist/es',
//       format: 'esm',
//     },
//     {
//       dir: 'dist/cjs',
//       format: 'cjs',
//     },
//   ],
// };

// export default buildOptions;

const buildIndexOptions = {
  input: ['src/index.js'],
  output: {
    dir: 'dist/es',
    format: 'esm',
  },
};

const buildUtilsOptions = {
  input: ['src/util.js'],
  output: {
    dir: 'dist/es',
    format: 'esm',
  },
};

export default [buildIndexOptions, buildUtilsOptions];
