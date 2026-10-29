import type { TicketStatus } from '@/lib/data';
export function StatusBadge({ status }: { status: TicketStatus }) { return <span className={`status status-${status.toLowerCase().replaceAll(' ', '-')}`}><i/>{status}</span>; }
