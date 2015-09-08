var React = require('react-native');

var {
  StyleSheet,
  View,
} = React;

class Separator extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.space} />
        <View style={styles.separator} />
        <View style={styles.space} />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 0.95,
  },
  space: {
    flex: 0.025,
  }
});

module.exports = Separator;
