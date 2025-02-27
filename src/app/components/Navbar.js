'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const itemsRef = useRef([]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuRef.current) {
            if (menuOpen) {
                gsap.fromTo(
                    menuRef.current,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                );

                itemsRef.current.forEach((item, index) => {
                    gsap.fromTo(
                        item,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.3, delay: index * 0.1, ease: 'power2.out' }
                    );
                });

                gsap.fromTo(
                    '.star-image, .circle-image',
                    { opacity: 0, scale: 0.5 },
                    { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
                );
            } else {
                gsap.to(menuRef.current, { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in' });
                itemsRef.current.forEach((item) => {
                    gsap.to(item, { opacity: 0, y: 30, duration: 0.3, ease: 'power2.in' });
                });
            }
        }
    }, [menuOpen]);

    return (
        <nav className={styles.navbar} >
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <Image
                        src="/Cloud.png"
                        alt="Cloud.png"
                        width={160}
                        height={200}
                        className={styles.cloud}
                        priority
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <Image
                        src="/cea.svg"
                        alt="CEA Logo"
                        width={40}
                        height={50}
                        className={styles.ceaLogo}
                        priority
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <Image
                        src="/building.svg"
                        alt="Building Icon"
                        width={40}
                        height={50}
                        className={styles.buildingIcon}
                        priority
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>

                <div className={styles.menuItems}>
                    <ul className={styles.menuList}>
                        <li className={styles.navItem}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Lecture">Lecture</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Workshops">Workshop</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Competitions">Competitions</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/Team">Team</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.globe}>
                    {/* <Image src="/globe.svg" alt="globe svg" width={40} height={40} /> */}
                </div>
                <div className={styles.star}>
                    <Image src="/star.svg" alt="star svg" width={10} height={10} />
                </div>
                <div className={styles.circle}>
                    <Image src="/circle.svg" alt="circle svg" width={10} height={10} />
                </div>

                <div className={styles.contactButton}>
                    <button className={styles.button}>
                        <span className={styles.buttonInner}></span>
                        <span className={styles.buttonText}>Contact Us</span>
                    </button>
                </div>

                <button onClick={toggleMenu} className={styles.menuButton}>
                    <div className="grid justify-items-center gap-1.5">
                        <span className={`h-1 w-8 rounded-full bg-gray-800 transition-transform ${
                            menuOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}></span>
                        <span className={`h-1 w-8 rounded-full bg-gray-800 transition-transform ${
                            menuOpen ? "scale-0" : ""
                        }`}></span>
                        <span className={`h-1 w-8 rounded-full bg-gray-800 transition-transform ${
                            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}></span>
                    </div>
                </button>
            </div>

            {menuOpen && (
                <div ref={menuRef} className={styles.mobileMenu} style={{ backgroundImage: "url('./noisy-background.svg')" }}>
                    <ul className={styles.mobileMenuList}>
                        <li ref={(el) => (itemsRef.current[0] = el)} className={styles.navItem}>
                            <Link href="/">Home</Link>
                        </li>
                        <li ref={(el) => (itemsRef.current[1] = el)} className={styles.navItem}>
                            <Link href="/Lecture">Lecture</Link>
                        </li>
                        <li ref={(el) => (itemsRef.current[2] = el)} className={styles.navItem}>
                            <Link href="/Workshops">Workshop</Link>
                        </li>
                        <li ref={(el) => (itemsRef.current[3] = el)} className={styles.navItem}>
                            <Link href="/Competitions">Competitions</Link>
                        </li>
                        <li ref={(el) => (itemsRef.current[4] = el)}>
                            <div className={styles.contactButton}>
                                <button className={styles.button}>
                                    <span className={styles.buttonInner}></span>
                                    <span className={styles.buttonText}><Link href="/Competitions">Contact Us</Link></span>
                                </button>
                            </div>
                        </li>
                    </ul>

                    <div className={`${styles.star} star-image`}>
                        <Image src="/star.svg" alt="star svg" width={10} height={10} />
                    </div>
                    <div className={`${styles.star} star-image`} style={{ left: '24rem', top: '60px' }}>
                        <Image src="/star.svg" alt="star svg" width={10} height={10} />
                    </div>
                    <div className={`${styles.circle} circle-image`} style={{ top: '60px' }}>
                        <Image src="/circle.svg" alt="circle svg" width={10} height={10} />
                    </div>
                    <div className={`${styles.circle} circle-image`} style={{ right: '17.5rem', top: '200px' }}>
                        <Image src="/circle.svg" alt="circle svg" width={10} height={10} />
                    </div>
                </div>
            )}
            
        </nav>
    );
};

export default Navbar;