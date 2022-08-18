import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { LatLng, Polygon } from 'react-native-maps';
import { Feather } from '@expo/vector-icons'
import { useState } from 'react';

export function PolygonCreate() {
  const { width, height } = Dimensions.get('window')
  const [polygonCoords, setPolygonCoords] = useState<Array<LatLng>>([])

  return (
    <View style={styles.container}>
      <MapView
        style={{ width, height }}
        initialRegion={{
          latitude: -8.0458346,
          longitude: -34.8949036,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        onPress={(e) => setPolygonCoords([...polygonCoords, e.nativeEvent.coordinate])}
      >
        <Polygon
          coordinates={polygonCoords}
        />
      </MapView>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={() => setPolygonCoords([])}
        >
          <Text style={styles.text}>
            Resetar
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 56,
    width: 150,
    borderRadius: 16,
    position: 'absolute',
    bottom: 60,
    right: 30,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white'
  }
})
