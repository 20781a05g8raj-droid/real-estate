'use client';
import React from 'react';
import styles from './Stats.module.css';
import { useScrollReveal } from '@/lib/useScrollReveal';

const Stats = () => {
    const { ref, revealed } = useScrollReveal();

    return (
        <section
            ref={ref}
            className={`${styles.section} ${revealed ? 'revealed' : 'reveal'}`}
        >
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.mainContent}>
                        <h2 className={styles.title}>Building Spaces That Tell <i>Stories</i>.</h2>

                        <div className={styles.statsRow}>
                            <div className={styles.stat}>
                                <h3>20k+</h3>
                                <p>Satisfied clients</p>
                                <span className={styles.smallText}>Our satisfied clients are a testament to our quality, creativity, and commitment.</span>
                            </div>
                            <div className={styles.stat}>
                                <h3>300+</h3>
                                <p>Real Estate sales</p>
                                <span className={styles.smallText}>Our satisfied clients are a testament to our quality, creativity, and commitment.</span>
                            </div>
                        </div>

                        <div className={styles.statsRow}>
                            <div className={styles.stat}>
                                <h3>99%</h3>
                                <p>Client satisfaction</p>
                                <span className={styles.smallText}>Our satisfied clients are a testament to our quality, creativity, and commitment.</span>
                            </div>
                            <div className={styles.stat}>
                                <h3>10+</h3>
                                <p>Years Experience</p>
                                <span className={styles.smallText}>Our satisfied clients are a testament to our quality, creativity, and commitment.</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sidebar}>
                        <p>We blend design, technology, and trust to connect people with spaces they&apos;ll love.</p>
                        <button className={styles.readMore}>Read More ↗</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
