#!/usr/bin/env node
import 'source-map-support/register';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
import { SpecialBucket } from '../src/constructs';

export class DevelopmentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SpecialBucket(scope, "a-special-bucket", {
      name: "my-special-bucket"
    })
  }
}

const app = new cdk.App();
new DevelopmentStack(app, "development-stack", {});
