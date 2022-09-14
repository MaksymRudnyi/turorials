import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'

export default {
  input: './src/index.ts',
  output: {
    format: 'es',
    file: './dist/build.js'
  },
  plugins: [
    typescript(),
    scss({
      output: './dist/toastify.css',
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup', 'stage-2'],
      plugins: ['transform-object-assign']
    })
  ]
}
