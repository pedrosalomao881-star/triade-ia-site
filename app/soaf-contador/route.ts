import { readFileSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'soaf-privado-contador.html');
    const content = readFileSync(filePath, 'utf-8');

    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('Error loading SOAF Contador:', error);
    return new Response('Error loading SOAF Contador', { status: 500 });
  }
}
