const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Eric Riddoch',
  authorAddress: 'eric.riddoch@bengroup.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'multi-language-construct',
  repositoryUrl: 'https://github.com/eric.riddoch/multi-language-construct.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();