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
            <section id="download-and-install"></section>
            <h5 className="card-title">1. Download & Install</h5> <hr />
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
            <section id="create-first-flutter-app"></section>
            <h5 className="card-title">2. Create First Flutter App</h5> <hr />
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
            <section id="run-first-flutter-app"></section>
            <h5 className="card-title">3. Run First Flutter App</h5> <hr />
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
            <section id="create-hello-world-app"></section>
            <h5 className="card-title">4. Create Hello World App</h5> <hr />
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
        <section id="flutter-widgets"></section>
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
            <h5>4. Material Widgets</h5>
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
        <section id="material-app"></section>
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
        {/* 7. Scaffold ==============================*/}
        <section id="scaffold"></section>
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">7. Scaffold</h5> <hr />
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
        {/* 8.AppBar ==============================*/}
        <section id="appbar-property"></section>
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">8. AppBar</h5> <hr />
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
        {/* 9.BottomNavigationBar ==============================*/}
        {/* section is used for navigate */}
        <section id="bottom-navigation-bar"></section>
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">9. BottomNavigationBar</h5> <hr />
            <p>BottomNavigationBar is a Material Design component that provides a navigation bar at the bottom of a screen.</p>
            <ul>
              <li>import <u><b>BottomNavigationBar.dart</b></u> file</li>
              <li>create <u><b>BottomNavigationBar</b></u> widget</li>
              <li>add <u><b>BottomNavigationBar</b></u> to your <u><b>build method</b></u></li>
            </ul>
            <p>For Navigate one screen to another,,</p>
            <p><b>List&lt;Widget&gt;</b> widgetList = const [ <br/> HomeScreen() , <br /> ProfileScreen() ,<br /> SettingScreen() <br/> ] ;</p>
            
            <h5>Proparties:</h5>

            <ul>
              <li>items: <u><b>BottomNavigationBarItem</b></u> (required icon, label)</li> 
              <li>type: <u><b>BottomNavigationBarType</b></u> (fixed, shifting)</li> 
              <li>backgroundColor: <u><b>Color</b></u> (optional)</li> 
              <li>currentIndex: <u><b>(int)</b></u> (0,1,2,3,4)</li>
              <li>onTap: <u><b>void Function(int)</b></u> (optional)</li> 
              {<br/>} 
              <li className="text-info">iconSize: <u><b>double</b></u> (24.0)</li> 
              <li className="text-info">selectedFontSize: <u><b>double</b></u> (14.0)</li> 
              <li className="text-info">unselectedFontSize: <u><b>double</b></u> (12.0)</li>
              <li className="text-info">selectedItemColor: <u><b>Color</b></u> (optional)</li> 
              <li className="text-info">unselectedItemColor: <u><b>Color</b></u> (optional)</li> 
              <li className="text-info">selectedIconTheme: <u><b>IconThemeData</b></u> (optional)</li> 
              <li className="text-info">unselectedIconTheme: <u><b>IconThemeData</b></u> (optional)</li>
              <li className="text-info">selectedLabelStyle: <u><b>TextStyle</b></u> (optional)</li>
              <li className="text-info">unselectedLabelStyle: <u><b>TextStyle</b></u> (optional)</li>
              <li className="text-info">showSelectedLabels: <u><b>bool</b></u> (optional)</li>
              <li className="text-info">showUnSelectedLabels: <u><b>bool</b></u> (optional)</li> 
              {<br/>}
              <li>fixedColor: <u><b>Color</b></u> (optional)</li>
              <li>elevation: <u><b>double</b></u> (optional)</li>               
              <li>mouseCursor: <u><b>MouseCursor</b></u> (optional)</li>
              <li>enableFeedback: <u><b>bool</b></u> (optional)</li>
              <li>landscapeLayout: <u><b>BottomNavigationBarLandscapeLayout</b></u> (optional)</li>
              <li>useLegacyColorScheme: <u><b>bool</b></u> (true)</li>
            </ul>
          </div>
          <img
            src="https://i.postimg.cc/N0xX39qG/Bottom-Navigation-Bar.png"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>


        {/* 10. Drawer ==============================*/}
        {/* section is used for navigation */}
        <section id="drawer"></section>
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">10. Drawer</h5> <hr />
            <p>
              A drawer is a component that slides in from the side of the screen to reveal a list of options or actions. It can be used to present a hierarchical menu, switch between different views, or provide access to frequently used features.
            </p>
            
            <h5>Proparties:</h5>

            <ul>
              <li>child: <u><b>Widget</b></u> (required)</li>
              <li>backgroundColor: <u><b>Color</b></u> (optional)</li>
              <li>shadowColor: <u><b>Color</b></u> (optional)</li>
              <li>surfaceTintColor: <u><b>Color</b></u> (optional)</li>
              <li>elevation: <u><b>double</b></u> (optional)</li>
              <li>width: <u><b>double</b></u> (240.0)</li>
              <li>shape: <u><b>ShapeBorder</b></u> (240.0)</li>
              <li>clipBehavior: <u><b>Clip</b></u> (optional)</li>
              <li>semanticLabel: <u><b>String</b></u> (optional)</li>
            </ul>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*su03duAAUIIIMQeuJLvdDA.jpeg"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>


        {/* 11. Container ==============================*/}
        {/* section is used for navigate */}
        <section id="container"></section>
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">11. Container</h5> <hr />
            <p>
              A Container is a Flutter widget that provides a flexible and composable layout structure. It can be used to arrange child widgets in a grid, stack, or other layouts.
            </p>
            
            <h5>Proparties:</h5>

            <ul>
              <li>child: <u><b>Widget</b></u> (required)</li>
              <li>color: <u><b>Color</b></u> (optional)</li>
              <li>height: <u><b>double</b></u> (optional)</li>
              <li>width: <u><b>double</b></u> (optional)</li>
              <li>padding: <u><b>EdgeInsetsGeometry</b></u> (optional)</li>
              <li>margin: <u><b>EdgeInsetsGeometry</b></u> (optional)</li>
              <li>decoration: <u><b>Decoration</b></u> (optional)</li>
              <li>foregroundDecoration: <u><b>Decoration</b></u> (optional)</li>
              <li>alignment: <u><b>AlignmentGeometry</b></u> (optional)</li>
              <li>constraints: <u><b>BoxConstraints</b></u> (optional)</li>             
              <li>transform: <u><b>Matrix4</b></u> (optional)</li>
              <li>transformAlignment: <u><b>AlignmentGeometry</b></u> (optional)</li>
              <li>clipBehavior: <u><b>Clip</b></u> (optional)</li>           
            </ul>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*su03duAAUIIIMQeuJLvdDA.jpeg"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>


        {/* 12. Row & Column ==============================*/}
        {/* section is used for navigate */}
        <section id="row-and-column"></section>
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">12. Row & Column</h5> <hr />
            <p>
              A Row is a Flutter widget that arranges its children horizontally in a single line. It supports various alignment options, such as center, leading, trailing, and crossAxisAlignment.
            </p> <br/>
            <p>
              A Column is a Flutter widget that arranges its children vertically in a single column. It supports various alignment options, such as center, leading, trailing, and crossAxisAlignment.
            </p>
            
            <h5>Proparties:</h5>

            <ul>
              <li>children: <u><b>List&lt;Widget&gt;</b></u> (required)</li>
              <li>mainAxisAlignment: <u><b>MainAxisAlignment</b></u> (optional)</li>
              <li>crossAxisAlignment: <u><b>CrossAxisAlignment</b></u> (optional)</li>
              <li>textDirection: <u><b>TextDirection</b></u> (optional)</li>
              <li>verticalDirection: <u><b>VerticalDirection</b></u> (optional)</li>
              <li>textBaseline: <u><b>TextBaseline</b></u> (optional)</li>
            </ul>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*su03duAAUIIIMQeuJLvdDA.jpeg"
            className="card-img-bottom"
            alt="Download & Install Flutter"
          />
        </div>

        {/* 13. Button ==============================*/}
        {/* section is used for navigate */}
        <section id="button-widgets"></section>
        <div className="card bg-dark mt-5">
          <div className="card-body">
            <h5 className="card-title">13. Button</h5> <hr />
            <p>
              A Button is a Flutter widget that displays a clickable button with a specified text or icon. It supports various customization options, such as color, text style, onPressed, and disabled state.
            </p>
            <h5>Types of Button:</h5>
            <ul>
              <li><b>ElevatedButton</b></li>
              <li><b>TextButton</b></li>
              <li><b>OutlinedButton</b></li>
              <li><b>IconButton</b></li>
              <li><b>FloatingActionButton</b></li>
              <li><b>DropdownButton</b></li>
              <li><b>InkWell</b> is a button that is clickable widgets like container, images, card.</li>
              <li><b>PopupButton</b></li>
              <li><b>BackButton</b></li>
              <li><b>CloseButton</b></li>
              <li><b>MaterialButton</b></li>
              <li><b>RawMaterialButton</b></li>
              <li><b>GestureDetector</b></li>
            </ul>
            
            <h5>Proparties:</h5>

            <ul>
              <li>child: <u><b>Widget</b></u> (required)</li>
              <li>onPressed: <u><b>VoidCallback</b></u> (optional)</li>
              <li>onLongPressed: <u><b>VoidCallback</b></u> (optional)</li>
              <li>onHover: <u><b>VoidCallback</b></u> (optional)</li>
              <li>style: <u><b>ButtonStyle</b></u> (optional)</li>
              <li>focusNode: <u><b>FocusNode</b></u> (optional)</li>
              <li>autofocus: <u><b>bool</b></u> (false)</li>
              <li>clipBehavior: <u><b>Clip</b></u> (optional)</li>
              <li>statesController: <u><b>WidgetStatesController</b></u> (optional)</li>
              <li>iconAlignment: <u><b>IconAlignment</b></u> (optional)</li>
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
