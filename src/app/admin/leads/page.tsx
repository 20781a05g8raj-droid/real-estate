'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    source: string;
    propertyId?: string;
    createdAt: string;
}

export default function AdminLeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filterSource, setFilterSource] = useState('all');

    useEffect(() => {
        fetch('/api/leads')
            .then(r => r.json())
            .then(data => { setLeads(data.leads || []); setLoading(false); });
    }, []);

    const sources = ['all', ...Array.from(new Set(leads.map(l => l.source)))];

    const filtered = leads.filter(l => {
        const matchSearch = [l.name, l.email, l.phone, l.message].join(' ').toLowerCase().includes(search.toLowerCase());
        const matchSource = filterSource === 'all' || l.source === filterSource;
        return matchSearch && matchSource;
    }).reverse();

    const exportCSV = () => {
        window.open('/api/leads?format=csv', '_blank');
    };

    const sourceLabel = (s: string) => s.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div>
                    <div className={styles.logo}>◈ Housen Admin</div>
                    <h1 className={styles.title}>Lead Dashboard</h1>
                    <p className={styles.sub}>{leads.length} total leads captured</p>
                </div>
                <button className={styles.exportBtn} onClick={exportCSV}>
                    ⬇ Export CSV
                </button>
            </div>

            <div className={styles.controls}>
                <input
                    className={styles.search}
                    type="search"
                    placeholder="Search by name, email, phone..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <select
                    className={styles.filter}
                    value={filterSource}
                    onChange={e => setFilterSource(e.target.value)}
                >
                    {sources.map(s => (
                        <option key={s} value={s}>{s === 'all' ? 'All Sources' : sourceLabel(s)}</option>
                    ))}
                </select>
            </div>

            {loading ? (
                <div className={styles.loading}>Loading leads...</div>
            ) : filtered.length === 0 ? (
                <div className={styles.empty}>
                    <div className={styles.emptyIcon}>📋</div>
                    <h3>No leads yet</h3>
                    <p>Submit a form on the website and leads will appear here.</p>
                </div>
            ) : (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Source</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(lead => (
                                <tr key={lead.id}>
                                    <td className={styles.dateCell}>
                                        {new Date(lead.createdAt).toLocaleDateString('en-GB', {
                                            day: '2-digit', month: 'short', year: 'numeric'
                                        })}
                                        <br />
                                        <span className={styles.time}>
                                            {new Date(lead.createdAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </td>
                                    <td className={styles.nameCell}>{lead.name}</td>
                                    <td>
                                        <a href={`mailto:${lead.email}`} className={styles.link}>{lead.email}</a>
                                    </td>
                                    <td>
                                        {lead.phone
                                            ? <a href={`tel:${lead.phone}`} className={styles.link}>{lead.phone}</a>
                                            : <span className={styles.empty2}>—</span>
                                        }
                                    </td>
                                    <td>
                                        <span className={`${styles.sourceBadge} ${styles[`src_${lead.source}`]}`}>
                                            {sourceLabel(lead.source)}
                                        </span>
                                    </td>
                                    <td className={styles.msgCell}>{lead.message || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
