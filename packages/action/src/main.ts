import * as core from '@actions/core'
import { getExecOutput } from '@actions/exec'

async function run(): Promise<void> {
  const directory = core.getInput('directory')
  const s3Bucket = core.getInput('s3-bucket')
  const path = core.getInput('s3-path')
  const s3SyncArguments = core.getInput('args').split(' ')
  core.setCommandEcho(true)
  await getExecOutput('aws', [
    's3',
    'sync',
    directory,
    `s3://${s3Bucket}${path.startsWith('/') ? '' : '/'}${path}`,
    ...s3SyncArguments,
  ])
  // core.setOutput('stdout', output)
  // console.log(output)
}

run()
