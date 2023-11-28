import eventForecaster from '../assets/images/event-forecaster.png'
import horiseonRefactor from '../assets/images/horiseon-refactor.png'
import passwordGenerator from '../assets/images/password-generator.png'
import textEditor from '../assets/images/text-editor.png'
import weatherDashboard from '../assets/images/weather-dashboard.png'
import workDayScheduler from '../assets/images/work-day-scheduler.png'

const Portfolio = () => {
  return (
<div className="row port">
  <div className="col-sm-6 block">
    <div className="card">
    <img src={eventForecaster} className="card-img-top"/>
      <div className="card-body">
        <a href="https://anthony-gg.github.io/event-forecaster/" className="btn btn-primary">Event Forecaster</a>
        </div>
        <div>
        <a href="https://github.com/Anthony-GG/event-forecaster" className="btn btn-primary">GitHub Repo</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 block2">
    <div className="card">
    <img src={workDayScheduler} className="card-img-top"/>
      <div className="card-body">
        <a href="https://csmith0414.github.io/work-day-scheduler/" className="btn btn-primary link-light">Work Day Scheduler</a>
        </div>
        <div>
        <a href="https://github.com/csmith0414/work-day-scheduler" className="btn btn-primary">GitHub Repo</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 block3">
    <div className="card">
    <img src={weatherDashboard} className="card-img-top"/>
      <div className="card-body">
        <a href="https://csmith0414.github.io/weather-dashboard/" className="btn btn-primary">Weather Dashboard</a>
        </div>
        <div>
        <a href="https://github.com/csmith0414/weather-dashboard" className="btn btn-primary">GitHub Repo</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 block4">
    <div className="card">
    <img src={horiseonRefactor} className="card-img-top"/>
      <div className="card-body">
        <a href="https://csmith0414.github.io/horiseon-refactor/" className="btn btn-primary">Horiseon Refactor</a>
        </div>
        <div>
        <a href="https://github.com/csmith0414/horiseon-refactor" className="btn btn-primary">GitHub Repo</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 block5">
    <div className="card">
    <img src={passwordGenerator} className="card-img-top"/>
      <div className="card-body">
        <a href="https://csmith0414.github.io/password_generator/" className="btn btn-primary">Password Generator</a>
        </div>
        <div>
        <a href="https://github.com/csmith0414/password_generator" className="btn btn-primary">GitHub Repo</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 block6">
    <div className="card">
    <img src={textEditor} className="card-img-top"/>
      <div className="card-body">
        <a href="https://stark-headland-20389-95dd6820f1f9.herokuapp.com/" className="btn btn-primary">Text Editor</a>
        </div>
        <div>
        <a href="https://github.com/csmith0414/text-editor" className="btn btn-primary">GitHub Repo</a>
      </div>
    </div>
  </div>
</div>
  );
};

export default Portfolio;