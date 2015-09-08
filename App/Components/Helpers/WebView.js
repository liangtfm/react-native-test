var React = require('react-native');

var {
  View,
  WebView,
  StyleSheet,
} = React;

class Web_View extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} />
      </View>
    );
  };
};

Web_View.propTypes = {
  url: React.PropTypes.string.isRequired
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

module.exports =  Web_View;
