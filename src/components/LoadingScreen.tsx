'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHidden(true), 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.loader} ${hidden ? styles.hidden : ''}`}>
            <div className={styles.logoWrap}>
                <span className={styles.icon}>◈</span>
                <span className={styles.brand}>Housen</span>
            </div>
            <span className={styles.tagline}>Loading luxury experience</span>
            <div className={styles.barWrap}>
                <div className={styles.bar} />
            </div>
        </div>
    );
}
