import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screen/SearchScreen';
import ResultsShowScreen from './src/screen/ResultsShowScreen';

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        ResultsShow: ResultsShowScreen
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search'
        }
    });

export default createAppContainer(navigator);