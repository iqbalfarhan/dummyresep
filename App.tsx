import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/Screens/HomeScreen';
import DetailScreen from './src/Screens/DetailScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

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

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
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
        style={'dark'}
        backgroundColor={DefaultTheme.colors.background}
        translucent={false}
      />
    </NavigationContainer>
  );
}
