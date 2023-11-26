import { StyleSheet } from "react-native"

export const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 64,
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },

  image: {
    backgroundColor: "#fff",
    marginBottom: 16,
    height: 220,
  },

  pointsTextWrapper: {
    textAlign: "right",
    marginBottom: 24,
    fontSize: 16,
  },

  pointsTextBold: {
    fontWeight: "bold",
  },

  statusText: {
    textAlign: "left",
    marginBottom: "auto",
    fontWeight: "bold",
    fontSize: 16,
  },
})
