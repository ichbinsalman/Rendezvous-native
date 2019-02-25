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
  View
} from 'react-native';
import { WebBrowser, MapView } from 'expo';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { MonoText } from '../components/StyledText';

class MeetupDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Meetup Details',
  };

  render() {
    const { user, meetups, navigation } = this.props;
    if (navigation.state.params.index >= 0) {
      const selectedMeetup = meetups[navigation.state.params.index];
      const meetupDetails = {
        name: selectedMeetup.value.name,
        date: selectedMeetup.value.date,
        time: selectedMeetup.value.time,
      };

      const formattedDetails = Object.entries(meetupDetails).map((detail) => {
        return (
          <View style={styles.meetupDetails}>
            <View style={styles.detail}>
              <Text>
                {detail[0]}
              </Text>
            </View>
            <View style={styles.detail}>
              <Text>
                {detail[1]}
              </Text>
            </View>
          </View>
        );
      });

      let mapLayout = (
        <View>
          <Text>
            no coordinates set
          </Text>
        </View>
      );

      if (selectedMeetup.value.coordinates) {
        mapLayout = (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: selectedMeetup.value.coordinates.latitude,
              longitude: selectedMeetup.value.coordinates.longitude,
              latitudeDelta: 0.04,
              longitudeDelta: 0.04
            }}
          />
        );
      }

      return (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            {formattedDetails}
            {mapLayout}
          </View>
        </View>
      );
    }
    return (
      <View />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
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
  meetupDetails: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    height: 30
  },
  detail: {
    height: 30,
    width: '50%'
  },
  map: {
    height: 500,
    width: 500
  }
})

const mapStateToProps = state => ({
  user: state.user,
  meetups: state.meetups
});

export default connect(mapStateToProps)(MeetupDetailsScreen);
