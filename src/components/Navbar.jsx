import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark fixed-top">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
          <i className="fa-brands fa-flutter"></i>
            lutterbook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          <div
            className="offcanvas offcanvas-end text-bg-nav"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Learning Steps
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            {/* Search bar */}
            <div className="container">
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>

            {/* Dropdown Items */}
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {/* Download and install */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#download-and-install"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    1. Download & Install
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#download-and-install">
                        1. Flutter
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#download-and-install">
                        2. Dart
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#download-and-install">
                        3. Android Studio - for Android
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Create First Flutter App */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#create-first-flutter-app"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    2. <b>Create</b> First Flutter App
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#create-first-flutter-app">
                        1. Open windows{" "}
                        <u>
                          <b>Command shell</b>
                        </u>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#create-first-flutter-app">
                        2. Command{" "}
                        <u>
                          <b>flutter create appname</b>
                        </u>
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Run First Flutter App */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#run-first-flutter-app"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    3. <b>Run</b> First Flutter Demo App
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#run-first-flutter-app">
                        1. Open{" "}
                        <u>
                          <b>Android Studio</b>
                        </u>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#run-first-flutter-app">
                        2. Open{" "}
                        <u>
                          <b>appname file</b>
                        </u>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#run-first-flutter-app">
                        3. Connect{" "}
                        <u>
                          <b>Emulator</b>
                        </u>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#run-first-flutter-app">
                        4. Run Flutter Demo App
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Create Basic Hello World App */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#create-hello-world-app"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    4. Create Basic <b>Hello World</b> App
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <h5>Step-1: Delete Demo Code</h5>
                      <a className="dropdown-item" href="#create-hello-world-app">
                        1. Open{" "}
                        <u>
                          <b>Project Files</b>
                        </u>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#create-hello-world-app">
                        2. Open{" "}
                        <u>
                          <b>lib</b>
                        </u>{" "}
                        folder
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#create-hello-world-app">
                        3. Open{" "}
                        <u>
                          <b>main.dart</b>
                        </u>{" "}
                        file
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#create-hello-world-app">
                        4. Delete Demo Code
                      </a>
                    </li>
                    <li>
                      <h5>Step-2: Write New Code</h5>
                      <a className="dropdown-item" href="#create-hello-world-app">
                        1. import{" "}
                        <u>
                          <b>Material.dart</b>
                        </u>{" "}
                        Files
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#create-hello-world-app">
                        2. Create{" "}
                        <u>
                          <b>main</b>
                        </u>{" "}
                        function
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#create-hello-world-app">
                        3. Create an{" "}
                        <u>
                          <b>App Widget</b>
                        </u>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#create-hello-world-app">
                        4. Create a{" "}
                        <u>
                          <b>Screen widget</b>
                        </u>
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Flutter Widgets */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                    5. <b>Flutter Widgets</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#flutter-widgets">
                        Properties
                      </a>
                    </li>
                  </ul>
                </li>
                {/* MaterialApp */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                    6. <b>MaterialApp</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#material-app">
                        Properties
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Scaffold */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                    7. <b>Scaffold</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#scaffold">
                        Properties
                      </a>
                    </li>
                  </ul>
                </li>
                {/* AppBar */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                    8. <b>AppBar</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#appbar-property">
                        Properties
                      </a>
                    </li>
                  </ul>
                </li>
                {/* BottomNavigationBar */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                    9. <b>BottomNavigationBar</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#bottom-navigation-bar">
                        Properties
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Drawer */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                    10. <b>Drawer</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#drawer">
                        Properties
                      </a>
                    </li>
                  </ul>
                </li>


                {/* Container */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                    11. <b>Container</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#container">
                        Properties
                      </a>
                    </li>
                  </ul>
                </li>


                {/* Row & Column */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  
                    12. <b>Row & Column</b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#row-and-column">
                        Properties
                      </a>
                    </li>
                  </ul>
                </li>

                {/* List items end here */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
