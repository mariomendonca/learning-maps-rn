import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { LocalTile, UrlTile } from 'react-native-maps';
import * as fs from 'expo-file-system'

export function OfflineMap() {
  const { width, height } = Dimensions.get('window')

  const file = `${fs.documentDirectory}src/tiles/{z}/{x}/{y}.png`

  return (
    <View style={styles.container}>
      <MapView
        style={{ width, height }}
        // initialRegion={{
        //   latitude: -8.132393,
        //   longitude: -34.900432,
        //   latitudeDelta: 0,
        //   longitudeDelta: 0,
        // }}
      >
        <LocalTile
          pathTemplate={file}
          tileSize={256}
        />
        {/* <UrlTile urlTemplate={file} /> */}
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
