import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BackgroundCurve from '../components/BackgroundCurve';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigate = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <BackgroundCurve style={styles.svg} />
          <View style={styles.headerContainer}>
            <View style={styles.headerGroupIndicator}>
              <View style={styles.headerGroupIndicatorLeft}>
                <Feather name="map-pin" color="#fff" size={16} />
                <Text style={styles.headerGroupIndicatorText}>
                  Jakarta (JKTA)
                </Text>
                <Feather name="chevron-down" color="#fff" size={16} />
              </View>
              <View style={styles.headerGroupIndicatorRight}>
                <Feather name="settings" color="#fff" size={16} />
              </View>
            </View>
            <Text
              style={styles.heading}>{`Hiling.id`}</Text>
            <View style={styles.groupInputContainer}>
              <View style={styles.inputSearchContainer}>
                <TextInput
                  style={styles.inputSearch}
                  value="Palembang (PLM) "
                />
                <TouchableOpacity
                  style={styles.buttonSearch}
                  onPress={() => navigate.navigate('Ticketing')}>
                  <Feather name="search" color="gray" size={16} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  svg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerContainer: {
    marginTop: 52,
    padding: 15,
  },
  headerGroupIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerGroupIndicatorLeft: {
    flexDirection: 'row',
  },
  headerGroupIndicatorText: {
    fontWeight: 'bold',
    color: '#fff',
    marginHorizontal: 5,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 35,
  },
  groupInputContainer: {
    marginTop: 20,
    padding: 10,
  },
  inputSearchContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
  },
  inputSearch: {
    padding: 12,
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    flex: 1,
  },
  buttonSearch: {
    shadowColor: '#222',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 12,
    backgroundColor: '#fff',
    padding: 13,
    borderRadius: 30,
    aspectRatio: 1,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#F88C43',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: '500',
    color: '#fff',
    marginLeft: 10,
  },
});

export default Home;
