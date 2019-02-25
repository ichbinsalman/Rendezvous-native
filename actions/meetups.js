import firebase from 'firebase';

export const fetchMeetups = () => async dispatch => {
  try {
    const meetups = await firebase.database().ref('meetups').once('value');
    const structuredMeetups = Object.entries(JSON.parse(JSON.stringify(meetups))).map((meetup, index) => {
      return {
        key: meetup[0],
        value: meetup[1],
        index
      };
    });
    console.log(structuredMeetups);
    dispatch({
      type: 'MEETUPS_LOADED',
      meetups: structuredMeetups
    });
  } catch (err) {
      console.log(err);
  }
};
