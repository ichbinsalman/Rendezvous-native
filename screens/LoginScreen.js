import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';

import { MonoText } from '../components/StyledText';
import { setUsername, setPassword, login } from '../actions/login';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    const { user, UI, usernameChange, passwordChange, loginUser } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.loginContainer}>
            <Text>
              Email
            </Text>
            <TextInput textContentType="emailAddress" style={styles.loginInput} value={UI.username} onChangeText={usernameChange} />
            <Text>
              Password
            </Text>
            <TextInput secureTextEntry={true} textContentType="password" style={styles.loginInput} value={UI.password} onChangeText={passwordChange} />
          </View>
          <View style={styles.loginButtonContainer}>
            <Button title="Login" onPress={() => { loginUser(UI.username, UI.password) }} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  header: {
    height: 50,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20
  },
  loginContainer: {
    marginLeft: 10
  },
  loginInput: {
    backgroundColor: 'rgba(204,204,204,0.2)'
  },
  loginButtonContainer: {
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI && state.UI.login || ''
});

const mapDispatchToProps = dispatch => ({
    usernameChange: (username) => dispatch(setUsername(username)),
    passwordChange: (password) => dispatch(setPassword(password)),
    loginUser: (username, password) => dispatch(login(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
