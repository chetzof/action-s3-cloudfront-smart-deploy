import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { ServerStack } from '@/src/stacks/server-stack'
import { RoleStack } from '@/src/stacks/role-stack'

const app = new cdk.App()
const { role } = new RoleStack(app, 'action-role')

new ServerStack(app, 'action-server', { role })
