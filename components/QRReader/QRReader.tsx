import { View, Text, Button, StyleSheet } from "react-native"
import { QRReaderStyles as styles } from "./QRReaderStyles"
import { useState, useEffect } from "react"
import { BarCodeScanner } from "expo-barcode-scanner"

export default function QRReader() {
  const [hasPermission, setHasPermission] = useState<boolean>()
  const [scanned, setScanned] = useState(false)
  const [scanResult, setScanResult] = useState("")

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === "granted")
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true)
    setScanResult("Výsledek: " + data)
  }

  const handleNewScan = () => {
    setScanned(false)
    setScanResult("")
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      {scanResult !== "" && <Text style={styles.resultText}>{scanResult}</Text>}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.newScanButton}>
          <Button title={"Skenovat znovu"} onPress={() => handleNewScan()} />
        </View>
      )}
    </View>
  )
}
