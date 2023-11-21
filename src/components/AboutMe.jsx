const AboutMe = () => {
  return (
    <div id='aboutMe'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Chad Smith</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="./components/AboutMe">About Me</a>
              <a class="nav-link" href="./components/Portfolio">Portfolio</a>
              <a class="nav-link" href="./components/Contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <div className=''>
            <p className='text-bg-info p-3'>
            IT professional with a drive for continuous learning in related IT topics. Effective at assisting internally facing and externally facing customers with resolving issues and aiding where needed. Able to provide effective assistance with attention to detail and provide an understanding to end users with or without a technical background.
            </p>
        <Resume />
        <Footer />
      </div>
    </div>
  );
};

export default AboutMe;