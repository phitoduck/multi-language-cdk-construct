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
  description: "Eric's first ever multi-language construct.",
  packageName: 'multi-language-construct-eric', /* The "name" in package.json. */
  stability: 'experimental', // this value is arbitrary
}

const TYPESCRIPT_PROJECT_DEPENDENCIES = {
  deps: [
    '@aws-cdk/aws-apigatewayv2-alpha',
    '@aws-cdk/aws-apigatewayv2-integrations-alpha',
  ],
  devDeps: [], /* Build dependencies for this module. */
}

const PROJECT = new awscdk.AwsCdkConstructLibrary({
  cdkVersion: CDK_VERSION,
  publishDryRun: true,
  ...PRIVATE_NPM_CONFIG,
  publishToPypi: PRIVATE_PYPI_CONFIG,
  ...PACKAGE_META,
  ...TYPESCRIPT_PROJECT_DEPENDENCIES,
});

PROJECT.gitignore.addPatterns('cdk.out/');
PROJECT.gitignore.addPatterns('**venv');

PROJECT.addPackageIgnore('cdk.out/');
PROJECT.addPackageIgnore('cdk.json');
PROJECT.addPackageIgnore('**venv');
PROJECT.addPackageIgnore('**Justfile');
PROJECT.addPackageIgnore('hello/');

PROJECT.synth();