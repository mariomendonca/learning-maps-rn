import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';


export function PolygonCreate() {
  const { width, height } = Dimensions.get('window')
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
        onPress={(e) => console.log(e.nativeEvent.coordinate)}
      >

      </MapView>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
