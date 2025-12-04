import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 3: Timeout Configuration
 * Creates a sandbox with an auto-kill timeout.
 */
async function timeoutConfiguration() {
  // Create with 1 hour timeout
  const sandbox = await Sandbox.create({
    template: 'code-interpreter',
    timeout_seconds: 3600, // 1 hour
  });

  console.log(`Sandbox ID: ${sandbox.sandboxId}`);
  const info = await sandbox.getInfo();
  console.log(`Status: ${info.status}`);
  
  if (info.expires_at) {
    console.log(`Sandbox expires at: ${info.expires_at}`);
  }

  // Clean up when done
  await sandbox.kill();
}

timeoutConfiguration().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
