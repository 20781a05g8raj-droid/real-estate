'use client';
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating button */}
            <button
                className={styles.floatBtn}
                onClick={() => setOpen(true)}
                aria-label="Get a Callback"
            >
                <span className={styles.floatIcon}>📞</span>
                <span className={styles.floatLabel}>Get a Callback</span>
            </button>

            {/* Backdrop */}
            {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}

            {/* Modal */}
            <div className={`${styles.modal} ${open ? styles.modalOpen : ''}`}>
                <div className={styles.modalHeader}>
                    <div>
                        <h3 className={styles.modalTitle}>Request a Callback</h3>
                        <p className={styles.modalSub}>Our experts will contact you within 2 hours.</p>
                    </div>
                    <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">✕</button>
                </div>
                <div className={styles.modalBody}>
                    <ContactForm source="floating_cta" compact onSuccess={() => setTimeout(() => setOpen(false), 2000)} />
                </div>
            </div>
        </>
    );
}
