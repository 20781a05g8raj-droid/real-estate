'use client';
import React, { useState } from 'react';
import styles from './ContactForm.module.css';

interface ContactFormProps {
    source: string;
    propertyId?: string;
    compact?: boolean;
    onSuccess?: () => void;
}

export default function ContactForm({ source, propertyId, compact = false, onSuccess }: ContactFormProps) {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, source, propertyId }),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', message: '' });
                onSuccess?.();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.successBox}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Received!</h3>
                <p>Our team will get back to you within 24 hours.</p>
                <button className={styles.resetBtn} onClick={() => setStatus('idle')}>Send Another</button>
            </div>
        );
    }

    return (
        <form className={`${styles.form} ${compact ? styles.compact : ''}`} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
                <div className={styles.field}>
                    <label htmlFor={`cf-name-${source}`}>Full Name</label>
                    <input
                        id={`cf-name-${source}`}
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor={`cf-email-${source}`}>Email Address *</label>
                    <input
                        id={`cf-email-${source}`}
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className={styles.field}>
                <label htmlFor={`cf-phone-${source}`}>Phone Number</label>
                <input
                    id={`cf-phone-${source}`}
                    type="tel"
                    name="phone"
                    placeholder="+1 555 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                />
            </div>
            {!compact && (
                <div className={styles.field}>
                    <label htmlFor={`cf-msg-${source}`}>Message</label>
                    <textarea
                        id={`cf-msg-${source}`}
                        name="message"
                        placeholder="Tell us what you're looking for..."
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                    />
                </div>
            )}
            {status === 'error' && (
                <p className={styles.errorMsg}>Something went wrong. Please try again.</p>
            )}
            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Enquiry ↗'}
            </button>
        </form>
    );
}
