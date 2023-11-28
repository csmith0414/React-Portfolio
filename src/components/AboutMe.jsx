import me from '../assets/images/me.png'

const AboutMe = () => {
  return (
    <div>
      <div className='about'>
        <p className='text-bg-info p-3'>
          IT professional with a drive for continuous learning in related IT topics. Effective at assisting internally facing and externally facing customers with resolving issues and aiding where needed. Able to provide effective assistance with attention to detail and provide an understanding to end users with or without a technical background.
        </p>
        <p className='text-bg-info p-3'>
          Prior United States Air Force Reserves and several years of technical job experience. Dedicated and willing to put in the hard work to become a valued member of any organization. 
        </p>
        <div>
          <img src={me} className='me' />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;