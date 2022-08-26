#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from "aws-cdk-lib"
import { Construct } from 'constructs';
import { SpecialBucket } from '../src/special';

export class DevelopmentStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SpecialBucket(this, "a-special-bucket", {
      name: "my-special-bucket"
    })

    new s3.Bucket(this, "brub", {bucketName: "toodle"})
  }
}

const app = new cdk.App();
new DevelopmentStack(app, "development-stack", {});
