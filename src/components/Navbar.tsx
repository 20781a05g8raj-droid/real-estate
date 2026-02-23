"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Agents', href: '/agents' },
    { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const isHome = pathname === '/';

    return (
        <>
            <nav className={`${styles.nav} ${scrolled || !isHome ? styles.scrolled : ''}`}>
                <div className={`${styles.container} container`}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoIcon}>◈</span>
                        <span className={styles.logoText}>Housen</span>
                    </Link>

                    <div className={styles.links}>
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={pathname === link.href ? styles.activeLink : ''}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className={styles.rightGroup}>
                        <Link href="/properties" className={styles.bookBtn}>
                            Book Now <span className={styles.arrow}>↗</span>
                        </Link>
                        <button
                            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span /><span /><span />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileLinks}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={pathname === link.href ? styles.activeMobileLink : ''}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/properties" className={styles.mobileBookBtn}>
                        Book Now ↗
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
