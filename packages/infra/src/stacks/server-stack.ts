import * as cdk from 'aws-cdk-lib'
import { CfnOutput } from 'aws-cdk-lib'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as s3 from 'aws-cdk-lib/aws-s3'

import type * as iam from 'aws-cdk-lib/aws-iam'

import type { Construct } from 'constructs'

interface ConsumerProperties extends cdk.StackProps {
  role: iam.Role
}

export class ServerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, properties: ConsumerProperties) {
    super(scope, id, properties)

    const bucket = new s3.Bucket(this, 'html-bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
    })

    const distribution = new cloudfront.Distribution(
      this,
      'personal-website-distribution',
      {
        defaultBehavior: {
          cachePolicy: new cloudfront.CachePolicy(this, 'cachePolicy', {
            enableAcceptEncodingBrotli: true,
            enableAcceptEncodingGzip: true,
          }),
          origin: new origins.S3Origin(bucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      },
    )

    new CfnOutput(this, 'distributionId', {
      value: distribution.distributionId,
    })

    new CfnOutput(this, 'awsBucketId', {
      value: bucket.bucketName,
    })
  }
}
