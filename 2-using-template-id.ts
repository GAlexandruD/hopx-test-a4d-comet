import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 2: Using Template ID
 * Creates a sandbox using a template ID instead of a template name.
 */
async function usingTemplateId() {
  // Create from template ID
  const sandbox = await Sandbox.create({
    template_id: '119',
  });

  console.log('Sandbox created successfully');
  console.log(`Sandbox ID: ${sandbox.sandboxId}`);
  
  const info = await sandbox.getInfo();
  console.log(`Status: ${info.status}`);
  console.log(`URL: ${info.publicHost}`);

  // Clean up when done
  await sandbox.kill();
}

usingTemplateId().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
