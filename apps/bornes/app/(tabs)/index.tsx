import { ScrollView, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import Burger from '@/assets/food/burger.png';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.pages} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={Burger} style={{ width: 100, height: 100 }} />
        </View>
        <View style={styles.card}>
          <Image source={Burger} style={{ width: 100, height: 100 }} />
        </View>
        <View style={styles.card}>
          <Image source={Burger} style={{ width: 100, height: 100 }} />
        </View>
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
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 12,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
});
