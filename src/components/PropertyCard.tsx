import React from 'react';
import Link from 'next/link';
import styles from './PropertyCard.module.css';

interface PropertProps {
    id?: string;
    image: string;
    title: string;
    price: string;
    beds: number;
    baths: number;
    area: string;
    location: string;
}

const PropertyCard: React.FC<PropertProps> = ({ id, image, title, price, beds, baths, area, location }) => {
    const cardContent = (
        <>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.image} />
                <div className={styles.badge}>FOR SALE</div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.price}>{price}</span>
                </div>
                <p className={styles.location}>{location}</p>
                <div className={styles.details}>
                    <span>{beds} Bed</span>
                    <span>{baths} Bath</span>
                    <span>{area}</span>
                </div>
            </div>
        </>
    );

    return id ? (
        <Link href={`/properties/${id}`} className={styles.card}>
            {cardContent}
        </Link>
    ) : (
        <div className={styles.card}>
            {cardContent}
        </div>
    );
};

export default PropertyCard;
