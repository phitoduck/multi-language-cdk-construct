const { awscdk } = require('projen');

const CDK_VERSION = '2.39.0';

const PRIVATE_NPM_CONFIG = {
  npmRegistryUrl: process.env.NPM_REGISTRY_URL,
  npmTokenSecret: "NPM_TOKEN"
}

const PRIVATE_PYPI_CONFIG = {
  distName: 'multi-language-construct-eric',
  module: 'multi_language_construct_eric',
  twineUsernameSecret: process.env.TWINE_USERNAME,
  twinePasswordSecret: process.env.TWINE_PASSWORD,
  twineRegistryUrl: process.env.TWINE_REGISTRY_URL,
}

const PACKAGE_META = {
  author: 'Eric Riddoch',
  authorAddress: 'eric.riddoch@bengroup.com',
  defaultReleaseBranch: 'main',
  name: 'multi-language-construct',
  repositoryUrl: 'https://github.com/eric.riddoch/multi-language-construct.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();