import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import {terser} from 'rollup-plugin-terser'
// import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [{
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.main.replace('index', ''),
    format: 'cjs'
  },
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext'
        },
        include: [
          'index.ts'
        ]
      }
    })
  ]
}, {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.module.replace('index', ''),
    format: 'es'
  },
  plugins: [
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          target: 'es6',
          module: 'esnext'
        },
        include: [
          'index.ts'
        ]
      }
    })
  ]
}, {
  input: 'src/index.ts',
  output: {
    file: 'lib/innet-to.min.js',
    format: 'iife',
    name: 'innetTo',
    plugins: [terser()]
  },
  plugins: [
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          module: 'esnext'
        },
        include: [
          'index.ts'
        ]
      }
    })
  ]
}]
