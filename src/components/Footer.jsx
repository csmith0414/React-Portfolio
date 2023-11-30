// Setting up the footer section
// Importing icons for my social media links

import gitHub from '../assets/images/github.png'
import linkedIn from '../assets/images/LinkedIn.png'
import instagram from '../assets/images/IG.png'

const Footer = () => {
    return (
        <div>
            <div className='icons'>
                <a href='https://github.com/csmith0414'><img className='icon' src={gitHub}/></a>
                <a href='https://www.linkedin.com/in/chad-smith-529678262/'><img className='icon' src={linkedIn}/></a>
                <a href='https://www.linkedin.com/in/chad-smith-529678262/'><img className='icon' src={instagram}/></a>
            </div>
        </div>
    );
};

// Exporting footer
export default Footer;