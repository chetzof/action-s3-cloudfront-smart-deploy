import chalk from 'chalk'
import { $ } from 'execa'

import { toExecaError } from '@/src/error'
import { run, throwError } from '@/src/util'

import type { ListrTask } from 'listr2'

export const checkGhcliAuth: ListrTask = {
  title: `${chalk.bgGreen.bold(' GITHUB ')}: Checking if ${chalk.green(
    'GitHub CLI',
  )} is authentificated`,
  async task(_context, task) {
    try {
      await run($`gh auth status`, task)
    } catch (error) {
      throwError(toExecaError(error).stderr)
    }
  },
  options: {
    persistentOutput: true,
  },
}
