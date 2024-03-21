import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "@/component/showone.module.css"

export default function Showone() {
    return (
        <div className={styles.firstsection}>
            <div className={styles['video-container']}>
                <video className={styles.video} autoPlay muted loop>
                    <source src="/showone.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={styles.writeup}>
                <h1>Accelerating Dreams, Capturing Moments: Where Every Drive Sparks Joy.</h1>
                <p><strong style={{ color: "orangered" }}>BrandName Autos </strong>: Where Every Ride Fuels Your Soul.</p>
            </div>
        </div>
    )
}