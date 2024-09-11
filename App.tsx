import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/Screens/HomeScreen';
import DetailScreen from './src/Screens/DetailScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded] = useFonts({
    'Geologica-Black': require('./assets/fonts/Geologica-Black.ttf'),
    'Geologica-Bold': require('./assets/fonts/Geologica-Bold.ttf'),
    'Geologica-SemiBold': require('./assets/fonts/Geologica-SemiBold.ttf'),
    'Geologica-Medium': require('./assets/fonts/Geologica-Medium.ttf'),
  });

  const [theme] = useState('dark');

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer
      theme={
        theme === 'dark'
          ? {
              dark: true,
              colors: {
                primary: '#ff865b',
                background: '#131c23',
                card: '#0e171e',
                text: '#9fb9d0',
                border: '#0a131a',
                notification: '#ffbbbe',
              },
            }
          : {
              dark: false,
              colors: {
                primary: '#ffd900',
                background: '#ffffff',
                card: '#e8e8e8',
                text: '#161616',
                border: '#d1d1d1',
                notification: '#ff5860',
              },
            }
      }
    >
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: { fontFamily: 'Geologica-SemiBold' },
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          options={{ title: 'Detail resep' }}
        />
      </Stack.Navigator>
      <StatusBar
        style={theme === 'dark' ? 'light' : 'dark'}
        backgroundColor={'#131c23'}
        translucent={false}
      />
    </NavigationContainer>
  );
}
