import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 4: Internet Access Control
 * Creates a sandbox with internet access disabled.
 */
async function internetAccessControl() {
  // Create without internet access (isolated)
  const sandbox = await Sandbox.create({
    template: 'code-interpreter',
    internet_access: false,
  });

  console.log(`Sandbox ID: ${sandbox.sandboxId}`);
  const info = await sandbox.getInfo();
  console.log(`Status: ${info.status}`);
  console.log(`Internet access: ${info.internet_access}`);

  // Optionally verify the sandbox is isolated
  if (!info.internet_access) {
    console.log('✓ Sandbox successfully created with internet access disabled');
  }

  // Clean up when done
  await sandbox.kill();
}

internetAccessControl().catch((error) => {  console.error('Error:', error);
  process.exit(1);
});
