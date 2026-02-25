"use client";
import React, { useState } from 'react';
import styles from './Insights.module.css';
import { useScrollReveal } from '@/lib/useScrollReveal';

const INSIGHTS = [
    {
        image: 'https://images.unsplash.com/photo-1600585154526-990dcea4d4d9?q=80&w=2070&auto=format&fit=crop',
        title: 'Smart Real Estate Insights',
        description: 'Discover a new way to explore real estate with AI-powered insights and aerial views that help you find, compare, and invest smarter.'
    },
    {
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop',
        title: 'Market Trends 2025',
        description: 'Stay ahead of the curve with our comprehensive analysis of the real estate market performance and future predictions.'
    }
];

const Insights = () => {
    const [current, setCurrent] = useState(0);
    const { ref, revealed } = useScrollReveal();

    const next = () => setCurrent((current + 1) % INSIGHTS.length);
    const prev = () => setCurrent((current - 1 + INSIGHTS.length) % INSIGHTS.length);

    return (
        <section ref={ref} className={`${styles.section} ${revealed ? 'revealed' : 'reveal'}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <img src={INSIGHTS[current].image} alt="Insight" className={styles.bgImage} />
                    <div className={styles.overlay}></div>

                    <div className={styles.content}>
                        <div className={styles.miniImages}>
                            {INSIGHTS.map((insight, i) => (
                                <div key={i} className={`${styles.miniImg} ${i === current ? styles.active : ''}`} onClick={() => setCurrent(i)}>
                                    <img src={insight.image} alt="Thumb" />
                                </div>
                            ))}
                        </div>

                        <div className={styles.mainText}>
                            <h2 className={styles.title}>{INSIGHTS[current].title}</h2>
                            <p className={styles.desc}>{INSIGHTS[current].description}</p>

                            <div className={styles.controls}>
                                <span>{current + 1} / {INSIGHTS.length}</span>
                                <div className={styles.btns}>
                                    <button onClick={prev}>←</button>
                                    <button onClick={next}>→</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Insights;
