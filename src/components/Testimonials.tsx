import React from 'react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Clients Speak <i>Boldly.</i></h2>
                    <div className={styles.navBtns}>
                        <button className={styles.btn}>←</button>
                        <button className={`${styles.btn} ${styles.active}`}>→</button>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.imageCol}>
                        <img src="https://images.unsplash.com/photo-1628592102751-ba83b03bc64a?q=80&w=2070&auto=format&fit=crop" alt="House" className={styles.mainImg} />
                    </div>

                    <div className={styles.quoteCol}>
                        <div className={styles.quoteIcon}>“</div>
                        <p className={styles.quote}>
                            "The entire process was flawless. Their attention to detail and understanding of modern aesthetics is second to none. We found our dream home faster than we ever thought possible"
                        </p>

                        <div className={styles.author}>
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="User" />
                            <div>
                                <h4>Savannah Nguyen</h4>
                                <span>Property Investor</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sideImg}>
                        <img src="https://images.unsplash.com/photo-1600607687940-47a0f9259017?q=80&w=2070&auto=format&fit=crop" alt="Small House" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
