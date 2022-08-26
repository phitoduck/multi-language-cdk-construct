const { awscdk } = require('projen');

const CDK_VERSION = "2.39.0"

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Eric Riddoch',
  authorAddress: 'eric.riddoch@bengroup.com',
  cdkVersion: CDK_VERSION,
  defaultReleaseBranch: 'main',
  name: 'multi-language-construct',
  repositoryUrl: 'https://github.com/eric.riddoch/multi-language-construct.git',

  deps: [
    // `@aws-cdk/aws-apigatewayv2-alpha@${CDK_VERSION}`,
    `@aws-cdk/aws-apigatewayv2-alpha`,
    `@aws-cdk/aws-apigatewayv2-integrations-alpha`,
  ],                /* Runtime dependencies of this module. */
  description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [],             /* Build dependencies for this module. */
  packageName: "multi-language-construct-eric",  /* The "name" in package.json. */
  publishDryRun: true,
  publishToPypi:{
    distName: "multi-language-construct-eric",
    module: "multi_language_construct_eric",
  },
  stability: "experimental" // this value is arbitrary
});

project.gitignore.addPatterns("cdk.out/")

project.synth();