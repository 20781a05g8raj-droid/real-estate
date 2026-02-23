"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './SearchFilter.module.css';

const SearchFilterContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize state from URL params if present
    const initialQuery = searchParams.get('q') || '';
    const initialTypeParam = searchParams.get('type') || 'Buy';

    // Map URL param back to tab state
    const initialTab = initialTypeParam.toLowerCase().includes('buy') ? 'buy'
        : initialTypeParam.toLowerCase().includes('rent') ? 'rent'
            : 'new';

    const [activeTab, setActiveTab] = useState(initialTab);
    const [query, setQuery] = useState(initialQuery);

    // Map URL param back to select state (simplified for demo)
    const [type, setType] = useState('Apartment');

    const handleSearch = () => {
        const typeParam = activeTab === 'buy' ? 'Buy' : activeTab === 'rent' ? 'Rent' : 'New Project';
        router.push(`/properties?q=${encodeURIComponent(query)}&type=${encodeURIComponent(typeParam)}`);
    };

    return (
        <div className={styles.wrapper}>
            <div className={`${styles.container} glass`}>
                <div className={styles.tabs}>
                    <button
                        className={activeTab === 'buy' ? styles.active : ''}
                        onClick={() => setActiveTab('buy')}
                    >
                        BUY
                    </button>
                    <button
                        className={activeTab === 'rent' ? styles.active : ''}
                        onClick={() => setActiveTab('rent')}
                    >
                        RENT
                    </button>
                    <button
                        className={activeTab === 'new' ? styles.active : ''}
                        onClick={() => setActiveTab('new')}
                    >
                        NEW PROJECTS
                    </button>
                </div>

                <div className={styles.searchBar}>
                    <div className={styles.inputGroup}>
                        <label>LOCATION</label>
                        <input
                            type="text"
                            placeholder="Enter city, locality or project"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.inputGroup}>
                        <label>PROPERTY TYPE</label>
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option>Apartment</option>
                            <option>Villa</option>
                            <option>Townhouse</option>
                            <option>Penthouse</option>
                        </select>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.inputGroup}>
                        <label>BUDGET</label>
                        <select>
                            <option>Min. Budget</option>
                            <option>$500k</option>
                            <option>$1M</option>
                            <option>$1.5M+</option>
                        </select>
                    </div>

                    <button className={styles.searchBtn} onClick={handleSearch}>
                        SEARCH
                    </button>
                </div>
            </div>
        </div>
    );
};

const SearchFilter = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className={styles.wrapper}>
                <div className={`${styles.container} glass`}>
                    <div style={{ padding: '40px', textAlign: 'center', opacity: 0.7 }}>Loading search parameters...</div>
                </div>
            </div>
        );
    }

    return (
        <Suspense fallback={
            <div className={styles.wrapper}>
                <div className={`${styles.container} glass`}>
                    <div style={{ padding: '40px', textAlign: 'center', opacity: 0.7 }}>Loading search parameters...</div>
                </div>
            </div>
        }>
            <SearchFilterContent />
        </Suspense>
    );
};

export default SearchFilter;
