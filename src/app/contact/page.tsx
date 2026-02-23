import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | HOUSEN – Modern Premium Living',
    description: 'Get in touch with the HOUSEN team. We\'re here to help you find your dream home, answer queries, or schedule a property viewing.',
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroBg} />
                    <div className={`${styles.heroContent} container`}>
                        <span className={styles.eyebrow}>Get in Touch</span>
                        <h1>Let&#39;s Find Your <br /><em>Perfect Property</em></h1>
                        <p>Our team of experts is ready to help you every step of the way.</p>
                    </div>
                </section>

                {/* Main content */}
                <section className={styles.contentSection}>
                    <div className="container">
                        <div className={styles.grid}>
                            {/* Info */}
                            <div className={styles.info}>
                                <h2 className={styles.infoTitle}>Our Office</h2>
                                <div className={styles.infoCards}>
                                    <div className={styles.infoCard}>
                                        <div className={styles.infoIcon}>📍</div>
                                        <div>
                                            <h4>Address</h4>
                                            <p>Marina Plaza, Level 14<br />Dubai Marina, UAE</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoCard}>
                                        <div className={styles.infoIcon}>📞</div>
                                        <div>
                                            <h4>Phone</h4>
                                            <p>+971 4 000 0000</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoCard}>
                                        <div className={styles.infoIcon}>✉️</div>
                                        <div>
                                            <h4>Email</h4>
                                            <p>info@housenrealty.com</p>
                                        </div>
                                    </div>
                                    <div className={styles.infoCard}>
                                        <div className={styles.infoIcon}>🕐</div>
                                        <div>
                                            <h4>Working Hours</h4>
                                            <p>Mon – Sat: 9am – 7pm<br />Sunday: By Appointment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className={styles.formPanel}>
                                <h2 className={styles.formTitle}>Send us a Message</h2>
                                <p className={styles.formSub}>Fill in the form and we&#39;ll get back to you within 24 hours.</p>
                                <ContactForm source="contact_page" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
