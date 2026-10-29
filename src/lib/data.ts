export type TicketStatus = 'In transit' | 'At weighbridge' | 'Validated' | 'Flagged' | 'Settled';
export type Ticket = { id: string; pin: string; farmer: string; farmerId: string; truck: string; route: string; estimate: number; gross: number; tare: number; status: TicketStatus; date: string };
export const initialTickets: Ticket[] = [
  { id: 'CN-2048', pin: '4821', farmer: 'Mary Achieng', farmerId: 'FR-10482', truck: 'KDA 482A', route: 'Ahero · Block 12', estimate: 28, gross: 42.6, tare: 14.2, status: 'Validated', date: 'Today, 09:42' },
  { id: 'CN-2047', pin: '1936', farmer: 'Peter Otieno', farmerId: 'FR-10317', truck: 'KDG 218M', route: 'Muhoroni · Block 08', estimate: 24, gross: 38.8, tare: 13.1, status: 'Flagged', date: 'Today, 09:18' },
  { id: 'CN-2046', pin: '7712', farmer: 'Grace Wanjiku', farmerId: 'FR-10109', truck: 'KCY 902B', route: 'Chemelil · Block 04', estimate: 20, gross: 34.4, tare: 13.7, status: 'At weighbridge', date: 'Today, 08:56' },
  { id: 'CN-2045', pin: '6043', farmer: 'Daniel Ouma', farmerId: 'FR-10820', truck: 'KCU 115F', route: 'Ahero · Block 21', estimate: 26, gross: 40.2, tare: 14.1, status: 'Settled', date: 'Today, 08:24' },
  { id: 'CN-2044', pin: '3259', farmer: 'Alice Njeri', farmerId: 'FR-10714', truck: 'KDK 331C', route: 'Miwani · Block 03', estimate: 22, gross: 0, tare: 0, status: 'In transit', date: 'Today, 08:02' }
];
export const deductions = [
  { label: 'Sugar levy', rate: '1.0%', amount: 68.4 },
  { label: 'Harvesting fee', rate: 'KSh 1,200 / ton', amount: 1200 },
  { label: 'Transport tariff', rate: 'KSh 850 / ton', amount: 850 },
  { label: 'Fertilizer loan', rate: 'Outstanding balance', amount: 620 }
];
export const money = (amount: number) => new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(amount);
