import Hero from "./components/Hero"
import {Navbar, Stats, Business, Download ,CardDeal ,Testimonials ,Exclusive ,CTA ,Footer } from "./components"
import styles from "./style"
import Plans from "./components/Plans"





const App = () => {
  return (
    <section className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business/>
          <Download />
          <Plans/>
          <CardDeal/>
          <Testimonials/>
          <Exclusive />
          <CTA/>
          <Footer/>
        </div>
      </div>
    </section>
  )
}

export default App