import { Sandbox } from '@hopx-ai/sdk';

/**
 * Example 6: List Available Templates
 * Lists all available templates and retrieves details about specific templates.
 */
async function listTemplates() {
  // List all available templates
  const templates = await Sandbox.list_templates();

  console.log('Available Templates:');
  console.log('====================');
  
  for (const template of templates) {
    console.log(`\n${template.name}: ${template.display_name}`);
    if (template.description) {
      console.log(`  Description: ${template.description}`);
    }
  }

  // Get specific template details
  try {
    const codeInterpreterTemplate = await Sandbox.get_template('code-interpreter');
    
    console.log('\n\nCode Interpreter Template Details:');
    console.log('==================================');
    console.log(`Name: ${codeInterpreterTemplate.name}`);
    console.log(`Display Name: ${codeInterpreterTemplate.display_name}`);
    if (codeInterpreterTemplate.description) {
      console.log(`Description: ${codeInterpreterTemplate.description}`);
    }
    if (codeInterpreterTemplate.default_resources) {
      console.log(`Default vCPU: ${codeInterpreterTemplate.default_resources.vcpu}`);
      console.log(`Default Memory: ${codeInterpreterTemplate.default_resources.memory_gb} GB`);
      console.log(`Default Disk: ${codeInterpreterTemplate.default_resources.disk_gb} GB`);
    }
  } catch (error) {
    console.error('Error retrieving template details:', error);
  }
}

listTemplates().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
