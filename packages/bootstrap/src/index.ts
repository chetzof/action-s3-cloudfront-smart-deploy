import chalk from 'chalk'
import { Listr } from 'listr2'

import { checkAwscli } from '@/src/steps/check-awscli'
import { checkAwscliAuth } from '@/src/steps/check-awscli-auth'
import { checkGhcliAuth } from '@/src/steps/check-ghcli-auth'
import { inputRepo } from '@/src/steps/input-repo'
import { runCdkBootstrap } from '@/src/steps/run-cdk-bootstrap'
import { runCdkRoleStack } from '@/src/steps/run-cdk-role-stack'
import { runCdkServerStack } from '@/src/steps/run-cdk-server-stack'
import { savingRoleToGithub } from '@/src/steps/saving-role-to-github'

// eslint-disable-next-line no-console

console.log(chalk.cyan.bold('\n Welcome to the bootstrap wizard! \n'))
export interface Context {
  repo?: string
}

await new Listr<Context>(
  [
    checkGhcliAuth,
    checkAwscli,
    checkAwscliAuth,
    inputRepo,
    runCdkBootstrap,
    runCdkRoleStack,
    savingRoleToGithub,
    runCdkServerStack,
  ],
  {
    rendererOptions: {
      collapseErrors: false,
    },
  },
).run({})

console.log(
  chalk.green.bold(
    '\n🎉🎉🎉 Congratulations! Your deployment had finished sucessfully! 🎉🎉🎉\n',
  ),
)
