import "./NavBar.css";
import navData from "./navData";

const NavBar = () => {
  const { name, profession, address } = navData;

  return (
    <nav className="nav-bar">
      <div className="nav-item name">{name}</div>
      <div className="nav-item profession">{profession}</div>
      <div className="nav-item address">{address}</div>
    </nav>
  );
};

export default NavBar;
