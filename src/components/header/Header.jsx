import "./header.css";
import logo from "../../images/logo.png";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        {/*header-start*/}
        <div className="container">
          <div className="header_left">
            <Link className="a logo" to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header_right">
            <label htmlFor="menuTrigger" className="nav_ico">
              <i className="bars fa fa-bars" />
            </label>
            <input id="menuTrigger" type="checkbox" name />
            <nav className="main_nav">
              <ul>
                <li>
                  <Link className="a" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="a" to="/income">
                    Make Extra Money
                  </Link>
                </li>
                <li>
                  <Link className="a" to="/work">
                    Work From Home
                  </Link>
                </li>
                <li>
                  <Link className="a" to="/business">
                    Start A Business
                  </Link>
                </li>
                <li>
                  <Link className="a" to="/management">
                    Money Management
                  </Link>
                </li>
                <li>
                  <a tabindex="0">Blog Courses</a>
                  <i className="fa fa-caret-down" />
                  <ul>
                    <li>
                      <Link className="a" to="/marketing">
                        Affiliate Marketing
                      </Link>
                    </li>
                    <li>
                      <Link className="a" to="/posts">
                        Sponsored Posts
                      </Link>
                    </li>
                    <li>
                      <Link className="a" to="/blog">
                        How To Start A Blog
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
      {/*header-end*/}
    </>
  );
};
export default Header;
