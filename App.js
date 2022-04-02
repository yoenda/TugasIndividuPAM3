import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import Home from './src/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import Search from './src/Search';
const Tab = createBottomTabNavigator();

const Blank = () => {
  return <View />;
};

export default function App() {
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;

      if (route.name === 'Explore') {
        iconName = 'home';
      } else if (route.name === 'Ticketing') {
        iconName = 'price-tag';
      } 

      return <Entypo name={iconName} size={size} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: '#74B72E',
          inactiveTintColor: '#464962',
        }}>
        <Tab.Screen name="Explore" component={Home} />
        <Tab.Screen name="Ticketing" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
