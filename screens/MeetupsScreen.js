import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { MonoText } from '../components/StyledText';
import { fetchMeetups } from '../actions/meetups';

class MeetupsScreen extends React.Component {
  static navigationOptions = {
    title: 'Meetups',
  };

  async componentDidMount() {
    const { user, getMeetups } = this.props;
    if (user) {
      getMeetups();
    }
  }

  render() {
    const { user, meetups } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
        <FlatList style={styles.meetupsList}
          data={meetups}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Meetup', { index: item.index})}}>
              <Text style={styles.meetupText}>{item.value.name}</Text>
            </TouchableOpacity>
          }
        />
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
  meetupText: {
    fontSize: 16,
    color: '#2e78b7',
  },
  meetupsList: {
    marginLeft: 10
  },
})

const mapStateToProps = state => ({
  user: state.user,
  meetups: state.meetups
});

const mapDispatchToProps = dispatch => ({
    getMeetups: () => dispatch(fetchMeetups())
});

export default connect(mapStateToProps, mapDispatchToProps)(MeetupsScreen);
