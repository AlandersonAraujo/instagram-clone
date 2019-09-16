import React from 'react';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import logo from './assets/instagram.png';
import Feed from './pages/Feed';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
    },
    {
      defaultNavigationOptions: {
        headerLeftContainerStyle: {marginLeft: 10},
        headerLeft: <Image source={logo} />,
        headerRightContainerStyle: {marginRight: 10},
        headerRight: (
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Icon name="tv" size={20} color="#121212" />
            <Icon
              name="send-o"
              size={20}
              color="#121212"
              style={{paddingLeft: 20}}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  ),
);

export default Routes;
