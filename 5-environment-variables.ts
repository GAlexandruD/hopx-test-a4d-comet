import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 5: Environment Variables
 * Sets initial environment variables when creating the sandbox.
 */
async function environmentVariables() {
  // Create with environment variables
  const sandbox = await Sandbox.create({
    template: 'code-interpreter',
    env_vars: {
      API_KEY: 'sk-123',
      DEBUG: 'true',
      ENVIRONMENT: 'production',
    },
  });

  console.log(`Sandbox ID: ${sandbox.sandboxId}`);
  const info = await sandbox.getInfo();
  console.log(`Status: ${info.status}`);

  // The environment variables are now available in the sandbox
  // You can verify them by running code in the sandbox
  console.log('Environment variables set:');
  console.log('  API_KEY: sk-123');
  console.log('  DEBUG: true');
  console.log('  ENVIRONMENT: production');

  // Clean up when done
  await sandbox.kill();
}

environmentVariables().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
