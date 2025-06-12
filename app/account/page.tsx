// app/account/page.tsx
import { auth }         from '@clerk/nextjs/server';
import { redirect }     from 'next/navigation';
import { PrismaClient, Report } from '@prisma/client';  // ← import the type

const prisma = new PrismaClient();

export default async function AccountPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in?redirect_url=/account');

  // Tell TS exactly what `reports` is:
  const reports: Report[] = await prisma.report.findMany({
    where: { userId },
    orderBy: { date: 'desc' },
  });

  return (
    <>
      <h1>Your Reports</h1>
      {reports.length === 0 ? (
        <p className="no-reports">No reports yet.</p>
      ) : (
        <ul className="report-list">
          {reports.map((r: Report) => (   // ← annotate each `r` here, too
            <li key={r.id} className="report-item">
              <h2 className="report-title">{r.title}</h2>
              <time
                className="report-date"
                dateTime={r.date.toISOString()}
              >
                {new Date(r.date).toLocaleDateString()}
              </time>
              <p>
                <a
                  href={r.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-report"
                >
                  View Report
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

