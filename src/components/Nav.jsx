// Setting up the navigation component for my portfolio
// Setting up the connection between the different tabs on my portfolio

const Navigation = () => {
    return (
        <div className='body'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="./AboutMe">About Me</a></li>
                <li><a href="./Portfolio">Portfolio</a></li>
                <li><a href="./Contact">Contact</a></li>
                <li><a href="./Resume">Resume</a></li>
            </ul>
        </div >
    );
};

// Exporting navigation
export default Navigation;