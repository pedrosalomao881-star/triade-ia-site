import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'soaf-privado-empresario.html');
    const content = await readFile(filePath, 'utf-8');
    
    return new Response(content, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error reading SOAF file:', error);
    return new Response('SOAF Empresário not found', { status: 404 });
  }
}
