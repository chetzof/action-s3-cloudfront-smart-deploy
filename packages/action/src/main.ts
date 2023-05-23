import { setCommandEcho, setOutput } from '@actions/core'
import { exec } from '@actions/exec'

import { a } from '@/action/src/one'

async function run(): Promise<void> {
  setCommandEcho(true)
  a()
  const output = await exec('aws', ['s3', 'ls'], {})
  setOutput('stdout', output)
  console.log('aaa')
}

run()
