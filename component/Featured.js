import Image from "next/image"
import styles from "@/component/featured.module.css"

export default function Featured() {
    return (
        <div className={styles.featured}>
            <h1>Let&quot;s Find Your Perfect Car</h1>
            <h4>Featured Cars</h4>
            <div className={styles.cardiv}>
                <div>
                    <Image src={"/gle.png"} alt="GLE" width={300} height={200} />
                    <div>
                        <details>
                            <summary>Mercedes-Benz GLE-Class...</summary>
                            <p>Models wearing the GLE350 badge are powered by a 255-hp turbocharged four-cylinder engine with either rear- or all-wheel drive (4Matic in Mercedes parlance) and a nine-speed automatic transmission.
                                Stepping up to the GLE450 brings standard all-wheel drive and a 362-hp powertrain that consists of a turbocharged inline-six and a 48-volt hybrid system.</p>
                        </details>
                    </div>
                </div>
                <div>
                    <Image src={"/spider.png"} alt="spider" width={300} height={200} />
                    <div>
                        <details>
                            <summary>Toyota Camry</summary>
                            <p>The Toyota Camry is a popular family sedan known for excellent reliability and strong resale value.
                                One thing long-missing from the Camry had been any sense of driving excitement, but that&quot;s changed with the redesigned 2018 model.
                                The new front-wheel-drive Camry comes with a 2.5-liter four-cylinder or 3.5-liter V-6 engine, or as a gas-electric Hybrid that pairs a four-cylinder gas engine with an electric motor.</p>
                        </details>
                    </div>
                </div>
                <div>
                    <Image src={"/runner.png"} alt="runner" width={300} height={200} />
                    <div>
                        <details>
                            <summary>Toyota 4Runner TRD Off-Road</summary>
                            <p>Toyota 4Runner TRD Sport is the lowest priced option in the lineup, 
                                and it has an upgraded suspension and offers available four-wheel drive. 
                                The Toyota 4Runner TRD Off-Road model includes standard four-wheel drive, an extra skid plate, 
                                crawl control, a locking rear differential, and active traction control.</p>
                        </details>
                    </div>
                </div>
                <div>
                    <Image src={"/tundra.png"} alt="tundra" width={300} height={200} />
                    <div>
                        <details>
                            <summary>Toyota Tundra TRD Pro</summary>
                            <p>Far and beyond the most controversial
                                part of the third-gen Tundra is the powertrain.
                                This TRD Pro is powered by the “i-Force Max” 3.4L twin-turbo
                                V6 paired with a hybrid battery, which is good for 437 horsepower
                                and 583 lb-ft of torque.</p>
                        </details>
                    </div>
                </div>
            </div>

        </div>
    )
}