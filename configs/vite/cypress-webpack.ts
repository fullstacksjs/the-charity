import path from 'node:path';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import type { Configuration } from 'webpack';

export function getWebpackConfig(): Configuration {
  const extensions = ['.ts', '.tsx', '.mjs', '.js', '.jsx'];
  const configFile = path.resolve(__dirname, '../../tsconfig.json');

  return {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.([jt])sx?$/,
          loader: require.resolve('ts-loader'),
          exclude: [/node_modules/],
          options: {
            configFile,
            experimentalWatchApi: true,
            transpileOnly: true,
          },
        },
      ],
    },
    resolve: {
      extensions,
      plugins: [
        new TsconfigPathsPlugin({
          configFile,
          logInfoToStdOut: true,
          extensions,
        }),
      ],
    },
  };
}
