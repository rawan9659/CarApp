import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import ReviewDetails from '../screens/reviewDetails';
import Home from '../screens/home';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Data: {
    screen: ReviewDetails,
  },
});

export default createAppContainer(RootDrawerNavigator);