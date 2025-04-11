import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to='/'>
        <div className="logo">
          <div className="logo-front">ALISA.SU/</div>
          <div className="logo-back">alisa.su/</div>
        </div>
      </Link>
    </>
  );
};

export default Logo;