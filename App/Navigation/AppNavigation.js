import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
// import styles from "./Styles/NavigationStyles";
import LaunchScreen from "../Containers/LaunchScreen";
import HomeScreen from "../Containers/Home/HomeScreen";
import DetailsScreen from "../Containers/Home/DetailsScreen";
import ManageScreen from "../Containers/Manage/ManageScreen";
import SignInScreen from "../Containers/Auth/SignInScreen";
import ResetPasswordScreen from "../Containers/Auth/ResetPasswordScreen";
import CustomDrawerComponent from "../Components/CustomDrawer";
import CreateAccountScreen from "../Containers/CreateAccount/CreateAccountScreen";
import OTPScreen from "../Containers/CreateAccount/OTPScreen";
import PrivacyPolicyScreen from "../Containers/Policy/PrivacyPolicyScreen";
import TermsConditionsScreen from "../Containers/Policy/TermsConditionsScreen";
import ProfilePicture from "../Components/ProfilePicture";
import MenuButton from "../Components/MenuButton";
import colors from "../Themes/Colors";

// Manifest of possible screens
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Posters",
      headerLeft: <MenuButton navigationProps={navigation} />,
      headerRight: <ProfilePicture />,
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    })
  },
  Details: { screen: DetailsScreen }
});

const ManageStack = createStackNavigator({
  Manage: {
    screen: ManageScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Manage",
      headerLeft: <MenuButton navigationProps={navigation} />,
      headerRight: <ProfilePicture />,
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    })
  },
  Details: { screen: DetailsScreen }
});

const BottomStack = createBottomTabNavigator(
  {
    Posters: { screen: HomeStack },
    Manage: { screen: ManageStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Posters") {
          iconName = "ios-list";
        } else if (routeName === "Manage") {
          iconName = "ios-checkbox-outline";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={35} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      style: {
        borderTopColor: "transparent"
      },
      activeTintColor: colors.banner,
      inactiveTintColor: colors.steel
    }
  }
);

const AuthStack = createStackNavigator({
  SignIn: { screen: SignInScreen },
  ResetPassword: { screen: ResetPasswordScreen }
});

const CreateAccountStack = createStackNavigator({
  CreateAccount: { screen: CreateAccountScreen },
  OTP: { screen: OTPScreen }
});

const PrivacyPolicyStack = createStackNavigator({
  PrivacyPolicy: {
    screen: PrivacyPolicyScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Privacy Policy",
      headerLeft: <MenuButton navigationProps={navigation} />,
      headerRight: <ProfilePicture />,
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    })
  }
});

const TermsConditionsStack = createStackNavigator({
  TermsConditions: {
    screen: TermsConditionsScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Terms & Conditions",
      headerLeft: <MenuButton navigationProps={navigation} />,
      headerRight: <ProfilePicture />,
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    })
  }
});

// drawer stack
const DrawerStack = createDrawerNavigator(
  {
    Home: { screen: BottomStack },
    "Privacy Policy": { screen: PrivacyPolicyStack },
    "Terms & Conditions": { screen: TermsConditionsStack }
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: { activeTintColor: colors.banner }
  }
);

const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    AuthStack: { screen: AuthStack },
    CreateAccountStack: { screen: CreateAccountStack },
    DrawerStack: { screen: DrawerStack }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LaunchScreen"
  }
);

export default createAppContainer(PrimaryNav);
