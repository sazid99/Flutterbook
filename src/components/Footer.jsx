import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4 mt-2">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase text-info mb-4 font-weight-bold">
                Flutterbook
              </h6>
              <p>
                Learn Flutter, build mobile apps, and develop web apps with
                ease.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase text-info mb-4 font-weight-bold">
                Categories
              </h6>
              <p>
                <a className="text-white text-decoration-none" href="#!">
                  Beginner
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none" href="#!">
                  Intermediate
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none" href="#!">
                  Advanced
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase text-info mb-4 font-weight-bold">
                Services
              </h6>
              <p>
                <a className="text-white text-decoration-none" href="#!">
                  Your Account
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none" href="#!">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none" href="#!">
                  Shipping Routes
                </a>
              </p>
              <p>
                <a className="text-white text-decoration-none" href="#!">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase text-info mb-4 font-weight-bold">
                Contacts
              </h6>
              <p className="text-sm-center text-md-start">
                <i className="fa fa-home mr-3 pe-2"></i>
                Flutterbook, Inc.
                <br />
                <i className="fa fa-envelope mr-3 pe-2"></i>
                flutterbook@gmail.com
                <br />
                <p>
                  <a
                    className="btn-floating btn-sm text-white text-decoration-none"
                    aria-label="Telegram"
                    href="https://t.me/flutterbook_community"
                    target="_black"
                  >
                    <i className="fa-brands fa-telegram contact-icon youtube"></i>{" "}
                    @flutterbook_community
                  </a>
                </p>
              </p>
            </div>

            <hr className="mb-4" />
            <div className="row align-item-center">
              <div className="col-md-7 col-lg-8">
                <p>
                  Copyright ©2024 Flutterbook. All rights reserved. Designed by{" "}
                  <a className="text-decoration-none" href="#">
                    <strong>Mahmuduzzaman Sazid</strong>
                  </a>
                </p>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a
                        className="btn-floating btn-sm text-white fs-5 ps-3"
                        aria-label="Whatsapp"
                        href="https://api.whatsapp.com/send/?phone=8801989399577"
                        target="_blank"
                      >
                        <i className="fa-brands fa-whatsapp contact-icon whatsapp"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn-floating btn-sm text-white fs-5 ps-3 "
                        aria-label="Linkedin"
                        href="https://www.linkedin.com/in/mahmuduzzaman-sazid"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin contact-icon linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn-floating btn-sm text-white fs-5 ps-3"
                        aria-label="Facebook"
                        href="https://www.facebook.com/mahmuduzzaman.sazid"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook contact-icon facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn-floating btn-sm text-white fs-5 ps-3"
                        aria-label="Twitter"
                        href="#"
                      >
                        <i className="fa-brands fa-twitter contact-icon twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn-floating btn-sm text-white fs-5 ps-3"
                        aria-label="Instagram"
                        href="https://www.instagram.com/@mahmuduzzamansazid"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram contact-icon instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn-floating btn-sm text-white fs-5 ps-3"
                        aria-label="Youtube"
                        href="https://www.youtube.com/@mahmuduzzamansazid"
                        target="_blank"
                      >
                        <i className="fa-brands fa-youtube contact-icon youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
