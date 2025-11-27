import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { useDb } from '@/hooks/use-db';

export default function HomeScreen() {
  const items = useDb();

  return (
    <ScrollView style={styles.pages} contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        {items.map(item => (
          <Pressable style={styles.card} key={item.id}>
            <View style={styles.imageContainer}>
              <Image source={item.img} style={{ width: 150, height: 150 }} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>{item.name}</Text>
              <Text style={styles.cardText}>{item.price}</Text>
            </View>
          </Pressable>
        ))}
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
