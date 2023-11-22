
const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid"> 
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="navbar-brand" href="/">Home</a>
                            <a className="nav-link active" aria-current="page" href="./AboutMe">About Me</a>
                            <a className="nav-link" href="./Portfolio">Portfolio</a>
                            <a className="nav-link" href="./Contact">Contact</a>
                            <a className="nav-link" href="./Resume">Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Navigation;