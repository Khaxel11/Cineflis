
import { clients } from '../constants';
import styles from '../style'
const Exclusive = () => (
    <section className={`my-4 `}>
      <div className='w-full flex justify-between text-center mb-8'>
        <h1 className={styles.heading2}>Our Allies</h1>
      </div>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] remove-bg`}>
            <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain ' />
          </div>
        ))}
      </div>
    </section>
)


export default Exclusive