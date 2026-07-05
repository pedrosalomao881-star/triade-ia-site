import { readFileSync } from 'fs';
import { join } from 'path';

export default function SOAFContadorPage() {
  try {
    const filePath = join(process.cwd(), 'public', 'soaf-contador', 'index.html');
    const html = readFileSync(filePath, 'utf-8');

    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    );
  } catch (error) {
    return <div>SOAF Contador system not found</div>;
  }
}
