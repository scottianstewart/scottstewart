import scott from "../assets/scott.jpg";

const AccountInfo = () => {
  return (
    <div className="account-info__wrapper">
      <div className="account-info">
        <p>Scott Stewart</p>
        <p className="small">Sr. Software Engineer</p>
      </div>
      <img src={scott} alt="Scott Stewart" />
    </div>
  );
};

export default AccountInfo;
