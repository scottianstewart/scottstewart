import Module from "./Module";
import formidableLogo from "../assets/formidable.png";
import synapseLogo from "../assets/synapse.jpg";
import recruitingLogo from "../assets/recruiting.png";
import redBullLogo from "../assets/redbull.png";

const ResumeModule = () => {
  return (
    <Module title="Résumé">
      <div className="resume-module__list-item">
        <img src={formidableLogo} alt="formidable logo" />
        <div className="resume-module__list-item__content">
          <p>Formidable</p>
          <p className="small">Sr. Software Engineer + Engineering Manager</p>
          <p className="small">2019 - Present</p>
        </div>
      </div>
      <div className="resume-module__list-item">
        <img src={synapseLogo} alt="synapse studios logo" />
        <div className="resume-module__list-item__content">
          <p>Synapse Studios</p>
          <p className="small">UI Designer + Developer</p>
          <p className="small">2016 - 2019</p>
        </div>
      </div>
      <div className="resume-module__list-item">
        <img src={recruitingLogo} alt="recruiting logo" />
        <div className="resume-module__list-item__content">
          <p>Recruiting.com</p>
          <p className="small">Web Designer + Developer</p>
          <p className="small">2015 - 2016</p>
        </div>
      </div>
      <div className="resume-module__list-item">
        <img src={redBullLogo} alt="recruiting logo" />
        <div className="resume-module__list-item__content">
          <p>Red Bull Records</p>
          <p className="small">Musician</p>
          <p className="small">2012 - 2015</p>
        </div>
      </div>
    </Module>
  );
};

export default ResumeModule;
