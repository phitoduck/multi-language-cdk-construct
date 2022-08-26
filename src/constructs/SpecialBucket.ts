import { aws_s3 as s3, Stack, Tags } from "aws-cdk-lib"
import { Construct } from "constructs";

export interface SpecialBucketProps {
  name: string
}

export class SpecialBucket extends Construct {

  specialBucket: s3.Bucket

  constructor(scope: Construct, id: string, props: SpecialBucketProps) {
    super(scope, id);

    this.bindMemberFunctions()

    this.specialBucket = new s3.Bucket(scope, "some-bucket", {
      bucketName: props.name
    })

    this.addTags()
  }

  /**
   * Recursively apply tags to all resources declared in the construct.
   * This function will need to be called again to apply tags to any
   * resources that are registered after the constructor finishes.
   */
  public addTags = () => {
    const scope = this.node.scope as Construct
    const stack = Stack.of(scope)
    Tags.of(scope).add("cloudformation-stack", stack.stackName)
  }

  /**
   * Call this once in the constructor to bind the "this" reference
   * to the instance of the class.
   */
  private bindMemberFunctions = () => {
    this.addTags = this.addTags.bind(this)
  }
}

