import { Sandbox } from '@hopx-ai/sdk';

async function main() {
  const template = await Sandbox.getTemplate('code-interpreter');
  console.log(`Name: ${template.name}`);
  console.log(`Display: ${template.displayName}`);
  console.log(`vCPU: ${template.defaultResources.vcpu}`);
}
main().catch(console.error);
