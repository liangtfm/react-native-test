var React = require('react-native');

var api = require('../Utils/api');
var Notes = require('./Notes');
var Profile = require('./Profile');
var Repositories = require('./Repositories');

var {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

class Dashboard extends React.Component{
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    };

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    };

    return obj;
  }

  goToProfile() {
    this.props.navigator.push({
      title: "Profile Page",
      component: 'Profile',
      passProps: {userInfo: this.props.userInfo}
    });
  }

  goToRepos() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        console.log('repos!', res);
        this.props.navigator.push({
          title: "Repositories Page",
          component: 'Repositories',
          passProps: {
            userInfo: this.props.userInfo,
            repos: res
          }
        });
      });
  }

  goToNotes() {
    api.getNotes(this.props.userInfo.login)
      .then((res) => {
        res = res || {};
        console.log('getNotes', res);
        this.props.navigator.push({
          title: "Notes Page",
          component: 'Notes',
          passProps: {
            userInfo: this.props.userInfo,
            notes: res
          }
        });
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}>
            <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}>
            <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}>
            <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
  },
  image: {
    height: 350,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 24,
  }
});

module.exports = Dashboard;
