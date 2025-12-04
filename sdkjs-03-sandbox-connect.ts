import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 3: Sandbox.connect() - Connect to existing sandbox
 * Demonstrates connecting to an already existing sandbox.
 */
async function main() {
  // Note: Replace with actual sandbox ID from your environment
  // const sandboxId = 'sandbox-abc123';
  // const sandbox = await Sandbox.connect(sandboxId);
  
  // For demonstration, we'll create one first
  const newSandbox = await Sandbox.create({ template: 'code-interpreter' });
  const sandboxId = newSandbox.sandboxId;
  
  // Now connect to it (simulating reconnection)
  const connectedSandbox = await Sandbox.connect(sandboxId);
  const info = await connectedSandbox.getInfo();
  console.log(`Connected to: ${info.sandboxId}`);
  console.log(`Status: ${info.status}`);

  // Clean up when done
  await connectedSandbox.kill();
}

main().catch(console.error);
