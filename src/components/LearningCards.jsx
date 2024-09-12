import "./LearningCards.css";

function LearningCards() {
  return (
    <>
      <div className="container">
        {/* Cards Starts here =======================*/}

        <div className="card  text-bg-dark">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*su03duAAUIIIMQeuJLvdDA.jpeg"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h1 className="text-md-center">Flutterbook</h1>
            <p className="text-md-center">Learn Flutter</p>
          </div>
        </div>

        {/* Download & Install ======================= */}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">Download & Install</h5> <hr />
            <ul>
              <li>
                <p className="card-text">Flutter</p>
                <a
                  href="https://flutter.dev/docs/get-started/install"
                  className="btn btn-primary"
                >
                  Download Flutter
                </a>
              </li>
              <br />
              {/* <br /> */}
              <li>
                <p className="card-text">Dart</p>

                <a
                  href="https://dart.dev/get-started/install"
                  className="btn btn-primary"
                >
                  Download Dart
                </a>
              </li>
              <br />
              <li>
                <p className="card-text">
                  Android Studio & Visual Studio Code (optional)
                </p>
                <ul>
                  <li>
                    <p>Create an Emulator to run your Flutter App</p>
                  </li>
                  <li>
                    <p>Or use physical phone as running environment</p>
                  </li>
                </ul>

                <a
                  href="https://developer.android.com/studio"
                  className="btn btn-primary m-2"
                >
                  Download Android Studio
                </a>
                <a
                  href="https://code.visualstudio.com/"
                  className="btn btn-primary ml-3 m-2"
                >
                  Download VS Code
                </a>
              </li>
            </ul>
          </div>
          <img
            src="https://i.postimg.cc/mkywKRmQ/Untitled-design.png"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>

        {/* Create First Flutter App ===========================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">Create First Flutter App</h5> <hr />
            <ul>
              <li>
                <p>
                  Open windows{" "}
                  <u>
                    <b>Command shell</b>(win+R)
                  </u>{" "}
                  <br />
                </p>
              </li>
              <li>
                <p className="card-text">
                  Enter Command{" "}
                  <u>
                    <b>flutter create appname</b>
                  </u>
                </p>
              </li>
            </ul>
          </div>
          <img
            src="https://i.postimg.cc/z3mr2CPL/create-first-flutter-app.png"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>

        {/* Run First Flutter App ==============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">Run First Flutter App</h5> <hr />
            <ul>
              <li>
                <p className="card-text">Open <u><b>Android Studio</b></u></p>
              </li>
              <li>
                <p className="card-text">Open <u><b>appname file</b></u></p>
              </li>
              <li>
                <p className="card-text">Connect <u><b>Emulator</b></u>
                <ul><li>Virtual Emulator</li>
                <li>Physical Device</li>
                </ul>
                </p>
              </li>
              <li>
                <p className="card-text"><u><b>Run</b></u> Flutter Demo App</p>
              </li>
            </ul>
          </div>
          <img
            src="https://i.postimg.cc/xCc8WPgg/Run-First-Flutter-App.png"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>
        {/* Create Hello World App ===============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">Create Hello World App</h5> <hr />
            <h5>Step-1: Delete Demo Code</h5>
            <ul>
              <li>Open <u><b>Project Files</b></u></li>
              <li>Open <u><b>lib</b></u> folder</li>
              <li>Open <u><b>main.dart</b></u> files</li>
              <li>Delete all code</li>
            </ul>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*su03duAAUIIIMQeuJLvdDA.jpeg"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
          <div className="card-body">
            <h5>Step-2: Write New Code</h5>
            <p>There are <b>4 steps</b> to Run a new Flutter App</p>
            <ul>
              <li>import <u><b>Material.dart</b></u> file</li>
              <li>create <u><b>Main function</b></u></li>
              <li>create an <u><b>app widget</b></u></li>
              <li>create a <u><b>screen widget</b></u></li>
            </ul>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*su03duAAUIIIMQeuJLvdDA.jpeg"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>
        {/* AppBar ==============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">AppBar</h5> <hr />
            <p>AppBar is a Material Design component that provides a consistent app bar across all screen sizes.</p>
            <ul>
              <li>import <u><b>AppBar.dart</b></u> file</li>
              <li>create <u><b>AppBar</b></u> widget</li>
              <li>add <u><b>AppBar</b></u> to your <u><b>build method</b></u></li>
            </ul>
            
            <h5>Proparties:</h5>

            <ul>
              <li>title: <u><b>Text</b></u> widget</li>
              <li>actions: <u><b>List</b></u> of <u><b>IconButton</b></u> widgets</li>
              <li>leading: <u><b>Widget</b></u> (optional)</li>
              <li>backgroundColor: <u><b>Color</b></u> (optional)</li>
              <li>elevation: <u><b>double</b></u> (optional)</li>
              <li>toolbarHeight: <u><b>double</b></u> (optional)</li>
              <li>titleSpacing: <u><b>double</b></u> (optional)</li>
              <li>centerTitle: <u><b>bool</b></u> (optional)</li>
              <li>primary: <u><b>bool</b></u> (optional)</li>
              <li>showTitle: <u><b>bool</b></u> (optional)</li>
              <li>fixed: <u><b>bool</b></u> (optional)</li>
              <li>extendBody: <u><b>bool</b></u> (optional)</li>
              <li>scrollBehavior: <u><b>ScrollBehavior</b></u> (optional)</li>
              <li>titleTextStyle: <u><b>TextStyle</b></u> (optional)</li>
              <li>actionsIconSize: <u><b>double</b></u> (optional)</li>
              <li>actionsIconTheme: <u><b>IconThemeData</b></u> (optional)</li>
              <li>actionsLabelStyle: <u><b>TextStyle</b></u> (optional)</li>
              <li>actionsIconSpacing: <u><b>double</b></u> (optional)</li>
              <li>actionsMaxIconSize: <u><b>double</b></u> (optional)</li>
              <li>actionsOverflowButton: <u><b>Widget</b></u> (optional)</li>
              <li>actionsPosition: <u><b>AppBarActionsPosition</b></u> (optional)</li>
              <li>actionsSpacing: <u><b>double</b></u> (optional)</li>
              <li>actionsRowHeight: <u><b>double</b></u> (optional)</li>
              <li>actionsTextTheme: <u><b>TextThemeData</b></u> (optional)</li>
              <li>actionsWrap: <u><b>bool</b></u> (optional)</li>
              <li>actionsAlignment: <u><b>Alignment</b></u> (optional)</li>
              <li>actionsIconTheme: <u><b>IconThemeData</b></u> (optional)</li>
              <li>actionsTextTheme: <u><b>TextThemeData</b></u> (optional)</li>
              <li>actionsIconSize: <u><b>double</b></u> (optional)</li>
              <li>actionsIconTheme: <u><b>IconThemeData</b></u> (optional)</li>
              <li>actionsTextTheme: <u><b>TextThemeData</b></u> (optional)</li>
              <li>actionsIconSize: <u><b>double</b></u> (optional)</li>
              <li>actionsIconTheme: <u><b>IconThemeData</b></u> (optional)</li>
              <li>actionsTextTheme: <u><b>TextThemeData</b></u> (optional)</li>
              <li>actionsIconSize: <u><b>double</b></u> (optional)</li>
            </ul>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*su03duAAUIIIMQeuJLvdDA.jpeg"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>

        {/* Cards end here ============================*/}
      </div>
    </>
  );
}

export default LearningCards;
