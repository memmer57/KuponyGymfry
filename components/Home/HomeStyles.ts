import { StyleSheet } from "react-native"

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  image: {
    width: "100%",
    height: undefined,
    marginBottom: 16,
  },
  greeting: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 32,
  },
  stats: {
    fontSize: 20,
    textAlign: "left",
    marginBottom: 10,
    fontWeight: "bold",
  },
  points: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 10,
  },
  coupons: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 32,
  },
  bold: {
    fontWeight: "bold",
  },
})
