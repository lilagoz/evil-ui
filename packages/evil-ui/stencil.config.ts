import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'evil-ui',
  outputTargets: [
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },

    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    reactOutputTarget({
      componentCorePackage: '@lilagoz/evil-ui',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@lilagoz/evil-ui',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/style/variables.scss'],
    }),
  ],
};
