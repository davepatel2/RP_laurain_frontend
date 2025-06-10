// app/account/layout.tsx
import Navbar from '../components/Navbar';
import styles from './account.module.css';

export const metadata = {
  title: 'My Account – RP Laurain',
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* top‐of‐page navbar */}
      <Navbar />
      <main className="account-container">
        {children}
      </main>
    </>
  );
}
