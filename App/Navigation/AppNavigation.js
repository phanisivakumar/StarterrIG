import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
// import styles from "./Styles/NavigationStyles";
import LaunchScreen from "../Containers/LaunchScreen";
import HomeScreen from "../Containers/Home/HomeScreen";
import DetailsScreen from "../Containers/Home/DetailsScreen";
import ManageScreen from "../Containers/Manage/ManageScreen";
import SignInScreen from "../Containers/Auth/SignInScreen";
import ResetPasswordScreen from "../Containers/Auth/ResetPasswordScreen";
import PasscodeScreen from "../Containers/Auth/PasscodeScreen";
//import PasscodeConfirmScreen from "../Containers/Auth/PasscodeConfirmScreen";
import CustomDrawerComponent from "../Components/CustomDrawer";
import PhoneSignupScreen from "../Containers/CreateAccount/PhoneSignupScreen";
import EmailSignupScreen from "../Containers/CreateAccount/EmailSignupScreen";
import WhoAreYouScreen from "../Containers/CreateAccount/WhoAreYouScreen";
import OTPScreen from "../Containers/CreateAccount/OTPScreen";
import ProfileScreen from "../Containers/Profile/ProfileScreen";
import PrivacyPolicyScreen from "../Containers/Policy/PrivacyPolicyScreen";
import TermsConditionsScreen from "../Containers/Policy/TermsConditionsScreen";
import HelpScreen from "../Containers/Policy/HelpScreen";
import PlanScreen from "../Containers/Policy/PlanScreen";
import DisplayPicture from "../Components/DisplayPicture";
import MenuButton from "../Components/MenuButton";
import HomeButton from "../Components/HomeButton";
import CloseWindowButton from "../Components/CloseWindowButton";
import colors from "../Themes/Colors";

// Manifest of possible screens
const HomeStack = createStackNavigator(
  {
    Posters: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Posters",
        headerLeft: <MenuButton navigationProps={navigation} />,
        headerRight: <DisplayPicture navigationProps={navigation} />
      })
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

const ManageStack = createStackNavigator(
  {
    Manage: {
      screen: ManageScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Manage",
        headerLeft: <MenuButton navigationProps={navigation} />,
        headerRight: <DisplayPicture navigationProps={navigation} />
      })
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

const ProfileStack = createStackNavigator(
  {
    Manage: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Profile",
        headerLeft: <MenuButton navigationProps={navigation} />,
        headerRight: <HomeButton navigationProps={navigation} />
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

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

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        title: "Welcome back!"
      }
    },
    ResetPassword: {
      screen: ResetPasswordScreen,
      navigationOptions: {
        title: "Reset Password"
      }
    },
    OTPScreen: {
      screen: OTPScreen,
      navigationOptions: {
        title: "One Time Password"
      }
    }
    // EmailSignup: {
    //   screen: EmailSignupScreen,
    //   navigationOptions: {
    //     title: "Create Account"
    //   }
    // },
    // Passcode: {
    //   screen: PasscodeScreen,
    //   navigationOptions: {
    //     title: "Set Passcode"
    //   }
    // },
    // PhoneSignup: {
    //   screen: PhoneSignupScreen,
    //   navigationOptions: {
    //     title: "Verify Phone Number"
    //   }
    // }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

// const PasscodeStack = createStackNavigator(
//   {
//     Passcode: {
//       screen: PasscodeScreen,
//       navigationOptions: {
//         title: "Set Passcode"
//       }
//     },
//     PasscodeConfirm: {
//       screen: PasscodeConfirmScreen,
//       navigationOptions: {
//         title: "Confirm Passcode"
//       }
//     }
//   },
//   {
//     defaultNavigationOptions: {
//       headerMode: "none",
//       headerStyle: {
//         backgroundColor: colors.banner
//       },
//       headerTintColor: colors.snow
//     }
//   }
// );

const WhoAreYouStack = createStackNavigator(
  {
    WhoAreYou: {
      screen: WhoAreYouScreen,
      navigationOptions: {
        title: "Who are you?"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

const PlanStack = createStackNavigator(
  {
    TermsConditions: {
      screen: PlanScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Plan",
        headerRight: <CloseWindowButton navigationProps={navigation} />
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

const PrivacyPolicyStack = createStackNavigator(
  {
    PrivacyPolicy: {
      screen: PrivacyPolicyScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Privacy Policy",
        headerRight: <CloseWindowButton navigationProps={navigation} />
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

const TermsConditionsStack = createStackNavigator(
  {
    TermsConditions: {
      screen: TermsConditionsScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Terms & Conditions",
        headerRight: <CloseWindowButton navigationProps={navigation} />
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

const HelpStack = createStackNavigator(
  {
    Help: {
      screen: HelpScreen,
      navigationOptions: ({ navigation }) => ({
        title: "Help",
        headerLeft: <MenuButton navigationProps={navigation} />,
        headerRight: <HomeButton navigationProps={navigation} />
      })
    }
  },
  {
    initialRouteName: "Help",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);
// drawer stack
const DrawerStack = createDrawerNavigator(
  {
    Posters: { screen: BottomStack },
    Profile: { screen: ProfileStack },
    Help: { screen: HelpStack }
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: { activeTintColor: colors.banner }
  }
);

const MainStack = createStackNavigator(
  {
    DrawerStack: {
      screen: DrawerStack
    },
    PlanStack: { screen: PlanStack },
    PrivacyPolicyStack: { screen: PrivacyPolicyStack },
    TermsConditionsStack: { screen: TermsConditionsStack }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const OTPStack = createStackNavigator(
  {
    OTPScreen: {
      screen: OTPScreen,
      navigationOptions: {
        title: "One Time Password"
      }
    }
  },
  {
    initialRouteName: "OTPScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

const PhoneSignUpStack = createStackNavigator(
  {
    Posters: {
      screen: PhoneSignupScreen,
      navigationOptions: {
        title: "Create Account"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

const EmailSignUpStack = createStackNavigator(
  {
    Posters: {
      screen: EmailSignupScreen,
      navigationOptions: {
        title: "Create Account"
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.banner
      },
      headerTintColor: colors.snow
    }
  }
);

const CreateAccountStack = createBottomTabNavigator(
  {
    Email: {
      screen: EmailSignUpStack
    },
    Phone: {
      screen: PhoneSignUpStack
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Email") {
          iconName = "ios-mail";
        } else if (routeName === "Phone") {
          iconName = "ios-call";
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

const PrimaryNav = createSwitchNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    CreateAccountStack: { screen: CreateAccountStack },
    OTPStack: { screen: OTPStack },
    AuthStack: { screen: AuthStack },
    WhoAreYouStack: { screen: WhoAreYouStack },
    MainStack: { screen: MainStack }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "LaunchScreen"
  }
);

export default createAppContainer(PrimaryNav);
