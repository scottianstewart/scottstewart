import scott from "../assets/scott.jpg";

const AccountInfo = () => {
  return (
    <div className="account-info__wrapper">
      <img src={scott} alt="Scott Stewart" />
      <div className="account-info">
        <p>Scott Stewart</p>
        <p className="small">Sr. Software Engineer</p>
      </div>
    </div>
  );
};

export default AccountInfo;
