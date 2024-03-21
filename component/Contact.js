import styles from "@/component/contact.module.css"

export default function Contact() {
    return (
        <div>
            <div className={styles.fifthsection} id="contact">
                <h1>Contact Us</h1>
                <div>
                    <form className={styles.contactForm}>
                        <div>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">First Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="name">Last Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject:</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>
                        </div>

                        <div className={styles.msgbtnflex}>
                            <div className={styles.formGroup}>
                                <label htmlFor="phone">Phone:</label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" className={styles.submitButton}>
                                SUMBIT
                            </button>
                        </div>
                    </form>
                    <div className={styles.formwriteup}>
                        <div>
                            <p>Connect with us to schedule a free 30-minute consultation.</p>
                            <p style={{ color: "orangered" }}>&quot;Introducing <strong style={{ color: "orangered", fontWeight: "bold" }}>BrandName Autos </strong>: Redefining Comfort for Your Family's Journey.&quot;</p>
                        </div>
                        <div>
                            <p>We&quot;re happy to chat on the phone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}