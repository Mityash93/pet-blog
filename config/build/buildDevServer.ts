import { BuildOptions } from './types/config'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export const buildDevServer = (
  option: BuildOptions,
): DevServerConfiguration => {
  return {
    port: option.port,
    open: true,
  }
}
