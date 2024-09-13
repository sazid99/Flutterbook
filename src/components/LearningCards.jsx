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

        {/* 1.Download & Install ======================= */}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">1.Download & Install</h5> <hr />
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

        {/* 2.Create First Flutter App ===========================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">2.Create First Flutter App</h5> <hr />
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

        {/* 3.Run First Flutter App ==============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">3.Run First Flutter App</h5> <hr />
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
        {/* 4.Create Hello World App ===============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">4.Create Hello World App</h5> <hr />
            <h5>Step-1: Delete Demo Code</h5>
            <ul>
              <li>Open <u><b>Project Files</b></u></li>
              <li>Open <u><b>lib</b></u> folder</li>
              <li>Open <u><b>main.dart</b></u> files</li>
              <li>Delete all code</li>
            </ul>
          </div>
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
            src="https://i.postimg.cc/qRbvkDjW/Run-a-new-flutter-app.png"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>
        {/* 5.Flutter Widgets ===============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">5. Widgets in Flutter</h5> <hr />
            <p>Everything in flutter is a widget. Flutter provides a rich set of UI components and widgets to help build user interfaces.</p>
            <h5>1. Basic Widgets</h5>
            <ul>
              <li>Text</li>
              <li>Row</li>
              <li>Column</li>
              <li>Container</li>
              <li>Stack</li>
              <li>Scaffold</li>
              <li>Icon</li>
              <li>Image</li>
              <li>Placeholder</li>
            </ul>
            <h5>2. Input & Interaction Widgets</h5>
            <ul>
              <li>Button</li>
              <li>TextField</li>
              <li>Form</li>
              <li>Switch</li>
              <li>CheckBox</li>
              <li>Radio</li>
              <li>Slider</li>
            </ul>
            <h5>3. Layout Widgets</h5>
            <ul>
              <li>Center</li>
              <li>Padding</li>
              <li>Align</li>
              <li>Expanded</li>
              <li>SizedBox</li>
              <li>GridView</li>
              <li>ListView</li>
              <li>Wrap</li>
              <li>Flex</li>
            </ul>
            <h5>4. Layout Widgets</h5>
            <ul>
              <li>AppBar</li>
              <li>BottonNavigationBar</li>
              <li>Drawer</li>
              <li>TapBar</li>
              <li>Card</li>
              <li>Snackbar</li>
              <li>AlertDialog</li>
              <li>FloatingActionButton</li>
            </ul>
            <h5>5. Scrolling Widgets</h5>
            <ul>
              <li>SingleChildScrollView</li>
              <li>ListView</li>
              <li>GridView</li>
              <li>PageView</li>
              <li>CustomScrollView</li>
            </ul>
            <h5>6. Animation & Motion Widgets</h5>
            <ul>
              <li>AnimatedContainer</li>
              <li>AnimatedOpacity</li>
              <li>AnimatedBuilder</li>
              <li>FadeTransition</li>
              <li>ScaleTransition</li>
            </ul>
            <h5>7. State Management Widgets</h5>
            <ul>
              <li>StatefulWidget</li>
              <li>StatelessWidget</li>
              <li>StreamBuilder</li>
              <li>FutureBuilder</li>
            </ul>
          </div>
        </div>
        {/* 6.MaterialApp ==============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">6. MaterialApp</h5> <hr />
            <p>MaterialApp is a Flutter widget that provides the default Material design for your app. It includes a MaterialApp widget and a Theme widget.</p>
            <h5>Proparties:</h5>

            <ul>
              <li className="text-info">home: <u><b>Widget</b></u> (optional)</li>
              <li className="text-info">title: <u><b>String</b></u> (optional)</li> 
              <li className="text-info">color: <u><b>Color</b></u> (optional)</li>
              {<br/>}

              <li>theme: <u><b>ThemeData</b></u> (optional)</li> 
              <li>darkTheme: <u><b>ThemeData</b></u> (optional)</li> 
              <li>highContrastTheme: <u><b>ThemeData</b></u> (optional)</li> 
              <li>highContrastDarkTheme: <u><b>ThemeData</b></u> (optional)</li> 
              <li>themeMode: <u><b>ThemeData</b></u> (ThemeMode.system)</li> 
              <li>themeAnimationDuration: <u><b>kThemeAnimationDuration</b></u> (Duration)</li> 
              <li>themeAnimationCurve: <u><b>Curve</b></u> (Curves.linear)</li> 
              <li>themeAnimationStyle: <u><b>AnimationStyle</b></u> (optional)</li> 
              {<br/>}

              <li className="text-info">debugShowCheckedModeBanner: <u><b>bool</b></u> (optional)</li>
              <li className="text-info">debugShowMaterialGrid: <u><b>bool</b></u> (optional)</li>
              <li className="text-info">showPerformanceOverlay: <u><b>bool</b></u> (optional)</li>
              <li className="text-info">showSemanticsDebugger: <u><b>bool</b></u> (optional)</li>
              <li className="text-info">checkerboardRasterCacheImages: <u><b>bool</b></u> (optional)</li>
              <li className="text-info">checkerboardOffscreenLayers: <u><b>bool</b></u> (optional)</li>
              {<br/>}
              
              <li>useInheritedMediaQuery: <u><b>bool</b></u> (optional)</li>
              <li>scrollBehavior: <u><b>ScrollBehavior</b></u> (optional)</li>
              <li>restorationScopeId: <u><b>String</b></u> (optional)</li>
              <li>routes: <u><b>Map</b></u> of <u><b>String</b></u> to <u><b>WidgetBuilder</b></u> (optional)</li>
              <li>initialRoute: <u><b>String</b></u> (optional)</li>
              <li>onGenerateRoute: <u><b>RouteGenerator</b></u> (optional)</li>
              <li>onGenerateTitle: <u><b>String function(BuildContest)</b></u> (optional)</li>
              <li>onUnknownRoute: <u><b>RouteCallback</b></u> (optional)</li>
              <li>navigatorObservers: <u><b>List</b></u> of <u><b>NavigatorObserver</b></u> (optional)</li>
              <li>onNavigationNotification: <u><b>bool function(NavigationNotification)</b></u> (optional)</li>
            </ul>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*su03duAAUIIIMQeuJLvdDA.jpeg"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>
        {/* 6.Scaffold ==============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">6. Scaffold</h5> <hr />
            <p>A Scaffold is a widget that provides a common layout structure for your app. It includes a default app bar, a body, and a bottom navigation bar.</p>
            <h5>Proparties:</h5>

            <ul>
              <li>appBar: <u><b>AppBar</b></u> widget (optional)</li> 
              <li>body: <u><b>Widget</b></u> (required)</li> 
              <li>backgroundColor: <u><b>Color</b></u> (optional)</li> 
              <li>bottomNavigationBar: <u><b>BottomNavigationBar</b></u> widget (optional)</li>
              <li>bottomSheet: <u><b>widget</b></u> (optional)</li>
              {<br/>}
              <li className="text-info">drawer: <u><b>Drawer</b></u> widget (optional)</li>
              <li className="text-info">drawerScrimColor: <u><b>Color</b></u> (optional)</li>
              <li className="text-info">drawerHeader: <u><b>Widget</b></u> (optional)</li>
              <li className="text-info">endDrawer: <u><b>Widget</b></u> (optional)</li>
              <li className="text-info">drawerDragStartBehavior: <u><b>DragStartBehavior</b></u> (optional)</li>
              <li className="text-info">drawerEdgeDragWidth: <u><b>double</b></u> (optional)</li>
              <li className="text-info">onDrawerChanged: <u><b>bool</b></u> function(optional)</li>
              <li className="text-info">drawerEnableOpenDragGesture: <u><b>bool</b></u> function(optional)</li>
              <li className="text-info">endDrawerEnableOpenDragGesture: <u><b>bool</b></u> function(optional)</li>
              {<br/>}
              <li>floatingActionButton: <u><b>FloatingActionButton</b></u> widget (optional)</li>
              <li>floatingActionButtonLocation: <u><b>FloatingActionButtonLocation</b></u> widget (optional)</li>
              <li>floatingActionButtonAnimator: <u><b>FloatingActionButtonAnimator</b></u> widget (optional)</li>
              <li>persistentFooterButtons: <u><b>List</b></u> widget (optional)</li>
              <li>resizeToAvoidBottomInset: <u><b>bool</b></u> (optional)</li>
              <li>primary: <u><b>bool</b></u> (optional)</li>
              <li>extendBody: <u><b>bool</b></u> (optional)</li>
              <li>extendBodyBehindAppBar: <u><b>bool</b></u> (optional)</li>
            </ul>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*su03duAAUIIIMQeuJLvdDA.jpeg"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>
        {/* 6.AppBar ==============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">6.AppBar</h5> <hr />
            <p>AppBar is a Material Design component that provides a consistent app bar across all screen sizes.</p>
            <ul>
              <li>import <u><b>AppBar.dart</b></u> file</li>
              <li>create <u><b>AppBar</b></u> widget</li>
              <li>add <u><b>AppBar</b></u> to your <u><b>build method</b></u></li>
            </ul>
            
            <h5>Proparties:</h5>

            <ul>
              <li>backgroundColor: <u><b>Color</b></u> (for AppBar background Color)</li> 
              <li>foregroundColor: <u><b>Color</b></u> (for Icon Color)</li> 
              <li>shadowColor: <u><b>Color</b></u> (optional)</li> 
              <li>surfaceTintColor: <u><b>Color</b></u> (optional)</li> 
              <li>toolbarHeight: <u><b>double</b></u> (for customize AppBar Height)</li>
              <li>toolbarTextStyle: <u><b>TextStyle</b></u> (optional)</li>
              <li>toolbarOpacity: <u><b>bool</b></u> (1.0)</li>
              <li>bottomOpacity: <u><b>bool</b></u> (1.0)</li>
              <li>shape: <u><b>ShapeBorder</b></u> (optional)</li>
              {<br />}
              <li className="text-info">leading: <u><b>Widget</b></u> (for left icon)</li>
              <li className="text-info">leadingWidth: <u><b>double</b></u> (optional)</li>
              <li className="text-info">automaticallyImplyLeading: <u><b>bool</b></u> (optional)</li>
              <li className="text-info">title: <u><b>Text</b></u> widget</li>
              <li className="text-info">titleTextStyle: <u><b>TextStyle</b></u> (optional)</li>
              <li className="text-info">titleSpacing: <u><b>double</b></u> (optional)</li>
              <li className="text-info">centerTitle: <u><b>bool</b></u> (optional)</li>
              <li className="text-info">actions: <u><b>List</b></u> of <u><b>IconButton</b></u> widgets (for right icon)</li>
              {<br />}
              <li>flexibleSpace: <u><b>widget</b></u> (optional)</li>
              <li>bottom: <u><b>PreferredSizeWidget</b></u> (optional)</li>
              <li>elevation: <u><b>double</b></u> (optional)</li>
              <li>scrolledUnderElevation: <u><b>double</b></u> (optional)</li>
              <li>iconTheme: <u><b>IconThemeData</b></u> (optional)</li>
              <li>actionsIconTheme: <u><b>IconThemeData</b></u> (optional)</li>
              <li>primary: <u><b>bool</b></u> (optional)</li>
              <li>excludeHeaderSemantics: <u><b>bool</b></u> (optional)</li>
              <li>systemOverlayStyle: <u><b>systemUiOverlayStyle</b></u> (optional)</li>
              <li>forceMaterialTransparency: <u><b>bool</b></u> (optional)</li>
              <li>clipBehavior: <u><b>Clip</b></u> (optional)</li>
            </ul>
          </div>
          <img
            src="https://i.postimg.cc/MGkxqMV0/Appbar-Property.png"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>
        {/* 7.BottomNavigationBar ==============================*/}
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">7.BottomNavigationBar</h5> <hr />
            <p>
              BottomAppBar is a Material Design component that provides a consistent app bar at the bottom of the screen. It allows you to add actions, icons, and text to your app.
            </p>
            <ul>
              <li>import <u><b>BottomAppBar.dart</b></u> file</li>
              <li>create <u><b>BottomAppBar</b></u> widget</li>
              <li>add <u><b>BottomAppBar</b></u> to your <u><b>build method</b></u></li>
            </ul>
            
            <h5>Proparties:</h5>

            <ul>
              <li>backgroundColor: <u><b>Color</b></u> (optional)</li>
              <li>elevation: <u><b>double</b></u> (optional)</li>
              <li>toolbarHeight: <u><b>double</b></u> (optional)</li>
              <li>shape: <u><b>value</b></u> (optional)</li>
              <li>contentPadding: <u><b>EdgeInsets</b></u> (optional)</li>
              <li>actions: <u><b>List</b></u> of <u><b>Widget</b></u> widgets</li>
              <li>actionsIconSize: <u><b>double</b></u> (optional)</li>
              <li>actionsIconTheme: <u><b>IconThemeData</b></u> (optional)</li>
              <li>actionsTextTheme: <u><b>TextThemeData</b></u> (optional)</li>
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
