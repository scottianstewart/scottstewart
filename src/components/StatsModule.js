import Module from "./Module";

const birthDate = new Date("12/05/1990");
const today = new Date();
const daysAlive = (today.getTime() - birthDate.getTime()) / (1000 * 3600 * 24);

const StatsModule = () => {
  return (
    <Module title="Stats">
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
          <p className="label">Pronouns</p>
          <p>He/him</p>
        </div>
        <div className="stats-module__list-item">
          <p className="label">Height</p>
          <p>5' 10"</p>
        </div>
        <div className="stats-module__list-item">
          <p className="label">Days alive</p>
          <p>{Math.round(daysAlive).toLocaleString("en-us")}</p>
        </div>
        <div className="stats-module__list-item">
          <p className="label">Ancestry</p>
          <p className="small">
            England & NW Europe: 67%, Scotland: 15%, Norway: 8%, Wales: 6%,
            Ireland: 3%, Indigenous Americas: 1%
          </p>
        </div>
      </div>
    </Module>
  );
};

export default StatsModule;
