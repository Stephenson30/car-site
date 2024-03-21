import styles from "@/component/aboutus.module.css"

export default function AboutUs() {
    return (
        <div className={styles.about}>
            <h1>About Us</h1>
            <h4>who we are and what we can offer to you</h4>
            <div>
                <div className={styles['bg-video']}>
                    <div className={styles['video-container']}>
                        <video className={styles.video} autoPlay muted loop>
                            <source src="/showtwo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h1>Redefining Comfort for Your Journey.</h1>
                </div>
                <div className={styles.writeup}>
                    <p>At <strong style={{ color: "orangered" }}>BrandName Autos </strong>, we understand that every journey, 
                        whether it's a daily commute or a family road trip, 
                        should be defined by comfort, convenience, and positivity.
                       That's why we've made it our mission to provide vehicles that prioritize not only performance but also the well-being of you and your loved ones.</p>
                </div>
            </div>
        </div>
    )
}