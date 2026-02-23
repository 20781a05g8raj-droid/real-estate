import { getPropertyById } from '../../../data/properties';
import styles from './page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MortgageCalculator from '../../../components/MortgageCalculator';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ContactForm from '../../../components/ContactForm';

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = getPropertyById(id);

    if (!property) {
        notFound();
    }

    // TypeScript narrowing — property is guaranteed non-undefined here
    const p = property!;

    return (
        <>
            <Navbar />
            <div className={styles.page} suppressHydrationWarning>
                <div className="container">
                    {/* Breadcrumbs */}
                    <div className={styles.breadcrumbs}>
                        <Link href="/">Home</Link>
                        <span className="material-icons">chevron_right</span>
                        <Link href="/properties">Properties for Sale</Link>
                        <span className="material-icons">chevron_right</span>
                        <span className={styles.currentCrumb}>{p.title}</span>
                    </div>

                    {/* Property Header (Price and Actions) */}
                    <div className={styles.propertyHeader}>
                        <div className={styles.headerLeft}>
                            <div className={styles.price}>{p.price}</div>
                            <div className={styles.paymentEstimate}>
                                Est. Payment INR 387.0K/mo <span className={styles.link}>Get Pre-Approved</span>
                            </div>
                            <h1 className={styles.title}>{p.title}</h1>
                            <div className={styles.quickSpecs}>
                                <span className="material-icons">bed</span> {p.beds} Beds |
                                <span className="material-icons">shower</span> {p.baths} Baths |
                                <span className="material-icons">square_foot</span> {p.area} sqft
                            </div>
                        </div>
                        <div className={styles.headerRight}>
                            <div className={styles.actions}>
                                <button className={`${styles.actionBtn} btn ctaBtnSecondary`}><span className="material-icons" style={{ fontSize: '1.2rem' }}>favorite_border</span> Save</button>
                                <button className={`${styles.actionBtn} btn ctaBtnSecondary`}><span className="material-icons" style={{ fontSize: '1.2rem' }}>share</span> Share</button>
                            </div>
                        </div>
                    </div>

                    {/* Image Gallery Hero */}
                    <div className={styles.gallery}>
                        <div className={styles.mainImage}>
                            <img src={p.images[0]} alt={p.title} />
                            <div className={styles.truCheckBadge}>
                                <span className="material-icons">verified</span> TruCheck™
                            </div>
                            <div className={styles.galleryOverlays}>
                                <button className={`${styles.overlayBtn} btn ctaBtnSecondary`} style={{ color: 'black', background: 'white' }}><span className="material-icons">layers</span> Floor plans</button>
                                <button className={`${styles.overlayBtn} btn ctaBtnSecondary`} style={{ color: 'black', background: 'white' }}><span className="material-icons">map</span> Map</button>
                            </div>
                        </div>
                        <div className={styles.sideImages}>
                            {p.images.slice(1, 4).map((img, idx) => (
                                <div key={idx} className={styles.sideImg}>
                                    <img src={img} alt={`${p.title} - View ${idx + 2}`} />
                                    {idx === 2 && p.images.length > 4 && (
                                        <div className={styles.moreImagesOverlay}>
                                            <span className="material-icons">photo_camera</span>
                                            {p.images.length}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.contentGrid}>
                        {/* Main Content (Left) */}
                        <div className={styles.mainContent}>

                            <div className={styles.section}>
                                <h2 className={styles.sectionHeading}>Sea & Sunset Views | High-End Upgrades | Turn Key</h2>
                                <p className={styles.descriptionText}>{p.description}</p>
                                <button className={`${styles.readMore} btn`} style={{ color: 'var(--accent)', padding: 0 }}>Read More <span className="material-icons">expand_more</span></button>
                            </div>

                            <div className={styles.divider}></div>

                            <div className={styles.section}>
                                <h2 className={styles.sectionHeading}>Property Information</h2>
                                <div className={styles.infoTable}>
                                    <div className={styles.infoRow}>
                                        <div className={styles.infoLabel}>Type</div>
                                        <div className={styles.infoValue}>{p.details.purpose === 'For Sale' ? 'Apartment' : 'Rental'}</div>
                                        <div className={styles.infoLabel}>{p.type === 'Buy' ? 'Purpose' : 'Rent Period'}</div>
                                        <div className={styles.infoValue}>{p.details.purpose}</div>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <div className={styles.infoLabel}>Reference no.</div>
                                        <div className={styles.infoValue}>{p.details.referenceNo}</div>
                                        <div className={styles.infoLabel}>Added on</div>
                                        <div className={styles.infoValue}>{p.details.addedOn || '26 January 2026'}</div>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <div className={styles.infoLabel}>Completion</div>
                                        <div className={styles.infoValue}>{p.details.completionStatus}</div>
                                        <div className={styles.infoLabel}>Furnishing</div>
                                        <div className={styles.infoValue}>{p.details.furnishing}</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.sectionHeading}>Validated Information <span className="material-icons" style={{ color: '#4caf50', fontSize: '1.2rem', verticalAlign: 'middle' }}>check_circle</span></h2>
                                <div className={styles.infoTable}>
                                    <div className={styles.infoRow}>
                                        <div className={styles.infoLabel}>Developer</div>
                                        <div className={styles.infoValue} style={{ color: 'var(--accent)', fontWeight: 600 }}>{p.details.developer}</div>
                                        <div className={styles.infoLabel}>Usage</div>
                                        <div className={styles.infoValue}>{p.details.usage}</div>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <div className={styles.infoLabel}>Ownership</div>
                                        <div className={styles.infoValue}>{p.details.ownership}</div>
                                        {p.details.balconySize && (
                                            <>
                                                <div className={styles.infoLabel}>Balcony size</div>
                                                <div className={styles.infoValue}>{p.details.balconySize}</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {p.building && (
                                <div className={styles.section}>
                                    <h2 className={styles.sectionHeading}>Building Information <span className="material-icons" style={{ color: '#4caf50', fontSize: '1.2rem', verticalAlign: 'middle' }}>check_circle</span></h2>
                                    <div className={styles.infoTable}>
                                        <div className={styles.infoRow}>
                                            <div className={styles.infoLabel}>Building Name</div>
                                            <div className={styles.infoValue}>{p.building.name}</div>
                                            <div className={styles.infoLabel}>Total Parking Spaces</div>
                                            <div className={styles.infoValue}>{p.building.parking}</div>
                                        </div>
                                        <div className={styles.infoRow}>
                                            <div className={styles.infoLabel}>Year of Completion</div>
                                            <div className={styles.infoValue}>{p.building.yearOfCompletion}</div>
                                            <div className={styles.infoLabel}>Total Floors</div>
                                            <div className={styles.infoValue}>{p.building.totalFloors}</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className={styles.section}>
                                <h2 className={styles.sectionHeading}>Mortgage</h2>
                                <p className={styles.descriptionText}>Calculate and view the monthly mortgage on this apartment</p>
                                <MortgageCalculator price={p.price} />
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.sectionHeading}>Regulatory Information</h2>
                                <div className={styles.infoTable}>
                                    <div className={styles.infoRow}>
                                        <div className={styles.infoLabel}>Permit Number</div>
                                        <div className={styles.infoValue}>7129930808</div>
                                        <div className={styles.infoLabel}>BRN</div>
                                        <div className={styles.infoValue}>85584</div>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <div className={styles.infoLabel}>DLD Permit</div>
                                        <div className={styles.infoValue}>Trakheesi Permit</div>
                                        <div className={styles.infoLabel}>RERA</div>
                                        <div className={styles.infoValue}>36974</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.sectionHeading}>Features / Amenities</h2>
                                <div className={styles.amenitiesGrid}>
                                    {p.amenities.map((amenity, idx) => (
                                        <div key={idx} className={styles.amenityCard}>
                                            <span className="material-icons">{getAmenityIcon(amenity)}</span>
                                            <span className={styles.amenityName}>{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar / Agent Contact (Right) */}
                        <div className={styles.sidebar}>
                            <div className={styles.agentCard}>
                                <div className={styles.agentHeader}>
                                    <img src={p.agent.image} alt={p.agent.name} className={styles.agentAvatar} />
                                    <div className={styles.agentMeta}>
                                        <h3>{p.agent.name}</h3>
                                        <p className={styles.agentTitle}>{p.agent.title || 'Certified Broker'}</p>
                                    </div>
                                </div>

                                <div className={styles.sidebarActions}>
                                    <button className={styles.sidebarBtn}><span className="material-icons">star_border</span> Quality Lister</button>
                                    <button className={styles.sidebarBtn}><span className="material-icons">chat_bubble_outline</span> Responsive Broker</button>
                                </div>

                                <div className={styles.contactActions}>
                                    <a href={`mailto:${p.agent.email}`} className={`${styles.contactBtn} btn bookBtn`}><span className="material-icons">email</span> Email</a>
                                    <a href={`tel:${p.agent.phone}`} className={`${styles.contactBtn} btn callBtn`} style={{ border: '1.5px solid var(--accent)', color: 'var(--accent)', background: 'transparent' }}><span className="material-icons">phone</span> Call</a>
                                    <a href={`https://wa.me/${p.agent.whatsapp}`} className={`${styles.contactBtn} btn whatsappBtn`} style={{ background: '#25D366', color: 'white' }}><span className="material-icons">chat</span> WhatsApp</a>
                                </div>

                                <div className={styles.partnerBottom}>
                                    <span>Listed in partnership with</span>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_Bayut.svg" alt="Partner Logo" className={styles.partnerLogoSmall} />
                                </div>

                                <div className={styles.viewAllBtn}>
                                    <Link href="/properties">View all properties <span className="material-icons">chevron_right</span></Link>
                                </div>
                            </div>

                            <div className={styles.locationPromo}>
                                <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" alt="Location" />
                                <div className={styles.promoContent}>
                                    <h4>Dubai Marina</h4>
                                    <p>See the community attractions and lifestyle</p>
                                </div>
                            </div>

                            {/* Enquiry Form */}
                            <div className={styles.enquiryBox}>
                                <h3 className={styles.enquiryTitle}>Enquire About This Property</h3>
                                <p className={styles.enquirySub}>Get more details, schedule a viewing, or request pricing.</p>
                                <ContactForm source="property_detail" propertyId={p.id} compact />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

function getAmenityIcon(amenity: string) {
    const am = amenity.toLowerCase();
    if (am.includes('pool')) return 'pool';
    if (am.includes('gym')) return 'fitness_center';
    if (am.includes('sauna')) return 'hot_tub';
    if (am.includes('parking')) return 'local_parking';
    if (am.includes('balcony')) return 'balcony';
    if (am.includes('security')) return 'security';
    if (am.includes('view')) return 'visibility';
    if (am.includes('furnished')) return 'chair';
    return 'check_circle';
}
