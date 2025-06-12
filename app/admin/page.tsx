// app/admin/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import '@/styles/admin.css';

export default function AdminPage() {
  const { user } = useUser();   // you might later gate this to admins only
  const router = useRouter();

  type FormState = {  // Define the type for your form state
    userId: string;
    title: string;
    date: string;
    fileUrl: string;
  };

  const [form, setForm] = useState<FormState>({
    userId: '',
    title: '',
    date: '',
    fileUrl: '',
  });

  async function onSubmit(e: React.FormEvent) { // Explicitly type the event object
    e.preventDefault();
    console.log('Admin form submit:', form);

    try {
      const res = await fetch('/api/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      console.log('Fetch response status:', res.status);
      const data = await res.json();
      console.log('Fetch response data:', data);

      if (!res.ok) {
        alert(`Error saving report: ${data.error || res.status}`);
        return;
      }

      alert('Report saved!');
      // reset form
      setForm({ userId: '', title: '', date: '', fileUrl: '' });
      router.refresh();
    } catch (err) {
      console.error(err);
      alert('Network or server error. Check console.');
    }
  }

  return (
    <div className="home-three">
      <form className="admin-form" onSubmit={onSubmit}>
        <h1>Upload Report Link</h1>

        {['userId','title','date','fileUrl'].map((field) => (
          <div key={field} className="input-group">
            <label htmlFor={field}>{field}</label><br/>
            <input
              id={field}
              type={field === 'date' ? 'date' : 'text'}
              value={form[field as keyof FormState]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            />
          </div>
        ))}

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
