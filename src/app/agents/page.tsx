import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Agents | HOUSEN – Modern Premium Living',
    description: 'Meet the Housen team of elite real estate agents — certified, experienced, and committed to delivering exceptional results for every client.',
};

const AGENTS = [
    {
        name: 'Victor Figueiredo',
        role: 'Senior Property Consultant',
        specialization: 'Luxury Villas & Waterfront',
        experience: '12 Years',
        deals: '180+',
        rating: '4.9',
        phone: '+971 50 123 4567',
        email: 'victor.f@housen.com',
        whatsapp: '971501234567',
        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        languages: ['English', 'Portuguese', 'Arabic'],
        badge: 'Top Performer',
    },
    {
        name: 'Priya Sharma',
        role: 'Luxury Property Specialist',
        specialization: 'Dubai Marina & Downtown',
        experience: '9 Years',
        deals: '145+',
        rating: '4.8',
        phone: '+971 55 234 5678',
        email: 'priya.s@housen.com',
        whatsapp: '971552345678',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
        languages: ['English', 'Hindi', 'Urdu'],
        badge: 'Client Favorite',
    },
    {
        name: 'Michael Chang',
        role: 'Investment Property Advisor',
        specialization: 'Off-Plan & Investment',
        experience: '8 Years',
        deals: '130+',
        rating: '4.8',
        phone: '+971 56 345 6789',
        email: 'michael.c@housen.com',
        whatsapp: '971563456789',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
        languages: ['English', 'Mandarin'],
        badge: 'Investment Expert',
    },
    {
        name: 'Sophia Reeves',
        role: 'Off-Plan Project Specialist',
        specialization: 'New Developments & ROI',
        experience: '7 Years',
        deals: '110+',
        rating: '4.9',
        phone: '+971 54 456 7890',
        email: 'sophia.r@housen.com',
        whatsapp: '971544567890',
        img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
        languages: ['English', 'French'],
        badge: 'Off-Plan Expert',
    },
    {
        name: 'James Okonkwo',
        role: 'Residential Sales Agent',
        specialization: 'JVC, JBR & Emerging Areas',
        experience: '5 Years',
        deals: '80+',
        rating: '4.7',
        phone: '+971 58 567 8901',
        email: 'james.o@housen.com',
        whatsapp: '971585678901',
        img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
        languages: ['English', 'Yoruba'],
        badge: 'Rising Star',
    },
    {
        name: 'Leila Al Rashid',
        role: 'Commercial & Rental Expert',
        specialization: 'Business Bay & DIFC',
        experience: '10 Years',
        deals: '160+',
        rating: '4.9',
        phone: '+971 52 678 9012',
        email: 'leila.r@housen.com',
        whatsapp: '971526789012',
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
        languages: ['Arabic', 'English', 'French'],
        badge: 'Commercial Specialist',
    },
];

export default function AgentsPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroBg} />
                    <div className={`${styles.heroContent} container`}>
                        <span className={styles.eyebrow}>Our People</span>
                        <h1>Meet the Experts<br /><em>Behind Every Deal.</em></h1>
                        <p>
                            Our agents are more than brokers — they are advisors, negotiators, and advocates.
                            With combined experience across 1,000+ transactions, your dream property is in the right hands.
                        </p>
                    </div>
                </section>

                {/* Agents Grid */}
                <section className={styles.agentsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Our <em>Elite</em> Agents</h2>
                            <p>Certified, experienced, and always in your corner.</p>
                        </div>
                        <div className={styles.agentsGrid}>
                            {AGENTS.map((agent) => (
                                <div key={agent.name} className={styles.agentCard}>
                                    <div className={styles.agentImageWrap}>
                                        <img src={agent.img} alt={agent.name} />
                                        <span className={styles.badge}>{agent.badge}</span>
                                    </div>
                                    <div className={styles.agentBody}>
                                        <div className={styles.agentHead}>
                                            <div>
                                                <h3>{agent.name}</h3>
                                                <p className={styles.agentRole}>{agent.role}</p>
                                            </div>
                                            <div className={styles.rating}>
                                                ⭐ {agent.rating}
                                            </div>
                                        </div>

                                        <p className={styles.specialization}>
                                            <span className={styles.specIcon}>📍</span> {agent.specialization}
                                        </p>

                                        <div className={styles.agentStats}>
                                            <div className={styles.agentStat}>
                                                <span className={styles.statNum}>{agent.deals}</span>
                                                <span className={styles.statLabel}>Deals</span>
                                            </div>
                                            <div className={styles.agentStat}>
                                                <span className={styles.statNum}>{agent.experience}</span>
                                                <span className={styles.statLabel}>Experience</span>
                                            </div>
                                            <div className={styles.agentStat}>
                                                <span className={styles.statNum}>{agent.languages.length}</span>
                                                <span className={styles.statLabel}>Languages</span>
                                            </div>
                                        </div>

                                        <div className={styles.languages}>
                                            {agent.languages.map((lang) => (
                                                <span key={lang} className={styles.langTag}>{lang}</span>
                                            ))}
                                        </div>

                                        <div className={styles.agentActions}>
                                            <a href={`tel:${agent.phone}`} className={`${styles.actionBtn} ${styles.callBtn}`}>
                                                📞 Call
                                            </a>
                                            <a href={`https://wa.me/${agent.whatsapp}`} className={`${styles.actionBtn} ${styles.whatsappBtn}`} target="_blank" rel="noreferrer">
                                                💬 WhatsApp
                                            </a>
                                            <a href={`mailto:${agent.email}`} className={`${styles.actionBtn} ${styles.emailBtn}`}>
                                                ✉️ Email
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join the Team CTA */}
                <section className={styles.joinSection}>
                    <div className="container">
                        <div className={styles.joinBox}>
                            <div className={styles.joinLeft}>
                                <h2>Are you a top-performing agent?</h2>
                                <p>
                                    Join the Housen family and access our exclusive listings, powerful tools,
                                    and a support network that helps you close more deals and serve clients better.
                                </p>
                                <ul className={styles.joinBenefits}>
                                    <li>✓ Exclusive premium property access</li>
                                    <li>✓ Marketing & photography support</li>
                                    <li>✓ CRM & AI-powered tools</li>
                                    <li>✓ Competitive commission structure</li>
                                </ul>
                            </div>
                            <div className={styles.joinRight}>
                                <Link href="mailto:careers@housen.com" className={styles.joinBtn}>
                                    Apply to Join ↗
                                </Link>
                                <p className={styles.joinNote}>We review applications within 48 hours</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
