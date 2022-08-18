import { createDrawerNavigator } from "@react-navigation/drawer"
import { Home } from "../screens/Home"

export function Drawer() {
  const { Navigator, Screen } = createDrawerNavigator()

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}