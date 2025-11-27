import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import Burger from '@/assets/food/burger.png';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.pages} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Pressable style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={Burger} style={{ width: 150, height: 150 }} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>La Base (M)</Text>
            <Text style={styles.cardText}>15,95€</Text>
          </View>
        </Pressable>
        <Pressable style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={Burger} style={{ width: 150, height: 150 }} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Le Banquet (L)</Text>
            <Text style={styles.cardText}>17,95€</Text>
          </View>
        </Pressable>
        <Pressable style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={Burger} style={{ width: 150, height: 150 }} />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>La Festin (XL)</Text>
            <Text style={styles.cardText}>18,95€</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'rgb(255,237,205)',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    width: '47%',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DD8956',
    width: '100%',
    paddingVertical: 32,
    borderRadius: 12,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 12,
  },
});
