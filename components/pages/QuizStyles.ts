import { StyleSheet } from "react-native"

export const quizStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 64,
    marginHorizontal: 16,
    marginVertical: 16,
    gap: 12,
  },

  image: {
    flex: 1,
    width: "100%",
    maxHeight: 400,
    backgroundColor: "#0553",
    marginBottom: 16,
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
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
})
