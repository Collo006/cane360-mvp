import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Cane360 | Outgrower Operations', description: 'Cane logistics and financial ledger MVP' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
