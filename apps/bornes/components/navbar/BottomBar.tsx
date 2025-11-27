import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function BottomBar() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textContent}>Annuler</Text>
      </View>
      <View>
        <Text style={styles.textCart}>Voir le panier</Text>
        <Text style={styles.textContent}>3 Articles</Text>
      </View>
      <View>
        <Text style={styles.buttonBuy}>Aucun produit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingHorizontal: 32,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  textCart: {
    fontSize: 24,
  },
  textContent: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonBuy: {
    fontSize: 32,
    backgroundColor: '#38ce1e',
    borderRadius: 100,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
});
