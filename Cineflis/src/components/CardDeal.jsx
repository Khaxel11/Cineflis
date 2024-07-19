import { menuview } from "../assets"
import styles, { layout } from "../style"
import Button from './Button'

const CardDeal = () => (
  
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find the best plan for you <br className="sm:block hidden"/>
        to your size, to your style, to your way
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Take a look at our different plans, choose the one you like the most and adapt it to your needs.
        </p>
        <Button text={'Know More'} styles={'mt-10'}/>
      </div>
      <div className={layout.sectionImg}>
        <img src={menuview} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  
)

export default CardDeal