import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 2: Sandbox.create() - Create a new sandbox
 * Demonstrates sandbox creation with various options.
 */
async function main() {
  // Create a basic sandbox
  const sandbox = await Sandbox.create({
    template: 'code-interpreter',
  });

  const info = await sandbox.getInfo();
  console.log(`Sandbox ID: ${info.sandboxId}`);
  console.log(`Public Host: ${info.publicHost}`);

  // Clean up when done
  await sandbox.kill();
}

main().catch(console.error);
