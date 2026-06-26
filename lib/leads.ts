import { writeFileSync, readFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Vercel serverless: only /tmp is writable; use process.cwd()/data locally
const DATA_DIR = process.env.VERCEL ? "/tmp" : join(process.cwd(), "data");
const LEADS_FILE = join(DATA_DIR, "leads.json");

export function readLeadsFromFile(): Record<string, unknown>[] {
  try {
    if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
    if (!existsSync(LEADS_FILE)) return [];
    return JSON.parse(readFileSync(LEADS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export function saveLeadToFile(lead: Record<string, unknown>): Record<string, unknown> {
  const leads = readLeadsFromFile();
  const record = { ...lead, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
  leads.unshift(record);
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  return record;
}
