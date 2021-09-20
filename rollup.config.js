import {camelToDash} from 'camel-to-dash'

import babel from '@rollup/plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize'

import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

const isDev = process.env.NODE_ENV === 'dev',
      isProd = !isDev,
      inputFile = 'src/index.ts',
      outputDir = 'dist',
      extensions = ['.js', '.ts'],
      libName = 'countValueInArray'


const plugins = [
        resolve({
            browser: true,
            extensions
        }),
        babel({
            extensions,
            babelHelpers: 'runtime',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        bugfixes: true,
                        modules: false,
                        targets: { browsers: '> 0.25%, ie 11, not op_mini all, not dead' }
                    }
                ],
                '@babel/preset-typescript'
            ],
            plugins: [
                '@babel/plugin-transform-runtime'
            ],
            exclude: 'node_modules/**',
        }),
        commonjs(),
        filesize(),
        external()
    ],
    moduleBuildParams = {
        input: inputFile,
        external: [/@babel\/runtime/],
        plugins
    }

/**
 * terser for prod
 */    
if (isProd) {
    plugins.push(terser())
}

/**
 * different versions of the module format, from the general model
 */
const esmModule = {...moduleBuildParams, output: {file: `${outputDir}/index.esm.js`, format: 'esm'}},
      cjsModule = {...moduleBuildParams, output: {file: `${outputDir}/index.cjs.js`, format: 'cjs'}},
      umdModule = {...moduleBuildParams, external:[], output: {file: `${outputDir}/lib/${camelToDash(libName)}.js`, format: 'umd', name: libName}}

export default [
    esmModule,
    cjsModule,
    umdModule
]