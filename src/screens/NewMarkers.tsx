import { useState } from 'react';
import { Alert, Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker, LatLng } from 'react-native-maps';

export function NewMarkers() {
  const { width, height } = Dimensions.get('window')
  const [markers, setMarkers] = useState<Array<LatLng>>([])
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
        onPress={(e) => setMarkers([...markers, e.nativeEvent.coordinate])}
      >
        {markers.length > 0 && markers.map((coordinate, index) => (
          <Marker
            draggable
            key={index}
            coordinate={coordinate}
            onDragEnd={(e) => Alert.alert('New Position', `Lat: ${e.nativeEvent.coordinate.latitude} & Lng${e.nativeEvent.coordinate.longitude}`)}
          />
        ))}
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
