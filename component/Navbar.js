import styles from "@/component/navbar.module.css"
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const [height, setHeight] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        // Function to update the window width
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.scrollY);
        };

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowWidth);
        window.addEventListener('scroll', updateWindowWidth);

        // Initial window width
        updateWindowWidth();

        if (windowWidth >= 700) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }

        if (windowHeight > 100) {
            setHeight(true)
            // console.log(windowHeight)
        } else {
            setHeight(false)
        }
        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
            window.removeEventListener('scroll', updateWindowWidth);
        };

    }, [setWindowWidth, windowWidth, windowHeight, setHeight]);


    const openNavbar = () => {
        setNavbar(pre => !pre)
    }

    return (
        <div>
            <div className={styles.header} style={{
                background: height ? "#000" : "transparent"
            }}>
                <div className={styles.logo}>
                    <p>LOGO BRAND</p>
                    <Icon icon="ic:baseline-drive-eta" width="1rem" height="1rem" color="gold" className={styles.icon} />
                </div>
                <Icon icon="lets-icons:menu" color="white" className={styles.icon} onClick={openNavbar} />
                <div className={styles.navbar} style={{
                    display: navbar ? "block" : "none"
                }}>
                    <div className={styles.header}>
                        <div>
                            <p>LOGO BRAND</p>
                        </div>
                        <Icon icon="line-md:menu-to-close-alt-transition" color="#fff" className={styles.icon} onClick={openNavbar} />
                    </div>
                    <div className={styles.flexsubnav}>
                        <ul>
                            {/* <li>
                                <Link href="#do">
                                    About Us
                                </Link>
                            </li> */}
                            <li>
                                <Link href="#about">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}