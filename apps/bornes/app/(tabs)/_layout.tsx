import React from 'react';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { StyleSheet, View } from 'react-native';
import { Tabs } from 'expo-router';
import LateralBar from '@/components/navbar/LateralBar';
import BottomBar from '@/components/navbar/BottomBar';

export default function TabsLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <View style={styles.root}>
        <LateralBar />

        <View style={styles.content}>
          <Tabs
            screenOptions={{
              headerShown: false,
              headerTitleAlign: 'left',
              headerTintColor: Colors[colorScheme ?? 'light'].tint,
              tabBarStyle: { display: 'none' },
            }}
          >
            <Tabs.Screen name="index" options={{ title: 'Accueil' }} />
            <Tabs.Screen name="menus" options={{ title: 'Menus' }} />
            <Tabs.Screen name="burgers" options={{ title: 'Burgers' }} />
            <Tabs.Screen name="tacos" options={{ title: 'Tacos' }} />
            <Tabs.Screen name="poke" options={{ title: 'Poké' }} />
            <Tabs.Screen name="bowl" options={{ title: 'Bowl' }} />
            <Tabs.Screen name="naan" options={{ title: 'Naan' }} />
            <Tabs.Screen name="ptites-faim" options={{ title: "P'tites faim" }} />
            <Tabs.Screen name="boissons" options={{ title: 'Boissons' }} />
            <Tabs.Screen name="desserts" options={{ title: 'Desserts' }} />
          </Tabs>
        </View>
      </View>

      <BottomBar />
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
});
