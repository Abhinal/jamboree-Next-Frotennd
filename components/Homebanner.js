import Link from "next/link";

export default function Navbar() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="/images/home_banner1.png"
            alt="First slide"
          />
          <div className="bgrad"></div>
          <div className="carousel-banner1 text-white cinzel">
            <h2>
              Dont go looking for perfect fit
              <br />
              We are here to help u.
            </h2>
            <p>Because dressmaking is our passion.</p>
            <Link href="/category">
              <a className="btn-dark-jm btn btn-lg">Book Online Appointment</a>
            </Link>
          </div>
          <div className="row container-fluid carousel-footer cinzel text-center text-white pb-4">
            <p className="col-6 col-lg-3 my-auto">
              <b>Great Fit</b>
            </p>
            <p className="col-3 d-none d-lg-block my-auto">
              <b>Lorem ipsum</b>
            </p>
            <p className="col-3 d-none d-lg-block my-auto">
              <b>Doorstep Service</b>
            </p>
            <p className="col-6 col-lg-3 my-auto">
              <b>Free design consultancy</b>
            </p>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <i className="fas fa-chevron-right fa-lg ml-auto mr-lg-5 mr-md-4 mr-sm-3 mr-2"></i>
      </a>
    </div>
  );
}
