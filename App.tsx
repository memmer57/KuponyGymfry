import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import Ionicons from "@expo/vector-icons/Ionicons"
import HomePage from "./app/Home"
import QuizPage from "./app/Quiz"
import MapPage from "./app/Map"
import CitationsPage from "./app/Citations"
import CouponsPage from "./app/Coupons"
import QRReaderPage from "./app/QRReader"

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "green",
          },
          drawerActiveTintColor: "green",
        }}
      >
        <Drawer.Screen
          name="Přehled"
          component={HomePage}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? "green" : "#aaa"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Hádanka"
          component={QuizPage}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="barbell"
                size={size}
                color={focused ? "green" : "#aaa"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Kupóny"
          component={CouponsPage}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-barcode-outline"
                size={size}
                color={focused ? "green" : "#aaa"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="QR čtečka"
          component={QRReaderPage}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-qr-code"
                size={size}
                color={focused ? "green" : "#aaa"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Mapa"
          component={MapPage}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-map"
                size={size}
                color={focused ? "green" : "#aaa"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Citace"
          component={CitationsPage}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-newspaper-outline"
                size={size}
                color={focused ? "green" : "#aaa"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
