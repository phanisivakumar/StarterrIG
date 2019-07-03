import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import { Ionicons } from "react-native-vector-icons";
import LaunchScreen from "../Containers/LaunchScreen";
import HomeScreen from "../Containers/Home/HomeScreen";
import DetailsScreen from "../Containers/Home/DetailsScreen";
import ManageScreen from "../Containers/Manage/ManageScreen";
import SignInScreen from "../Containers/Auth/SignInScreen";
import CreateAccountScreen from "../Containers/Auth/CreateAccountScreen";
import ResetPasswordScreen from "../Containers/Auth/ResetPasswordScreen";
//import ExampleRowScreen from "../../ignite/Examples/Containers/ignite-andross/RowExample";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

const ManageStack = createStackNavigator({
  Manage: { screen: ManageScreen },
  Details: { screen: DetailsScreen }
});

const BottomStack = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Manage: { screen: ManageStack }
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
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const AuthStack = createStackNavigator({
  SignIn: { screen: SignInScreen },
  ResetPassword: { screen: ResetPasswordScreen }
});

const CreateAccountStack = createStackNavigator({
  CreateAccount: { screen: CreateAccountScreen }
});

const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    AuthStack: { screen: AuthStack },
    CreateAccountStack: { screen: CreateAccountStack },
    BottomStack: { screen: BottomStack }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LaunchScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);
