import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 4: Sandbox.list() - List all sandboxes
 * Demonstrates listing existing sandboxes.
 */
async function main() {
  const sandboxes = await Sandbox.list({ status: 'running', limit: 50 });

  for (const sb of sandboxes) {
    console.log(`${sb.sandboxId}: ${sb.status}`);
  }

  if (sandboxes.length > 0) {
    const firstSandbox = sandboxes[0];
    const connected = await Sandbox.connect(firstSandbox.sandboxId);
    await connected.kill();
  }
}

main().catch(console.error);
