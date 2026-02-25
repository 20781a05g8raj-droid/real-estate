'use client';
import React from 'react';
import styles from './CTA.module.css';
import { useScrollReveal } from '@/lib/useScrollReveal';

const CTA = () => {
    const { ref, revealed } = useScrollReveal();

    return (
        <section ref={ref} className={`${styles.section} ${revealed ? 'revealed' : 'reveal'}`}>
            <div className={styles.bg}>
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" alt="Modern House" />
                <div className={styles.overlay}></div>
            </div>

            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Start Your Journey to <br /> Smarter <i>Living</i></h2>
                    <p className={styles.desc}>From modern apartments to luxury estates your perfect home awaits.</p>
                    <button className={styles.btn}>Explore Homes ↗</button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
