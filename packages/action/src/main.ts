import * as core from '@actions/core'
import { getExecOutput } from '@actions/exec'

import { a } from '@/action/src/one'

async function run(): Promise<void> {
  const directory = core.getInput('directory')
  const s3Bucket = core.getInput('s3-bucket')
  core.setCommandEcho(true)
  a()
  const output = await getExecOutput('aws', ['s3', 'ls'], {})
  // core.setOutput('stdout', output)
  // console.log(output)
}

run()
