import NavBar from "./navBar";
import Logo from "./logo";

const Header = () => {
  return (
    <>
      <div className='header'>
        <Logo/>
        <NavBar/> 
      </div>
    </>
  );
};

export default Header;