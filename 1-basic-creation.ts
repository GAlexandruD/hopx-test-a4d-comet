import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 1: Basic Sandbox Creation
 * Creates a sandbox from a template name and retrieves its information.
 */
async function basicCreation() {
  // Create sandbox from template name
  const sandbox = await Sandbox.create({
    template: 'code-interpreter',
  });

  console.log(`Sandbox ID: ${sandbox.sandboxId}`);
  const info = await sandbox.getInfo();
  console.log(`Status: ${info.status}`);
  console.log(`URL: ${info.publicHost}`);

  // Clean up when done
  await sandbox.kill();
}

basicCreation().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
