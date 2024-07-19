import { apple, app, google } from "../assets"
import styles, { layout } from "../style"

const Download = () => (
  <section id="download" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={app} alt="Download" className="w-[100%] h-[100%] relative z-[5]"/>
      
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Whatever you want <br className="sm:block hidden"/> wherever you want. </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Take control of the people who watch, receive notifications of new releases, save your balance, collect points for a chance to win exclusive products.
      <br />
      If you don´t have time to watch movies, don´t worry, it will be saved as a balance so you can watch what you already paid for.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={google} alt="google" className="w-[128px] h-[42px] object-contain cursor-pointer"/>
      </div>
    </div>
    

  </section>
)

export default Download