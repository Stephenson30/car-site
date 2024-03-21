import styles from "@/component/footer.module.css"
import { Icon } from "@iconify/react"

export default function Footer() {
    return (
        <div>
            <div className={styles.lastsection}>
                <div className={styles.flexfooter}>
                    <div className={styles.contact}>
                        <h3>Our Locations</h3>
                        <h1>BRANDNAME, AUTOS</h1>
                        <h3>Phone</h3>
                        <h1>000-000-0000</h1>
                    </div>
                    <div className={styles.flexfooter}>
                        {/* <div className={styles.about}>
                            <h3>What we do</h3>
                            <p className={styles.p}>Single-Family</p>
                            <p className={styles.p}>Multi-Family</p>
                            <p className={styles.p}>Extended-Famiily</p>
                        </div> */}
                        <div className={styles.about}>
                            <h3>Collaborate</h3>
                            <p className={styles.p}>Linkedin<Icon icon="ei:external-link" color="white" /></p>
                            <p className={styles.p}>Instagram<Icon icon="ei:external-link" color="white" /></p>
                            <p className={styles.p}>Twitter<Icon icon="ei:external-link" color="white" /></p>
                            <p className={styles.p}>Facebook<Icon icon="ei:external-link" color="white" /></p>
                        </div>
                    </div>
                </div>
                <div className={styles.about}>
                    <p className={styles.emailus}>Feel free to email us at:<br /><span>info@BrandName.autos</span></p>
                </div>
                <hr />
                <p className={styles.llc}>© 2024  BRANDNAME LLC | DESIGNED BY STEPHEN.</p>
            </div>
        </div>
    )
}