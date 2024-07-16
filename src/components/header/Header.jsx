import "./header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <header id="header">
        {/*header-start*/}
        <div className="container">
          <div className="header_left">
            <a className="logo" href="#">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>
          <div className="header_right">
            <label htmlFor="menuTrigger" className="nav_ico">
              <i className="fa fa-bars" />
            </label>
            <input id="menuTrigger" type="checkbox" name />
            <nav className="main_nav">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Make Extra Money</a>
                </li>
                <li>
                  <a href="#">Work From Home</a>
                </li>
                <li>
                  <a href="#">Start A Business</a>
                </li>
                <li>
                  <a href="#">Money Management</a>
                </li>
                <li>
                  <a href="#">Blog Courses</a>
                  <i className="fa fa-caret-down" />
                  <ul>
                    <li>
                      <a href="#">Affiliate Marketing</a>
                    </li>
                    <li>
                      <a href="#">Making Sense Of Sponsored Posts</a>
                    </li>
                    <li>
                      <a href="#">How To Start A Blog</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {/*header-end*/}
    </>
  );
};
export default Header;
