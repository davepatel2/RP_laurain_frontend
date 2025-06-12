// app/api/reports/route.ts
import { NextResponse } from 'next/server';
import { auth }        from '@clerk/nextjs/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: Request) {
  // get userId from query ?userId=…
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 });

  const reports = await prisma.report.findMany({
    where: { userId },
    orderBy: { date: 'desc' },
  });
  return NextResponse.json(reports);
}

export async function POST(req: Request) {
  // Ensure admin
  const { userId: adminId } = await auth();
  // TODO: check adminId against your list or Clerk metadata

  const { userId, title, date, fileUrl } = await req.json();
  if (!userId || !title || !date || !fileUrl) {
    return NextResponse.json({ error: 'missing fields' }, { status: 400 });
  }

  const report = await prisma.report.create({
    data: {
      userId,
      title,
      date:   new Date(date),
      fileUrl,
    },
  });
  return NextResponse.json(report, { status: 201 });
}
