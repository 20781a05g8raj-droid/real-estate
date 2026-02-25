'use client';
import React from 'react';
import styles from './WhyUs.module.css';
import { useScrollReveal } from '@/lib/useScrollReveal';

const REASONS = [
    {
        id: '01',
        title: 'Expert Guidance',
        desc: 'Our experts guide you to smart real estate decisions.',
        img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '02',
        title: 'Premium Listings',
        desc: 'Discover homes, apartments, and investments made for your lifestyle.',
        img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop'
    },
    {
        id: '03',
        title: 'Smart Search',
        desc: 'Smart AI filters that deliver faster, more accurate property results.',
        img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop'
    }
];

const WhyUs = () => {
    const { ref, revealed } = useScrollReveal();

    return (
        <section
            ref={ref}
            className={`${styles.section} ${revealed ? 'revealed' : 'reveal'}`}
        >
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Why <i>Clients</i> Trust Us</h2>
                    <div className={styles.headerRight}>
                        <p>Our mission is simple make your property journey transparent efficient and enjoyable.</p>
                        <button className={styles.seeAll}>See All ↗</button>
                    </div>
                </div>

                <div className={styles.grid}>
                    {REASONS.map((reason) => (
                        <div key={reason.id} className={styles.card}>
                            <div className={styles.imgWrap}>
                                <img src={reason.img} alt={reason.title} />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.titleRow}>
                                    <h3>{reason.title}</h3>
                                    <span className={styles.id}>/{reason.id}</span>
                                </div>
                                <p>{reason.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
