#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkSarRoleStack } from '../lib/cdk-sar-role-stack';
import { AwsSolutionsChecks } from 'cdk-nag';

const app = new cdk.App();

cdk.Aspects.of(app).add(new AwsSolutionsChecks());

new CdkSarRoleStack(app, 'PowertoolsPipelineStack-Sarv3', {});
