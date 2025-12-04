import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 1: Hello World - Basic Quickstart
 * Creates a sandbox, executes Python code, and displays output.
 */
async function main() {
  // Create a sandbox (~100ms)
  const sandbox = await Sandbox.create({ template: 'code-interpreter' });

  // Execute code in the sandbox
  const result = await sandbox.runCode('print("Hello from HopX!")');

  // Print the output
  console.log(result.stdout);

  // Cleanup - delete the sandbox
  await sandbox.kill();
}

main().catch(console.error);
