'use client';
import { LayoutDashboard, Ticket, Scale, ReceiptText, Wallet, MessageSquareWarning, Settings, Leaf, ChevronLeft } from 'lucide-react';
export type PageKey = 'Overview' | 'Tickets' | 'Weighbridge' | 'Deductions' | 'Settlements' | 'Disputes';
const items = [
  { label: 'Overview', icon: LayoutDashboard }, { label: 'Tickets', icon: Ticket }, { label: 'Weighbridge', icon: Scale },
  { label: 'Deductions', icon: ReceiptText }, { label: 'Settlements', icon: Wallet }, { label: 'Disputes', icon: MessageSquareWarning }
] as const;
export function Sidebar({ active, onChange }: { active: PageKey; onChange: (page: PageKey) => void }) {
  return <aside className="sidebar"><div className="brand"><div className="brand-mark"><Leaf size={22}/></div><div><strong>Cane<span>360</span></strong><small>OUTGROWER PLATFORM</small></div></div><div className="workspace-label">WORKSPACE</div><nav>{items.map(({label, icon: Icon}) => <button key={label} onClick={() => onChange(label)} className={`nav-item ${active === label ? 'active' : ''}`}><Icon size={18}/><span>{label}</span>{label === 'Disputes' && <b className="nav-count">2</b>}</button>)}</nav><div className="sidebar-bottom"><button className="nav-item"><Settings size={18}/><span>Settings</span></button><div className="help-card"><div className="help-icon">?</div><strong>Need a hand?</strong><p>Visit the Cane360 help centre.</p><button onClick={() => alert('Help centre demo: contact your Cane360 administrator.')}>Get support <span>↗</span></button></div><div className="user-card"><div className="avatar">JM</div><div className="user-meta"><strong>James Mwangi</strong><small>Mill administrator</small></div><ChevronLeft size={16} className="user-chevron"/></div></div></aside>;
}
