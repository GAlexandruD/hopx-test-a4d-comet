import { Sandbox } from '@hopx-ai/sdk';

async function main() {
  const templates = await Sandbox.listTemplates();
  for (const t of templates) {
    console.log(`${t.name}: ${t.displayName}`);
  }
}
main().catch(console.error);
