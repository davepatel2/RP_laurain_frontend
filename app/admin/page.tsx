'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser }    from '@clerk/nextjs';

export default function AdminPage() {
  const { user } = useUser(); // add an isAdmin check here
  const router = useRouter();
  const [form, setForm] = useState({ userId: '', title: '', date: '', fileUrl: '' });

  async function onSubmit(e) {
    e.preventDefault();
    await fetch('/api/reports', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(form),
    });
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Upload Report Link</h1>
      {['userId','title','date','fileUrl'].map(field => (
        <div key={field}>
          <label>{field}</label><br/>
          <input
            type={field==='date'?'date':'text'}
            value={form[field]}
            onChange={e=>setForm({...form,[field]:e.target.value})}
          />
        </div>
      ))}
      <button type="submit" className="service-item">Save</button>
    </form>
  );
}
