import * as core from '@actions/core'
import { getExecOutput } from '@actions/exec'

async function run(): Promise<void> {
  const directory = core.getInput('directory')
  const s3Bucket = core.getInput('s3-bucket')
  const path = core.getInput('s3-path')
  const s3SyncArguments = core.getInput('args').split(' ')
  s3SyncArguments.push('--no-progress')
  core.setCommandEcho(true)
  const output = await getExecOutput('aws', [
    's3',
    'sync',
    directory,
    `s3://${s3Bucket}${path.startsWith('/') ? '' : '/'}${path}`,
    ...s3SyncArguments,
  ])
  // core.setOutput('11111', output)
  // core.setOutput('2222', output.stdout)
  // core.setOutput('3333', output.stderr)
  // console.log('4444', output)
}

run()
