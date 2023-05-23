import chalk from 'chalk'

import type { Context } from '@/src'
import { getTaskContextValue, runStackBoostrap } from '@/src/util'

import type { ListrTask } from 'listr2'

export const runCdkBootstrap: ListrTask<Context> = {
  async task(context, task) {
    const repo = getTaskContextValue('repo', context)
    task.title = `${chalk.bgGreen.bold(' AWS ')}: Running  ${chalk.green(
      'AWS CDK',
    )} bootstrap`
    await runStackBoostrap({ repo }, task)
  },
  options: {
    persistentOutput: true,
  },
}
