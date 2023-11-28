import homeScreen from '../assets/images/home.png'

const Home = () => {
    return (
        <div>
            <div className='home'>
                <h1>Chad Smith</h1>
            </div>
            <div>
                <h2>Software Developer</h2>
            </div>
            <img src={homeScreen} className="home"/>
        </div>
    )
};

export default Home;