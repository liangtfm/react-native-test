var React = require('react-native');

var {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = React;

class Intro extends React.Component {

  onNextPress() {
    this.props.navigator.replace({
      component: 'Main',
      title: 'Main'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.introTextContainer}>
          <Text style={styles.introText}>
            This app lets you search for a Github user, view their profile, repositories, and write notes.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onNextPress.bind(this)}
          >
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
    padding: 20,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 24,
  },
  container: {
    marginTop: 65,
    padding: 30,
  },
  introText: {
    fontSize: 24,
  },
  introTextContainer: {
    flex: 1,
    marginTop: 100,
  }
});

module.exports = Intro;
