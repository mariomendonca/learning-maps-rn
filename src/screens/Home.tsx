import React, { useState } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polygon } from 'react-native-maps';


export function Home() {
  const { width, height } = Dimensions.get('window')
  // -8.0458346,-34.8949036
  const [coords, setCoords] = useState({
    latitude: -8.0458346,
    longitude: -34.8949036,
  })


  return (
    <>
      {console.log(coords)}
      <View style={styles.container}>
        {/* <Text>
          {coords.latitude} - {coords.longitude}
        </Text> */}
        <MapView
          style={{ width, height }}
          initialRegion={{
            latitude: -8.0458346,
            longitude: -34.8949036,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
        // onRegionChange={(region) => console.log(region)}
        >
          <Marker
            draggable
            coordinate={coords}
            onDragEnd={(event) => setCoords(event.nativeEvent.coordinate)}
          />
          <Polygon 
            coordinates={[
              {
                latitude: -8.0458346,
                longitude: -34.8949036,
              },
              {
                latitude: -8.0358346,
                longitude: -34.8849036,
              },
              {
                latitude: -8.0258346,
                longitude: -34.9049036,
              },
              {
                latitude: -8.0258346,
                longitude: -34.9149036,
              },
              {
                latitude: -8.0258346,
                longitude: -34.9249036,
              },
              {
                latitude: -8.0158346,
                longitude: -34.9449036,
              },
            ]}
            tappable
            onPress={() => Alert.alert('tapped')}
            strokeWidth={5}
          />
        </MapView>
      </View>
    </>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
