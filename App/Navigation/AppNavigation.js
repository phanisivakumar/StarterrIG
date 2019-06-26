import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';
//import LaunchScreen from '../Containers/LaunchScreen'
import HomeScreen from '../Containers/Home/HomeScreen';
import DetailsScreen from '../Containers/Home/DetailsScreen';
import SettingsScreen from '../Containers/Home/SettingsScreen';

//import ExampleRowScreen from '../../ignite/Examples/Containers/ignite-andross/RowExample'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

// const PrimaryNav = createStackNavigator({
//   LaunchScreen: { screen: LaunchScreen },
//   HomeScreen: {screen: HomeScreen}//,
//   //ExampleRowScreen: {screen: ExampleRowScreen}
// }
// , {
//   // Default config for all screens
//   headerMode: 'none',
//   initialRouteName: 'HomeScreen',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
// })

//export default createAppContainer(PrimaryNav)

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    // defaultNavigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     // let iconName;
    //     // if (routeName === 'Home') {
    //     //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //     // } else if (routeName === 'Settings') {
    //     //   iconName = `ios-options${focused ? '' : '-outline'}`;
    //     // }

    //     // // You can return any component that you like here! We usually use an
    //     // // icon component from react-native-vector-icons
    //     // return <Ionicons name={iconName} size={25} color={tintColor} />;
    //   },
    // }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
))

