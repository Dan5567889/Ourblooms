import Footer from "../components/footer";
import styles from "../styles/About.module.css";
import lady from "../assets/AboutPage/lady.png";
import lady1 from "../assets/AboutPage/lady-1.png";
import lady2 from "../assets/AboutPage/lady-2.png";

import fa1 from "../assets/AboutFlowers/Image 01.png";
import fa2 from "../assets/AboutFlowers/Image 01-1.png";
import fa3 from "../assets/AboutFlowers/Image 01-2.png";
import fb1 from "../assets/AboutFlowers/Image 02.png";
import fb2 from "../assets/AboutFlowers/Image 02-1.png";
import fb3 from "../assets/AboutFlowers/Image 02-2.png";
import fc1 from "../assets/AboutFlowers/Image 03.png";
import fc2 from "../assets/AboutFlowers/Image 03-1.png";
import fc3 from "../assets/AboutFlowers/Image 03-2.png";

import fd1 from "../assets/AboutFlowers/Image breaker.png";
import fd2 from "../assets/AboutFlowers/Image breaker-1.png";
import fd3 from "../assets/AboutFlowers/Image breaker-2.png";

function About(){
    return (
        <>
        <div className={styles.head}> 
        <p className="heading1"> ABOUT </p>
        </div>

        <div className={styles.container}>

            <div className={styles.capped}>
                <p className="caption1"> Our story </p>
            </div>

            <div className={styles.rightColumnContainer}>
                <div className={styles.AuthorInformation}>
                    <picture>
                        <source media = "(min-width: 1200px)" srcSet = {lady} />
                        <source media = "(min-width: 800px)" srcSet = {lady1} />
                        <img src={lady2} alt="Author " className={styles.authorImage} />
                    </picture>
                    <div className={styles.authorDetails}>
                        <p className="caption2"> Lily smith</p>
                        <p className="paragraph1"> Owner</p>
                    </div>
                </div>
            </div>

            <div className={styles.gr1}>
                <p className="heading2">  Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.</p>
            </div>

            <div className={styles.aboutContainer}>
                <div className={styles.upimage}>
                    <picture>
                        <source media = "(min-width: 1200px)" srcSet = {fa1} />
                        <source media = "(min-width: 800px)" srcSet = {fa2} />
                        <img src={fa3} alt="Author " />
                    </picture>
                    <picture>
                        <source media = "(min-width: 1200px)" srcSet = {fb1} />
                        <source media = "(min-width: 800px)" srcSet = {fb2} />
                        <img src={fb3} alt="Author "  />
                    </picture>
                    <picture>
                        <source media = "(min-width: 1200px)" srcSet = {fc1} />
                        <source media = "(min-width: 800px)" srcSet = {fc2} />
                        <img src={fc3} alt="Author "  />
                    </picture>
                </div>

                <div className={styles.journey}>
                    <p className="paragraph2"> Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil.</p>
                    <p className="paragraph2"> Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.</p>
                </div>

                <div className={styles.finalSection}>
                    <picture>
                        <source media="(min-width: 1200px)" srcSet={fd1} />
                        <source media="(min-width: 800px)" srcSet={fd2} />
                        <img src={fd3} alt="Author" />
                    </picture>
                
                <div className={styles.boom}> 
                    <p className="paragraph2">
                        From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.
                    </p>
                    <p className="paragraph2">
                        Discover how we can add a touch of natural beauty to your next event.
                    </p>
                    </div>

                    <ul> 
                     <button className={styles.nice}> <li> BOOK A CONSULTATION</li></button>
                    </ul>
                </div>
            </div>

        </div>

        <Footer />
        </>
    )
}
export default About;