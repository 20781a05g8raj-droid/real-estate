'use client';
import React from 'react';
import PropertyCard from './PropertyCard';
import styles from './FeaturedProperties.module.css';
import { getFeaturedProperties } from '../data/properties';
import { useScrollReveal } from '@/lib/useScrollReveal';

const FeaturedProperties = () => {
    const featuredProps = getFeaturedProperties().slice(0, 3);
    const { ref, revealed } = useScrollReveal(0.08);

    return (
        <section
            ref={ref}
            className={`${styles.section} ${revealed ? 'revealed' : 'reveal'}`}
            id="properties"
        >
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.headerText}>
                        <h2 className={styles.title}>Featured Properties</h2>
                        <p className={styles.description}>
                            We blend design, technology, and trust to connect people with spaces they&apos;ll love.
                        </p>
                    </div>
                    <button className={styles.viewAll}>View All ↗</button>
                </div>

                <div className={styles.grid}>
                    {featuredProps.map((prop) => (
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
            </div>
        </section>
    );
};

export default FeaturedProperties;
