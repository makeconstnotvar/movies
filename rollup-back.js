import babel from 'rollup-plugin-babel';
//import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './app/server.js',
  output: {
    file: './build/server.js',
    format: 'cjs'
  },
  plugins: [
    babel(),
    commonjs(),
    //resolve()
  ]
};