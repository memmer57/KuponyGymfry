import { StyleSheet } from "react-native"

export const QRReaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: undefined,
    marginBottom: 16,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  newScanButton: {
    position: "absolute",
    width: "70%",
    top: "50%",
    alignSelf: "center",
  },
})
