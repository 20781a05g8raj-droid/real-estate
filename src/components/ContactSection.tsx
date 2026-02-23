import React from 'react';
import ContactForm from './ContactForm';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    return (
        <section className={styles.section} id="contact">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <span className={styles.eyebrow}>Free Consultation</span>
                        <h2 className={styles.title}>
                            Book Your <br />
                            <em>Dream Home</em> Tour
                        </h2>
                        <p className={styles.desc}>
                            Connect with our expert consultants and get personalised guidance
                            for buying, renting, or investing in premium real estate.
                        </p>
                        <ul className={styles.bullets}>
                            <li>✓ No commitment required</li>
                            <li>✓ Response within 24 hours</li>
                            <li>✓ Experts across all property types</li>
                        </ul>
                    </div>
                    <div className={styles.formWrap}>
                        <ContactForm source="homepage" />
                    </div>
                </div>
            </div>
        </section>
    );
}
