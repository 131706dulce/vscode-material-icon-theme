import { merge } from 'lodash-es';
import type { Config } from '../../models/icons/configuration';
import type { RecursivePartial } from '../../types/recursivePartial';

/**
 * The options control the generator and decide which icons are disabled or not.
 */
export const getDefaultConfiguration = (): Required<Config> => ({
  folders: {
    theme: 'specific',
    color: '#90a4ae',
    associations: {},
    customClones: [],
  },
  activeIconPack: 'angular',
  hidesExplorerArrows: false,
  opacity: 1,
  saturation: 1,
  files: {
    color: '#90a4ae',
    associations: {},
    customClones: [],
  },
  languages: { associations: {} },
});

/**
 * Fill in missing configuration values with the default values.
 *
 * @param config Configuration object
 * @returns New configuration object with default values
 */
export const padWithDefaultConfig = (
  config?: RecursivePartial<Config>
): Config => {
  const withDefaultConfig: Config = merge(
    {},
    getDefaultConfiguration(),
    config ?? {}
  );

  return withDefaultConfig;
};
