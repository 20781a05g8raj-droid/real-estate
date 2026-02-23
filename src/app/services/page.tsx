import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | HOUSEN – Modern Premium Living',
    description: 'Explore the full range of Housen real estate services — from buying and selling to mortgage advisory, legal support, and property management.',
};

const SERVICES = [
    {
        icon: '🏠',
        title: 'Property Buying Assistance',
        desc: 'Our expert buyer agents guide you from shortlisting to keys-in-hand. We handle negotiations, due diligence, and paperwork so you can focus on finding the right home.',
        features: ['Market valuation', 'Negotiation support', 'Legal review', 'Seamless closing'],
    },
    {
        icon: '🏷️',
        title: 'Property Selling',
        desc: 'Maximize your property\'s value with our proven selling strategy — professional photography, strategic marketing, and a wide buyer network that delivers fast, profitable sales.',
        features: ['Free valuation', 'Professional photography', 'Multi-channel marketing', 'Offer management'],
    },
    {
        icon: '🗝️',
        title: 'Rental Management',
        desc: 'We take the stress out of being a landlord. From finding qualified tenants to handling maintenance, rent collection, and renewals — we manage it all.',
        features: ['Tenant screening', 'Rent collection', 'Maintenance coordination', 'Annual reporting'],
    },
    {
        icon: '🏦',
        title: 'Mortgage & Finance Advisory',
        desc: 'Our certified mortgage advisors compare products from 20+ lenders to secure you the best rates and repayment terms tailored to your financial profile.',
        features: ['Free consultation', 'Pre-approval in 24 hrs', 'Best-rate guarantee', 'All lenders compared'],
    },
    {
        icon: '📊',
        title: 'Property Valuation',
        desc: 'Get an accurate, data-driven valuation of any property in the UAE market. Backed by real transaction data, our reports are trusted by banks and developers.',
        features: ['Certified valuation', 'Instant estimate online', 'Full market report', 'Investment analysis'],
    },
    {
        icon: '⚖️',
        title: 'Legal & Documentation',
        desc: 'Navigate complex property laws with confidence. Our legal team handles title transfers, NOC processing, RERA compliance, and contract reviews.',
        features: ['Title deed transfer', 'NOC processing', 'RERA compliance', 'Contract review'],
    },
];

const PROCESS = [
    { step: '01', title: 'Consultation', desc: 'Tell us your goals — buying, selling, renting, or investing. We listen and craft a personalized plan.' },
    { step: '02', title: 'Research & Shortlist', desc: 'We tap our network and database to curate a list of properties or buyers that perfectly match your criteria.' },
    { step: '03', title: 'View & Negotiate', desc: 'We arrange viewings and represent your best interests with strategic negotiation to secure the finest outcome.' },
    { step: '04', title: 'Close & Celebrate', desc: 'We manage all paperwork, legal checks, and final closing — from contract to keys, we\'ve got you covered.' },
];

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroBg} />
                    <div className={`${styles.heroContent} container`}>
                        <span className={styles.eyebrow}>What We Offer</span>
                        <h1>Full-Service Real Estate,<br /><em>Built Around You.</em></h1>
                        <p>
                            Whether you're a first-time buyer, seasoned investor, or a landlord looking for peace of mind —
                            Housen provides end-to-end services to make every property journey exceptional.
                        </p>
                        <Link href="/agents" className={styles.heroBtn}>Talk to an Agent ↗</Link>
                    </div>
                </section>

                {/* Services Grid */}
                <section className={styles.servicesSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Our <em>Services</em></h2>
                            <p>Everything you need under one roof.</p>
                        </div>
                        <div className={styles.servicesGrid}>
                            {SERVICES.map((svc) => (
                                <div key={svc.title} className={styles.serviceCard}>
                                    <div className={styles.serviceIcon}>{svc.icon}</div>
                                    <h3>{svc.title}</h3>
                                    <p>{svc.desc}</p>
                                    <ul className={styles.featureList}>
                                        {svc.features.map((f) => (
                                            <li key={f}><span className={styles.check}>✓</span> {f}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How it Works */}
                <section className={styles.processSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>How It <em>Works</em></h2>
                            <p>A simple, structured process from start to success.</p>
                        </div>
                        <div className={styles.processGrid}>
                            {PROCESS.map((p, i) => (
                                <div key={p.step} className={styles.processCard}>
                                    <div className={styles.processStep}>{p.step}</div>
                                    {i < PROCESS.length - 1 && <div className={styles.processLine} />}
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us strip */}
                <section className={styles.whySection}>
                    <div className="container">
                        <div className={styles.whyGrid}>
                            {[
                                { num: '20k+', label: 'Happy Clients' },
                                { num: '300+', label: 'Deals Closed' },
                                { num: '50+', label: 'Expert Agents' },
                                { num: '24h', label: 'Response Time' },
                            ].map((s) => (
                                <div key={s.label} className={styles.whyStat}>
                                    <h3>{s.num}</h3>
                                    <p>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaBox}>
                            <div className={styles.ctaText}>
                                <h2>Ready to get started?</h2>
                                <p>Book a free, no-obligation consultation with one of our experts today.</p>
                            </div>
                            <div className={styles.ctaBtns}>
                                <Link href="/agents" className={styles.ctaBtnPrimary}>Book a Consultation ↗</Link>
                                <Link href="/properties" className={styles.ctaBtnSecondary}>Browse Listings</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
