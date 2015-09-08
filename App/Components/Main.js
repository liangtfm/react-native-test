var React = require('react-native');

var api = require('../Utils/api');

var {
  ActivityIndicatorIOS,
  MapView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }

  handleSubmit() {
    this.setState({
      isLoading: true
    });

    api.getBio(this.state.username).then((res) => {
        console.log('getBio!', res);
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          });
        } else {
          this.props.navigator.push({
            title: 'Dashboard',
            component: 'Dashboard',
            passProps: {userInfo: res}
          });
          this.setState({
            isLoading: false,
            error: false,
            username: ''
          });
        }
      });
  }

  handleMapView() {
    this.props.navigator.push({
      title: 'Map View Page',
      component: 'Map_View'
    });
  }

  render() {
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    );

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a Github User </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
          />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor='white'
          >
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleMapView.bind(this)}
          underlayColor='green'
          >
          <Text style={styles.buttonText}> Map View </Text>
        </TouchableHighlight>
        <ActivityIndicatorIOS
          animating={this.state.isLoading}
          color="#111"
          size="large"
          style={styles.centerSelf}
          />
        {showErr}
      </View>
    );
  }
};

var styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#111',
    fontSize: 18,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerSelf: {
    alignSelf: 'center',
  },
  mainContainer: {
    backgroundColor: '#48BBEC',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
    padding: 30,
  },
  map: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    fontSize: 23,
    height: 58,
    marginRight: 5,
    padding: 15,
  },
});

module.exports = Main;
