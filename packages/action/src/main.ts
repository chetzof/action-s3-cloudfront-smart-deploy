import { setCommandEcho, setOutput } from '@actions/core'
import { exec } from '@actions/exec'

async function run(): Promise<void> {
  setCommandEcho(true)

  const output = await exec('aws', ['s3', 'ls'], {})
  setOutput('stdout', output)
  console.log('aaa')
}

await run()
