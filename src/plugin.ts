import type { Config } from 'payload'
import type { MyPluginOptions } from './types.js'

import { onInitExtension } from './lib/onInitExtension.js'
import FormLabelPlugin from './formLabel.js'

export const myPlugin =
  (pluginOptions: MyPluginOptions) =>
  (incomingConfig: Config): Config => {
    let config: Config = { ...incomingConfig }

    config.admin = {
      ...(config.admin || {}),

      // Add additional admin config here

      components: {
        ...(config.admin?.components || {}),
        // Add additional admin components here
        afterDashboard: [
          '/components/AfterDashboard/index.js#AfterDashboard',
          '/components/AfterDashboardClient/index.js#AfterDashboardClient',
        ],
      },
    }

    /**
     * If the plugin is disabled, return the config without modifying it
     *
     * Be cautious when using this if your plugin adds new collections or fields
     * as this could cause issues w/ Postgres migrations
     */
    if (pluginOptions.enabled === false) {
      return config
    }

    config = { ...FormLabelPlugin(config) }

    // Add additional collections here

    config.endpoints = [
      ...(config.endpoints || []),
      // {
      //   handler: () => {
      //     return Response.json({ message: 'Hello, world!' })
      //   },
      //   method: 'get',
      //   path: '/custom-endpoint',
      // },
      // Add additional endpoints here
    ]

    config.globals = [
      ...(config.globals || []),
      // Add additional globals here
    ]

    config.hooks = {
      ...(config.hooks || {}),
      // Add additional hooks here
    }

    config.onInit = async (payload) => {
      if (incomingConfig.onInit) {
        await incomingConfig.onInit(payload)
      }
      // Add additional onInit code by using the onInitExtension function
      onInitExtension(pluginOptions, payload)
    }

    return config
  }
