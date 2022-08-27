/**
 * NOTE: this file does nothing :(
 * 
 * It was once a lovely config file used for projen, but
 * due to some limitations of projen (see the README), I
 * had to run "npx projen eject".
 * 
 * This file is only here for historical purposes, because
 * this repo is meant to be a reference for future me.
 */

const { awscdk } = require('projen');

const CDK_VERSION = '2.39.0';
const GIT_IGNORE_PATTERNS = ['**cdk.out', '**venv', 'dist'];

// glob patterns to exclude from published npm/python wheels
const NPM_IGNORE_PATTERNS = [...GIT_IGNORE_PATTERNS, 'bin', 'images', 'test'];

const PRIVATE_NPM_CONFIG = {
  npmRegistryUrl: process.env.NPM_REGISTRY_URL,
  npmTokenSecret: 'NPM_TOKEN',
};

const PRIVATE_PYPI_CONFIG = {
  distName: 'multi-language-construct-eric',
  module: 'multi_language_construct_eric',
  twineUsernameSecret: "TWINE_USERNAME",
  twinePasswordSecret: "TWINE_PASSWORD",
  twineRegistryUrl: "my-aws-codeartifact-registry.com",
};

const PACKAGE_META = {
  author: 'Eric Riddoch',
  authorAddress: 'eric.riddoch@bengroup.com',
  name: 'multi-language-construct',
  repositoryUrl: 'https://github.com/eric.riddoch/multi-language-construct.git',
  stability: 'experimental', // this value is arbitrary
  description: "Eric's first multi-language construct.",
};

const TYPESCRIPT_PROJECT_DEPENDENCIES = {
  deps: [
    '@aws-cdk/aws-apigatewayv2-alpha',
    '@aws-cdk/aws-apigatewayv2-integrations-alpha',
  ],
  /* Build dependencies for this module. */
  devDeps: [],
};

const PROJECT = new awscdk.AwsCdkConstructLibrary({
  cdkVersion: CDK_VERSION,
  defaultReleaseBranch: 'trunk',
  // publishDryRun: true,
  ...PACKAGE_META,
  ...TYPESCRIPT_PROJECT_DEPENDENCIES,
  ...PRIVATE_NPM_CONFIG,
  publishToPypi: PRIVATE_PYPI_CONFIG,
});


GIT_IGNORE_PATTERNS.map(pattern => PROJECT.gitignore.addPatterns(pattern));
NPM_IGNORE_PATTERNS.map(pattern => PROJECT.npmignore.addPatterns(pattern));

PROJECT.synth();


