import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import path from 'path';

export async function GET() {
  const resumePath = path.join(process.cwd(), 'src/data/resume.json');
  const data = JSON.parse(readFileSync(resumePath, 'utf-8'));
  return NextResponse.json(data);
}
