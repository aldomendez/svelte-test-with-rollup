import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/main.js',
  dest: 'bundle.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    svelte({
      // By default, all .html and .svelte files are compiled
      extensions: ['.html'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/components/**.html'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
