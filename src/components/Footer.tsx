"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleNewsletter = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setNewsletterStatus('loading');
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: 'Newsletter Subscriber', email, source: 'newsletter' }),
            });
            setNewsletterStatus(res.ok ? 'success' : 'error');
            if (res.ok) setEmail('');
        } catch {
            setNewsletterStatus('error');
        }
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>◈ Housen</div>
                        <p className={styles.desc}>
                            Your trusted partner in premium real estate. Connecting people with spaces they love.
                        </p>
                        <p className={styles.email}>info@housenrealty.com</p>
                    </div>

                    <div className={styles.linksGroups}>
                        <div className={styles.group}>
                            <h4>NAVIGATION</h4>
                            <Link href="/">Home</Link>
                            <Link href="/properties">Properties</Link>
                            <Link href="/about">About</Link>
                            <Link href="/agents">Agents</Link>
                            <Link href="/services">Services</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                        <div className={styles.group}>
                            <h4>PROPERTY TYPES</h4>
                            <Link href="/properties?type=Buy">Buy</Link>
                            <Link href="/properties?type=Rent">Rent</Link>
                            <Link href="/properties?type=New+Project">New Projects</Link>
                        </div>
                        <div className={styles.group}>
                            <h4>SOCIALS</h4>
                            <a href="#" rel="noreferrer">Twitter / X</a>
                            <a href="#" rel="noreferrer">LinkedIn</a>
                            <a href="#" rel="noreferrer">Instagram</a>
                            <a href="#" rel="noreferrer">Facebook</a>
                        </div>
                    </div>
                </div>

                <div className={styles.newsletter}>
                    <div className={styles.newsletterText}>
                        <h4>NEWSLETTER</h4>
                        <p>// RECEIVE UPDATES AND EXCLUSIVE LISTINGS FROM US</p>
                    </div>
                    {newsletterStatus === 'success' ? (
                        <p className={styles.newsletterSuccess}>✓ You&apos;re subscribed! Thanks for joining.</p>
                    ) : (
                        <form className={styles.form} onSubmit={handleNewsletter}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" disabled={newsletterStatus === 'loading'}>
                                {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe ↗'}
                            </button>
                        </form>
                    )}
                    {newsletterStatus === 'error' && (
                        <p className={styles.newsletterError}>Something went wrong. Please try again.</p>
                    )}
                </div>

                <div className={styles.bigLogo}>
                    HOUSEN
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 HOUSEN REALTY // ALL RIGHTS RESERVED</p>
                    <p>WE RESPECT YOUR PRIVACY</p>
                    <p>CRAFTED WITH EXCELLENCE</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
