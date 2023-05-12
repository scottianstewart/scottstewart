import { useEffect, useState } from "react";
import Module from "./Module";

const birthDate = new Date("12/05/1990");

const StatsModule = () => {
  const [seconds, setSeconds] = useState(new Date().getTime() / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getTime() / 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function secondsToDhms(seconds) {
    seconds = Number(seconds) - birthDate.getTime() / 1000;
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor((seconds % (3600 * 24)) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
    var s = Math.floor(seconds % 60);

    var dDisplay = d > 0 ? d.toLocaleString("en-us") + "d " : "";
    var hDisplay = h > 0 ? h + "h " : "";
    var mDisplay = m > 0 ? m + "m " : "";
    var sDisplay = s >= 0 ? s + "s" : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }

  return (
    <Module title="Biometrics">
      <div className="stats-module">
        <div className="stats-module__list-item">
          <p className="label">Name</p>
          <p>Scott Stewart</p>
        </div>
        <div className="stats-module__list-item">
          <p className="label">Gender</p>
          <p>Male</p>
        </div>
        <div className="stats-module__list-item">
          <p className="label">Time alive</p>
          <p>{secondsToDhms(seconds)}</p>
        </div>

        <div className="stats-module__list-item">
          <p className="label">Height</p>
          <p>5' 10"</p>
        </div>
        <div className="stats-module__list-item">
          <p className="label">Pronouns</p>
          <p>He/him</p>
        </div>
        <div className="stats-module__list-item">
          <p className="label">Ancestry</p>
          <p>
            Europe: 67%, Scotland: 15%, Norway: 8%, Wales: 6%, Ireland: 3%,
            Indigenous Americas: 1%
          </p>
        </div>
      </div>
    </Module>
  );
};

export default StatsModule;
