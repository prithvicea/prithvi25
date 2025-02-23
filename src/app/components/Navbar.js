'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null); // Reference for the menu container
    const itemsRef = useRef([]); // Reference for each menu item

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        // Only run the GSAP animation if menuRef is not null
        if (menuRef.current) {
            if (menuOpen) {
                // GSAP Animation for Dropdown Menu when toggled
                gsap.fromTo(
                    menuRef.current,
                    { opacity: 0, y: -50 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                );

                // Animate items one by one
                itemsRef.current.forEach((item, index) => {
                    gsap.fromTo(
                        item,
                        { opacity: 0, y: 30 },
                        { opacity: 1, y: 0, duration: 0.3, delay: index * 0.1, ease: 'power2.out' }
                    );
                });

                // Animate the images inside the dropdown (stars, circles)
                gsap.fromTo(
                    '.star-image, .circle-image',
                    { opacity: 0, scale: 0.5 },
                    { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
                );
            } else {
                // Reset the animation when the menu is closed
                gsap.To(menuRef.current, { opacity: 0, y: -50, duration: 0.5, ease: 'power2.in' });
                itemsRef.current.forEach((item) => {
                    gsap.To(item, { opacity: 0, y: 30, duration: 0.3, ease: 'power2.in' });
                });
            }
        }
    }, [menuOpen]);

    return (
        <nav
            className="top-0 bg-[#FCA24B] w-screen bg-blend-soft-light p-0 bg-cover bg-center bg-no-repeat border-b-2  border-[#003434]"
            style={{
                backgroundImage: "url('./noisy-background.svg')",
                fontFamily: "Itim, serif",
            }}
        >
            <div className="container mx-auto flex justify-between items-center pt-4 pb-3 ">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Image
                        src="/Cloud.png"
                        alt="Cloud.png"
                        width={160}  
                        height={200} 
                        className="absolute top-0"
                        priority // Keep priority for LCP optimization
                        style={{ maxWidth: '100%', height: 'auto' }} // Ensures image is responsive and scaled correctly
                    />

                    <Image
                        src="/cea.svg"
                        alt="CEA Logo"
                        width={40} 
                        height={50}
                        className="absolute top-3 left-6 "
                        priority
                        style={{ maxWidth: '100%', height: 'auto' }} // Ensures image is responsive and scaled correctly
                    />

                    <Image
                        src="/building.svg"
                        alt="Building Icon"
                        width={40}  
                        height={50} 
                        className="absolute top-3 left-22"
                        priority
                        style={{ maxWidth: '100%', height: 'auto' }} // Ensures image is responsive and scaled correctly
                    />

                </div>

                {/* Menu Items */}
                <div className="hidden md:flex items-center space-x-2">
                    <ul className="flex lg:space-x-15 md:space-x-5 sm:space-x-3 space-x-2">
                        <li className="nav-item">
                            <Link href="/" className="text-black hover:text-gray-900">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Lecture" className="text-black hover:text-gray-900">
                                Lecture
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Workshop" className="text-black hover:text-gray-900">
                                Workshop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Competitions" className="text-black hover:text-gray-900">
                                Competitions
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="absolute md:right-20 top-[-10px] right-12">
                    <Image
                        src="/globe.svg"
                        alt="globe svg"
                        width={40}
                        height={40}

                    />
                </div>
                <div className="absolute md:left-140 left-52 top-[45px]">
                    <Image
                        src="/star.svg"
                        alt="star svg"
                        width={10}
                        height={10}
                    />
                </div>
                <div className="absolute md:right-52 right-20 top-[45px]">
                    <Image
                        src="/circle.svg"
                        alt="circle svg"
                        width={10}
                        height={10}
                    />
                </div>

                {/* Contact Us Button */}
                <div className="md:flex hidden items-center lg:pr-14 pr-4 justify-center text-center">
                    <button className="relative flex items-center justify-center md:w-[110px] md:h-[40px] w-[80px] h-[33px] bg-[#003434] rounded-[10px] rounded-tr-[13px] border-4 border-[#003434] shadow-md cursor-pointer hover:scale-90 transform transition duration-300 ease-in-out">
                        <span className="absolute inset-[-3.8px] md:w-[107px] md:h-[33px] w-[76px] h-[30px] bg-white rounded-[8px] border-2 border-[#003434]"></span>
                        <span className="relative text-[#003434] font-semibold text-[15px] md:text-md justify-center">
                            Contact Us
                        </span>
                    </button>
                </div>

    
                <button
                    onClick={toggleMenu}
                    className="group mr-2 h-10 w-10 rounded-lg border-2 border-black flex md:hidden items-center justify-center"
                >
                    <div className="grid justify-items-center gap-1.5">
                        <span
                            className={`h-1 w-8 rounded-full bg-gray-800 transition-transform ${menuOpen
                                    ? "rotate-45 translate-y-1.5"
                                    : "group-hover:rotate-45 group-hover:translate-y-2.5"
                                }`}
                        ></span>
                        <span
                            className={`h-1 w-8 rounded-full bg-gray-800 transition-transform ${menuOpen ? "scale-0" : "group-hover:scale-x-0"
                                }`}
                        ></span>
                        <span
                            className={`h-1 w-8 rounded-full bg-gray-800 transition-transform ${menuOpen
                                    ? "-rotate-45 -translate-y-1.5"
                                    : "group-hover:-rotate-45 group-hover:-translate-y-2.5"
                                }`}
                        ></span>
                    </div>
                </button>
            </div>


            {menuOpen && (
                <div
                    ref={menuRef}
                    className="absolute bg-emerald-400 top-16 bg-opacity-10 md:hidden h-[45vh] w-[98%] bg-blend-soft-light mx-1 bg-cover bg-center bg-no-repeat border-2 rounded-2xl border-[#003434] shadow-md"
                    style={{
                        backgroundImage: "url('./noisy-background.svg')",
                        fontFamily: "Itim, serif",
                    }}
                >
                    <ul className="flex flex-col items-center justify-center py-6 space-y-3">
                        <li ref={(el) => (itemsRef.current[0] = el)} className="nav-item flex items-center space-x-2">
                            <Link href="/" className="text-black hover:text-gray-900">Home</Link>
                        </li>
                        <li ref={(el) => (itemsRef.current[1] = el)}>
                            <Link href="/about" className="text-black hover:text-gray-900">Lecture</Link>
                        </li>
                        <li ref={(el) => (itemsRef.current[2] = el)} className="nav-item flex items-center space-x-2">
                            <Link href="/services" className="text-black hover:text-gray-900">Workshop</Link>
                        </li>
                        <li ref={(el) => (itemsRef.current[3] = el)} className="nav-item flex items-center space-x-2">
                            <Link href="/contact" className="text-black hover:text-gray-900">Competitions</Link>
                        </li>
                        <li>
                            {/* Contact Us Button */}
                            <div ref={(el) => (itemsRef.current[4] = el)} className="flex md:hidden items-center lg:pr-14 justify-center text-center">
                                <button className="relative flex items-center justify-center md:w-[110px] md:h-[40px] w-[88px] h-[36px] bg-[#003434] rounded-[10px] rounded-tr-[13px] border-4 border-[#003434] shadow-md cursor-pointer hover:scale-90 transform transition duration-300 ease-in-out">
                                    <span className="absolute inset-[-3.8px] md:w-[107px] md:h-[33px] w-[85px] h-[33px] bg-white rounded-[8px] border-2 border-[#003434]"></span>
                                    <span className="relative text-[#003434] font-semibold text-[15px] md:text-md justify-center">
                                        Contact Us
                                    </span>
                                </button>
                            </div>
                        </li>
                    </ul>

                    <div className="absolute md:left-140 left-30 top-[45px] star-image">
                        <Image src="/star.svg" alt="star svg" width={10} height={10} />
                    </div>
                    <div className="absolute md:left-140 left-96 top-[60px] star-image">
                        <Image src="/star.svg" alt="star svg" width={10} height={10} />
                    </div>
                    <div className="absolute md:right-52 right-20 top-[60px] circle-image">
                        <Image src="/circle.svg" alt="circle svg" width={10} height={10} />
                    </div>
                    <div className="absolute md:right-52 right-70 top-[200px] circle-image">
                        <Image src="/circle.svg" alt="circle svg" width={10} height={10} />
                    </div>


                </div>
            )}
        </nav>
    );
};

export default Navbar;
