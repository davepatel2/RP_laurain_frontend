// app/account/page.tsx
import { auth }         from '@clerk/nextjs/server';
import { redirect }     from 'next/navigation';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function AccountPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in?redirect_url=/account');

  const reports = await prisma.report.findMany({
    where: { userId },
    orderBy: { date: 'desc' },
  });

  return (
    <main>
      <h1>Your Reports</h1>
      {reports.length === 0 && <p>No reports yet.</p>}
      <ul>
        {reports.map(r => (
          <li key={r.id}>
            <strong>{r.title}</strong> — {new Date(r.date).toLocaleDateString()}
            <br/>
            <a href={r.fileUrl} target="_blank" className="service-item">
              View Report
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
