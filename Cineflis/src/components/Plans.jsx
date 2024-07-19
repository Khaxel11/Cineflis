import { useState } from 'react';
import { planslist } from '../constants';
import styles from '../style';

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState('cinefan');

  const handlePlanClick = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <section id='plans' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full red__gradient' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>All our plans</h1>
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1]'>
        {planslist.map((plan) => (
          <PlanCard 
            key={plan.id} 
            plan={plan} 
            isSelected={plan.id === selectedPlan}
            onClick={() => handlePlanClick(plan.id)}
          />
        ))}
      </div>
    </section>
  );
};

const PlanCard = ( {plan, isSelected, onClick }) => (
  <div 
    onClick={onClick } 
    className={`flex flex-col px-10 py-12 rounded-[20px] md:w-[400px] md:mr-5 sm:mr-5 mr-0 my-5 plan-card text-center border-2 cursor-pointer 
      ${isSelected ? 'scale-[1.05] bg_popular' : ''}`}
  >
    
    <h5 className='flex justify-center align-middle text-white text-[18px]'>{plan.popular ? 'Most Popular' : 'Plan'}</h5>   
    <h1 className="font-poppins font-semibold text-[40px] mb-5 leading-[32px] text-white my-2">{plan.title}</h1>
    <h2 className="font-extralight text-[16px] leading-[32px] mt-5 mb-5 text-white">
      <strong className='font-extrabold text-[50px]'>${plan.price}</strong> / month
    </h2>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-2">Quality: <strong className='font-extrabold text-white'>{plan.quality}</strong></p>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-2">Devices: <strong className='font-extrabold text-white'>{plan.devices}</strong></p>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-2">Same time devices: <strong className='font-extrabold text-white'>{plan.sameDevices}</strong></p>
    <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-2">Download devices: <strong className='font-extrabold text-white'>{plan.downloadDevices}</strong></p>
    <h3 className="font-poppins font-semibold text-[18px] leading-[24px] text-white mt-4">Extra Features:</h3>
    <ul className="list-disc list-inside text-dimWhite">
      {plan.extraFeatures.map((feature, index) => (
        <li key={index} className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-1">{feature}</li>
      ))}
    </ul>
    <div className="flex-grow" />
    <button className='border-2 text-center rounded-[20px] px-6 py-2 mt-4 text-white'>Get Started</button>
  </div>
);

export default Plans;
