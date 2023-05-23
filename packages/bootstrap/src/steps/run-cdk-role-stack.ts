import chalk from 'chalk'

import type { Context } from '@/src'
import { getTaskContextValue, runStack } from '@/src/util'

import type { ListrTask } from 'listr2'

export const runCdkRoleStack: ListrTask<Context> = {
  async task(context, task) {
    const repo = getTaskContextValue('repo', context)
    task.title = `${chalk.bgGreen.bold(' AWS ')}: Running  ${chalk.green(
      'AWS CDK',
    )} role stack`

    await runStack('action-role', { repo }, task)
  },
  options: {
    persistentOutput: false,
  },
}
