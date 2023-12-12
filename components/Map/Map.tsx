import { showLocation } from "react-native-map-link"

export default function Map() {
  showLocation({
    latitude: 50.8548089,
    longitude: -15.1680944,
    title: "Jizerské Bučiny", // optional
    alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
    appsWhiteList: ["google-maps"],
    naverCallerName: "com.memmer.KuponyGymfry", // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
    // appTitles: { 'google-maps': 'My custom Google Maps title' }, // optionally you can override default app titles
    // app: 'uber',  // optionally specify specific app to use
    directionsMode: "walk", // optional, accepted values are 'car', 'walk', 'public-transport' or 'bike'
  })
  return null
}
