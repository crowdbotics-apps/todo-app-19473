import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView5089428Navigator from '../features/CalendarView5089428/navigator';
import Maps89410Navigator from '../features/Maps89410/navigator';
import Add-Item89409Navigator from '../features/Add-Item89409/navigator';
import Maps89405Navigator from '../features/Maps89405/navigator';
import UserProfile89401Navigator from '../features/UserProfile89401/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView5089428: { screen: CalendarView5089428Navigator },
Maps89410: { screen: Maps89410Navigator },
Add-Item89409: { screen: Add-Item89409Navigator },
Maps89405: { screen: Maps89405Navigator },
UserProfile89401: { screen: UserProfile89401Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
