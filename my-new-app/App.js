import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from './screens/GetStarted';
import Login from './screens/Login';
import Home from './screens/Home';
import Symptoms from './screens/Symptoms';

import { Pacifico_400Regular, useFonts } from '@expo-google-fonts/pacifico';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Information from './screens/Information';
import Menstrual from './screens/Menstrual';
import Follicular from './screens/Follicular';
import Ovulation from './screens/Ovulation';
import Luteal from './screens/Luteal';
import Medication from './screens/Medication';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    Pacifico_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={GetStarted} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/> 
        <Stack.Screen name='Main' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Symptoms' component={Symptoms} options={{headerShown: false}}/>
        <Stack.Screen name='Information' component={Information} options={{headerShown: false}}/>
        <Stack.Screen name='Menstrual' component={Menstrual} options={{headerShown: false}}/>
        <Stack.Screen name='Follicular' component={Follicular} options={{headerShown: false}}/>
        <Stack.Screen name='Ovulation' component={Ovulation} options={{headerShown: false}}/>
        <Stack.Screen name='Luteal' component={Luteal} options={{headerShown: false}}/>
        <Stack.Screen name='Medication' component={Medication} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
