import React from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './homeScreen';
import youtubeTela from './youtubeTela';
import VimeoTela from './VimeoTela';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'YouTube') {
            iconName = focused ? 'youtube' : 'youtube';
            return <FontAwesome name={iconName} size={size} color={color} />;
          } else if (route.name === 'Vimeo') {
            iconName = focused ? 'vimeo' : 'vimeo';
            return <FontAwesome name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
      <Tab.Screen name="YouTube" component={youtubeTela} options={{ title: 'YouTube' }} />
      <Tab.Screen name="Vimeo" component={VimeoTela} options={{ title: 'Vimeo' }} />
    </Tab.Navigator>
  );
}