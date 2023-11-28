import me from '../assets/images/me.png'

const AboutMe = () => {
  return (
    <div>
      <div className='about'>
        <p className='text-bg-info p-3'>
          IT professional with a drive for continuous learning in related IT topics. Effective at assisting internally facing and externally facing customers with resolving issues and aiding where needed. Able to provide effective assistance with attention to detail and provide an understanding to end users with or without a technical background.
        </p>
        <div>
          <img src={me} className='me' />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;