import "./topbar.scss";
import { GrMail } from "react-icons/gr";
// const fontStyles = {color: 'red', fontSize: '40px'};
const fontStyles = {};

function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <GrMail className="icon" style={fontStyles} />
            <span>sharon.fitzpatrick23@gmail.com</span>
          </div>
        </div>
        <div className="right">
          {/* When the user clicks on the hamburger it will transition the menu status */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default topbar;
