import Link from "next/link";
import Cookies from "js-cookie";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white sticky-top pr-lg-5 pr-md-4 "
      id="navbar"
    >
      <Link href="/">
        <img
          src="/images/logo.png"
          alt="..."
          className="ml-lg-5 ml-md-4 ml-sm-3 navbar-logo img-fluid"
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-lg fa-bars fa-custom-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          {Cookies.get("rt") ? (
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link d-lg-none defaultColor">
                  <i className="fas fa-lg fa-user-circle mr-2"></i>
                  Hi, {Cookies.get("name")}
                </a>
              </Link>
              <hr />
            </li>
          ) : (
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link d-lg-none defaultColor">
                  <i className="fas fa-lg fa-user-circle mr-2"></i>
                  Login/Signup
                </a>
              </Link>
              <hr />
            </li>
          )}

          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">
                <i className="fas fa-home mr-2 d-lg-none"></i>
                Home <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#reviews">
              <a className="nav-link">
                <i className="fas fa-star-half-alt mr-2  d-lg-none"></i>
                Reviews
              </a>
            </Link>
          </li>

          {Cookies.get("rt") ? (
            <>
              <li className="nav-item">
                <Link href="#aboutus">
                  <a className="nav-link">
                    <i className="fas fa-info-circle mr-2  d-lg-none"></i>
                    My orders
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#aboutus">
                  <a className="nav-link">
                    <i className="fas fa-info-circle mr-2  d-lg-none"></i>
                    Faq
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#aboutus">
                  <a className="nav-link d-lg-flex flex-row-reverse align-items-center">
                    <i className="fas fa-shopping-cart ml-lg-2 mr-2"></i>
                    Cart
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/logout">
                  <a className="nav-link">
                    <i className="fas fa-lg fa-user-circle ml-lg-2 mr-2 d-lg-none"></i>
                    Logout
                  </a>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link href="#aboutus">
                  <a className="nav-link">
                    <i className="fas fa-info-circle mr-2  d-lg-none"></i>
                    About us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <a className="nav-link d-none d-lg-block">Login/Signup
                  <i className="fas fa-lg fa-user-circle ml-2"></i></a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
