"use client";
import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PropertyCard from '../../components/PropertyCard';
import { properties } from '../../data/properties';
import styles from './page.module.css';

const BED_OPTIONS = ['Any', 'Studio', '1', '2', '3', '4', '5+'];

function PropertiesContent() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get('q') || '';
    const initialType = searchParams.get('type') || 'All';

    const [search, setSearch] = useState(initialQuery);
    const [typeFilter, setTypeFilter] = useState<string>(
        ['Buy', 'Rent', 'New Project'].includes(initialType) ? initialType : 'All'
    );
    const [bedFilter, setBedFilter] = useState('Any');
    const [sort, setSort] = useState('newest');

    const filtered = properties
        .filter((p) => {
            const matchesQuery = search
                ? p.title.toLowerCase().includes(search.toLowerCase()) ||
                p.location.toLowerCase().includes(search.toLowerCase())
                : true;
            const matchesType = typeFilter === 'All' ? true : p.type === typeFilter;
            const matchesBeds =
                bedFilter === 'Any' ? true :
                    bedFilter === 'Studio' ? p.beds === 0 :
                        bedFilter === '5+' ? p.beds >= 5 :
                            p.beds === parseInt(bedFilter);
            return matchesQuery && matchesType && matchesBeds;
        });

    return (
        <>
            {/* Page Header */}
            <div className={styles.header}>
                <div className="container">
                    <span className={styles.eyebrow}>LISTINGS</span>
                    <h1 className={styles.title}>Explore Properties</h1>
                    <p className={styles.subtitle}>
                        {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} available
                        {typeFilter !== 'All' && ` · ${typeFilter}`}
                        {search && ` · "${search}"`}
                    </p>
                </div>
            </div>

            <div className="container">
                <div className={styles.layout}>
                    {/* Sidebar Filters */}
                    <aside className={styles.sidebar}>
                        <div className={styles.filterSection}>
                            <h3 className={styles.filterTitle}>Search</h3>
                            <input
                                className={styles.filterInput}
                                type="text"
                                placeholder="City, area, or project..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className={styles.filterSection}>
                            <h3 className={styles.filterTitle}>Property Type</h3>
                            <div className={styles.filterChips}>
                                {['All', 'Buy', 'Rent', 'New Project'].map((t) => (
                                    <button
                                        key={t}
                                        className={`${styles.chip} ${typeFilter === t ? styles.chipActive : ''}`}
                                        onClick={() => setTypeFilter(t)}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.filterSection}>
                            <h3 className={styles.filterTitle}>Bedrooms</h3>
                            <div className={styles.filterChips}>
                                {BED_OPTIONS.map((b) => (
                                    <button
                                        key={b}
                                        className={`${styles.chip} ${bedFilter === b ? styles.chipActive : ''}`}
                                        onClick={() => setBedFilter(b)}
                                    >
                                        {b === 'Studio' ? '0 / Studio' : b}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.filterSection}>
                            <h3 className={styles.filterTitle}>Sort By</h3>
                            <select
                                className={styles.filterSelect}
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <option value="newest">Newest First</option>
                                <option value="price_asc">Price: Low to High</option>
                                <option value="price_desc">Price: High to Low</option>
                            </select>
                        </div>

                        <button
                            className={styles.clearBtn}
                            onClick={() => { setSearch(''); setTypeFilter('All'); setBedFilter('Any'); setSort('newest'); }}
                        >
                            Clear All Filters
                        </button>
                    </aside>

                    {/* Results */}
                    <div className={styles.results}>
                        <div className={styles.resultsHeader}>
                            <p className={styles.resultCount}>{filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found</p>
                        </div>

                        {filtered.length > 0 ? (
                            <div className={styles.grid}>
                                {filtered.map((prop) => (
                                    <PropertyCard
                                        key={prop.id}
                                        id={prop.id}
                                        title={prop.title}
                                        location={prop.location}
                                        price={prop.price}
                                        beds={prop.beds}
                                        baths={prop.baths}
                                        area={prop.area}
                                        image={prop.images[0]}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className={styles.noResults}>
                                <div className={styles.noResultsIcon}>🔍</div>
                                <h3>No properties found</h3>
                                <p>Try adjusting your search or filter criteria to see more results.</p>
                                <button className={styles.resetBtn} onClick={() => { setSearch(''); setTypeFilter('All'); setBedFilter('Any'); }}>
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default function PropertiesPage() {
    return (
        <div className={styles.page} suppressHydrationWarning>
            <Navbar />
            <Suspense fallback={
                <div style={{ padding: '200px 0', textAlign: 'center', color: '#6b7280' }}>
                    Loading properties...
                </div>
            }>
                <PropertiesContent />
            </Suspense>
            <Footer />
        </div>
    );
}
