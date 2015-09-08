/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Dashboard = require('./App/Components/Dashboard');
var Intro = require('./App/Components/Intro');
var Main = require('./App/Components/Main');
var Map_View = require('./App/Components/MapViewExample');
var Notes = require('./App/Components/Notes');
var Profile = require('./App/Components/Profile');
var Repositories = require('./App/Components/Repositories');
var Web_View = require('./App/Components/Helpers/WebView');

var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(route.component)}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          {/* Next */}
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title} [{index}]
      </Text>
    );
  },
};

class TestProject extends React.Component{
  renderScene(route, nav) {
    console.log('route!', route.component);
    switch (route.component) {
      case 'Dashboard':
        return <Dashboard navigator={nav} userInfo={route.passProps.userInfo} />;
      case 'Profile':
        return <Profile navigator={nav} userInfo={route.passProps.userInfo} />;
      case 'Repositories':
        return <Repositories navigator={nav} userInfo={route.passProps.userInfo} repos={route.passProps.repos} />;
      case 'Notes':
        return <Notes navigator={nav} userInfo={route.passProps.userInfo} notes={route.passProps.notes} />;
      case 'Web_View':
        return <Web_View navigator={nav} userInfo={route.passProps.userInfo} url={route.passProps.url} />;
      case 'Map_View':
        return <Map_View navigator={nav} />;
      case 'Intro':
        return <Intro navigator={nav} />;
      default:
        return (
          <Main
            navigator={nav}
          />
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{component: 'Intro', title: 'Index', index: 0}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
      />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
  fontSize: 16,
  marginVertical: 10,
  },
  navBarTitleText: {
    color: 'blue',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: 'blue',
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);
module.exports = TestProject;
