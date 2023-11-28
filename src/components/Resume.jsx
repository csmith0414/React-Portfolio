import download from '../assets/images/download.png'

const Resume = () => {
    return (
      <div>
        <a href='https://docs.google.com/document/d/14t09yM4rBWtnA0P425SBzwwvwvLJvE8ClnL0tCeV6Xc/edit?usp=sharing'><img className='resume' src={download}/></a>
        <h1>Download A Copy Of My Resume Above</h1>
      </div>
    );
  };
  
  export default Resume;