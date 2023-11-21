
const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid"> 
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="navbar-brand" href="/">Home</a>
                            <a className="nav-link active" aria-current="page" href="./components/AboutMe">About Me</a>
                            <a className="nav-link" href="./components/Portfolio">Portfolio</a>
                            <a className="nav-link" href="./components/Contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Navigation;