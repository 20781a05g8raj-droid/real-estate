import fs from 'fs';
import path from 'path';

export interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    source: string;
    propertyId?: string;
    createdAt: string;
}

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

export function getLeads(): Lead[] {
    try {
        const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
        return JSON.parse(raw) as Lead[];
    } catch {
        return [];
    }
}

export function saveLead(data: Omit<Lead, 'id' | 'createdAt'>): Lead {
    const leads = getLeads();
    const newLead: Lead = {
        ...data,
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        createdAt: new Date().toISOString(),
    };
    leads.push(newLead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    return newLead;
}

export function exportCSV(leads: Lead[]): string {
    const headers = ['id', 'name', 'email', 'phone', 'message', 'source', 'propertyId', 'createdAt'];
    const rows = leads.map((l) =>
        headers.map((h) => {
            const val = String((l as any)[h] ?? '');
            return `"${val.replace(/"/g, '""')}"`;
        }).join(',')
    );
    return [headers.join(','), ...rows].join('\r\n');
}
