import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="home" data-cursor="expand">
            <div className={styles.overlay}></div>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Housen
                    </h1>
                    <Link href="/properties" className={styles.subtitle}>
                        <span>Explore Properties ↗</span>
                    </Link>

                    <div className={styles.infoCards}>
                        <div className={styles.infoCard}>
                            <p>Using stone, sand-finished concrete, and natural wood, the design echoes the shoreline&apos;s natural textures.</p>
                        </div>
                    </div>

                    <div className={styles.bottomBar}>
                        <span className={styles.tagline}>WE BUILD MODERN HOUSES IN USA</span>
                        <div className={styles.socials}>
                            <span>f</span>
                            <span>ig</span>
                            <span>x</span>
                            <span>in</span>
                        </div>
                    </div>

                    <div className={styles.scrollDot} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
