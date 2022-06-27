import { Link } from "react-router-dom";
import "./Login.css";

// Components
import { Lock, Contact } from "../SVG/SVG";

const Login = () => {
  return (
    <div className="authentication">
      <div className="container">
        <div className="col-md-12">
          <div className="row">
            <div className="col-lg-6">
              <div className="company_detail">
                <h4 className="logo">
                  <img
                    src="https://www.wrraptheme.com/templates/alpino/main/assets/images/logo.svg"
                    width="40"
                    height="40"
                    alt=""
                  />
                  Alpino
                </h4>
                <p className="p">The ultimate Bootstrap 4 Admin Dashboard</p>
                <p className="p-2">
                  Alpino is fully based on HTML5 + CSS3 Standards. Is fully
                  responsive and clean on every device and every browser
                </p>
                <div className="footer">
                  <div className="liniya"></div>
                  <ul>
                    <li>
                      <Link to="/" className="link-left">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link-left">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link-left">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link-left">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ">
              <div className="header-login">
                <h5>Log in</h5>
              </div>
              <form className="form">
                <div className="input__box">
                  <input
                    className="login__input"
                    type="text"
                    placeholder="User Name"
                  />
                  <div className="login__icon">
                    <span className="login__icon-span login__icon-span-contact">
                      <Contact />
                    </span>
                  </div>
                </div>
                <div className="input__box">
                  <input
                    className="login__input"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="login__icon">
                    <span className="login__icon-span">
                      <Lock />
                    </span>
                  </div>
                </div>
              </form>
              <div className="login__footer">
                <Link to="/login" className="btn-block btn-block__in">
                  SIGN IN
                </Link>
                <Link to="/login" className="btn-block ">
                  SIGN UP
                </Link>
              </div>
              <Link to="/" className="btn-forget">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
