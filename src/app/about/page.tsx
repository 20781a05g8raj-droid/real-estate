import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | HOUSEN – Modern Premium Living',
    description: 'Learn about HOUSEN — our story, mission, team, and the values that drive us to deliver exceptional real estate experiences.',
};

const TIMELINE = [
    { year: '2014', title: 'Founded in Dubai', desc: 'Housen was born with a vision to make luxury real estate accessible, transparent, and enjoyable.' },
    { year: '2017', title: 'Expanded to 5 Cities', desc: 'We grew our footprint across the UAE, tapping into Abu Dhabi, Sharjah, and beyond.' },
    { year: '2020', title: 'Digital-First Platform', desc: 'Launched our AI-powered property search and virtual tour platform during a pivotal era.' },
    { year: '2023', title: 'Global Partnerships', desc: 'Formed alliances with top developers: Emaar, Nakheel, Damac — serving clients in 30+ countries.' },
    { year: '2026', title: 'Today', desc: 'Over 20,000 happy clients, 300+ successful transactions, and a team of 50+ elite agents.' },
];

const TEAM = [
    {
        name: 'Victor Figueiredo',
        role: 'Founder & CEO',
        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
        desc: '15+ years shaping the Dubai luxury real estate market.',
    },
    {
        name: 'Priya Sharma',
        role: 'Head of Sales',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
        desc: 'Driven by data and client success across 200+ transactions.',
    },
    {
        name: 'Michael Chang',
        role: 'Chief Technology Officer',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
        desc: 'Building the platform that powers smarter property search.',
    },
    {
        name: 'Sophia Reeves',
        role: 'Off-Plan Expert',
        img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
        desc: 'Specialist in new developments and investment strategy.',
    },
];

const VALUES = [
    { icon: '🏅', title: 'Transparency', desc: 'We believe every client deserves clear, honest information at every step of their journey.' },
    { icon: '💡', title: 'Innovation', desc: 'From AI search to virtual tours, we leverage technology to redefine how people find homes.' },
    { icon: '⭐', title: 'Excellence', desc: 'We hold ourselves to the highest professional standards in property and client service.' },
    { icon: '🤝', title: 'Trust', desc: 'Long-term relationships built on integrity, respect, and consistent results.' },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroBg} />
                    <div className={`${styles.heroContent} container`}>
                        <span className={styles.eyebrow}>Our Story</span>
                        <h1>Redefining Real Estate,<br /><em>One Home at a Time.</em></h1>
                        <p>
                            We are a team of passionate people dedicated to making property discovery effortless,
                            transparent, and human-centered. From Dubai Marina to Downtown Manhattan, we connect
                            people with spaces that matter.
                        </p>
                        <Link href="/properties" className={styles.heroBtn}>Explore Properties ↗</Link>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className={styles.missionSection}>
                    <div className="container">
                        <div className={styles.missionGrid}>
                            <div className={styles.missionCard}>
                                <span className={styles.missionIcon}>🎯</span>
                                <h2>Our Mission</h2>
                                <p>
                                    To make real estate buying, selling, and renting simple, trustworthy, and enjoyable
                                    for everyone — regardless of budget, background, or market knowledge.
                                </p>
                            </div>
                            <div className={styles.missionCard}>
                                <span className={styles.missionIcon}>🔭</span>
                                <h2>Our Vision</h2>
                                <p>
                                    To be the world's most trusted property platform — where data, design, and dedication
                                    converge to deliver extraordinary outcomes for our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className={styles.statsSection}>
                    <div className="container">
                        <div className={styles.statsGrid}>
                            {[
                                { num: '20k+', label: 'Happy Clients' },
                                { num: '300+', label: 'Properties Sold' },
                                { num: '10+', label: 'Years Experience' },
                                { num: '99%', label: 'Satisfaction Rate' },
                            ].map((s) => (
                                <div key={s.label} className={styles.statCard}>
                                    <h3>{s.num}</h3>
                                    <p>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className={styles.timelineSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Our <em>Journey</em></h2>
                            <p>From a single office in Dubai to a global real estate network.</p>
                        </div>
                        <div className={styles.timeline}>
                            {TIMELINE.map((item, i) => (
                                <div key={item.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                                    <div className={styles.timelineCard}>
                                        <span className={styles.timelineYear}>{item.year}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className={styles.timelineDot} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className={styles.teamSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>Meet the <em>Team</em></h2>
                            <p>The people who make Housen extraordinary.</p>
                        </div>
                        <div className={styles.teamGrid}>
                            {TEAM.map((member) => (
                                <div key={member.name} className={styles.teamCard}>
                                    <div className={styles.teamImgWrap}>
                                        <img src={member.img} alt={member.name} />
                                    </div>
                                    <div className={styles.teamInfo}>
                                        <h3>{member.name}</h3>
                                        <span className={styles.teamRole}>{member.role}</span>
                                        <p>{member.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className={styles.valuesSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2>What We <em>Stand For</em></h2>
                            <p>The principles that guide every decision we make.</p>
                        </div>
                        <div className={styles.valuesGrid}>
                            {VALUES.map((v) => (
                                <div key={v.title} className={styles.valueCard}>
                                    <span className={styles.valueIcon}>{v.icon}</span>
                                    <h3>{v.title}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaBox}>
                            <h2>Ready to find your dream home?</h2>
                            <p>Let our experts guide you every step of the way.</p>
                            <div className={styles.ctaBtns}>
                                <Link href="/properties" className={styles.ctaBtnPrimary}>Browse Properties ↗</Link>
                                <Link href="/agents" className={styles.ctaBtnSecondary}>Meet Our Agents</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
