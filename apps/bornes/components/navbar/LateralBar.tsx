import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import type { TabRoute } from '@/types/routes';
import { useRouter, useSegments } from 'expo-router';

export default function LateralBar() {
  const router = useRouter();
  const segments = useSegments();

  const isActive = (name: TabRoute) => {
    const last = segments[segments.length - 1];
    return last === name;
  };

  const goTo = (name: TabRoute) => {
    router.push(name === 'index' ? './' : `./${name}`);
  };

  return (
    <View style={styles.sidebar}>
      <Pressable
        style={[styles.navItem, isActive('index') && styles.navItemActive]}
        onPress={() => goTo('index')}
      >
        <Text style={styles.navText}>Accueil</Text>
      </Pressable>

      <Pressable
        style={[styles.navItem, isActive('menus') && styles.navItemActive]}
        onPress={() => goTo('menus')}
      >
        <Text style={styles.navText}>Menus</Text>
      </Pressable>

      <Pressable
        style={[styles.navItem, isActive('burgers') && styles.navItemActive]}
        onPress={() => goTo('burgers')}
      >
        <Text style={styles.navText}>Burgers</Text>
      </Pressable>

      <Pressable
        style={[styles.navItem, isActive('tacos') && styles.navItemActive]}
        onPress={() => goTo('tacos')}
      >
        <Text style={styles.navText}>Tacos</Text>
      </Pressable>

      <Pressable
        style={[styles.navItem, isActive('poke') && styles.navItemActive]}
        onPress={() => goTo('poke')}
      >
        <Text style={styles.navText}>Poké</Text>
      </Pressable>

      <Pressable
        style={[styles.navItem, isActive('bowl') && styles.navItemActive]}
        onPress={() => goTo('bowl')}
      >
        <Text style={styles.navText}>Bowl</Text>
      </Pressable>

      <Pressable
        style={[styles.navItem, isActive('naan') && styles.navItemActive]}
        onPress={() => goTo('naan')}
      >
        <Text style={styles.navText}>Naan</Text>
      </Pressable>

      <Pressable
        style={[styles.navItem, isActive('ptites-faim') && styles.navItemActive]}
        onPress={() => goTo('ptites-faim')}
      >
        <Text style={styles.navText}>P'tites faim</Text>
      </Pressable>

      <Pressable
        style={[styles.navItem, isActive('boissons') && styles.navItemActive]}
        onPress={() => goTo('boissons')}
      >
        <Text style={styles.navText}>Boissons</Text>
      </Pressable>

      <Pressable
        style={[styles.navItem, isActive('desserts') && styles.navItemActive]}
        onPress={() => goTo('desserts')}
      >
        <Text style={styles.navText}>Desserts</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 250,
    backgroundColor: '#fff',
    paddingVertical: 48,
    paddingHorizontal: 12,
  },
  navItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  navItemActive: {
    backgroundColor: '#ddd',
  },
  navText: {
    fontSize: 16,
  },
});
