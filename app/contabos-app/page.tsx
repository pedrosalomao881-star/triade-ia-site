import { readFileSync } from 'fs';
import { join } from 'path';

export default function ContabOSPage() {
  try {
    const filePath = join(process.cwd(), 'public', 'contabos', 'sistema', 'index.html');
    const html = readFileSync(filePath, 'utf-8');

    return (
      <div dangerouslySetInnerHTML={{ __html: html }} />
    );
  } catch (error) {
    return <div>ContabOS system not found</div>;
  }
}
