import { readFileSync } from 'fs';
import { join } from 'path';

export default function SOAFEmpresaPage() {
  try {
    const filePath = join(process.cwd(), 'public', 'soaf-empresa', 'index.html');
    const html = readFileSync(filePath, 'utf-8');

    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    );
  } catch (error) {
    return <div>SOAF Empresa system not found</div>;
  }
}
