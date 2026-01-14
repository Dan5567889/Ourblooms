import sm1a from '../assets/ServiceModule1/Image.png';
import sm1b from '../assets/ServiceModule1/Image-1.png';
import sm1c from '../assets/ServiceModule1/Image-2.png';
import sm2a from '../assets/ServiceModule2/Image.png';
import sm2b from '../assets/ServiceModule2/Image-1.png';
import sm2c from '../assets/ServiceModule2/Image-2.png';
import sm3a from '../assets/ServiceModule3/Image.png';
import sm3b from '../assets/ServiceModule3/Image-1.png';
import sm3c from '../assets/ServiceModule3/Image-2.png';
import styles from '../styles/Services.module.css';

function Services (){
    return(
        <>
        <section>
            <div className = {styles.serviceContent}>
                <div className={styles.section_header}>
                    Services
                </div>

            <div className={styles.mod1}>
            <hr/>
                <div className={styles.serviceModule} >
                    <div> 
                    <p className="heading1"> FLORAL INSTALLATIONS</p>
                    <p className="paragraph1"> We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.</p>
                </div>
                
                <picture>
                    <source media = "(min-width: 1200px)" srcSet = {sm1a} />
                    <source media = "(min-width: 800px)" srcSet = {sm1b} />
                    <img src={sm1c} alt="Person making Bouquete" />
                </picture>
            </div>
            <hr/>
            </div>

            <div className={styles.mod2}>
            <div className={styles.serviceModule} >
                    <div> 
                    <p className="heading1"> NATIVE PLANT ARRANGEMENTS</p>
                    <p className="paragraph1"> Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.</p>
                </div>
                
                <picture>
                    <source media = "(min-width: 1200px)" srcSet = {sm2a} />
                    <source media = "(min-width: 800px)" srcSet = {sm2b} />
                    <img src={sm2c} alt="Person making Bouquette" />
                </picture>
            </div>
            <hr/>
            </div>

           
            <div className={styles.mod3}>
            <div className={styles.serviceModule} >
                    <div> 
                    <p className="heading1"> CUSTOM FLORAL CONCEPTS</p>
                    <p className="paragraph1"> Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.</p>
                </div>
                
                <picture>
                    <source media = "(min-width: 1200px)" srcSet = {sm3a} />
                    <source media = "(min-width: 800px)" srcSet = {sm3b} />
                    <img src={sm3c} alt="Pink tulips" />
                </picture>
            </div>
            </div>


            
                


            </div>
        </section>
        </>
    )
}
export default Services;