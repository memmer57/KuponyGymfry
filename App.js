import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { Image } from "expo-image";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const random = Math.floor(Math.random() * 10) + 1;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.pointsTextWrapper}>
        <Text style={styles.pointsText}>Body: </Text>
        <Text style={styles.pointsTextBold}>{69}</Text>
      </Text>
      <Text>Poznej místo na obrázku:</Text>
      <Image
        style={styles.image}
        source={require("./assets/BucinySamples/1.jpg")}
        contentFit="cover"
        transition={1000}
      />

      <Button title="a) Sněžka pod Ještědem" style={styles.answerButton} />
      <Button title="b) Brněnský orloj" style={styles.answerButton} />
      <Button
        title="c) Žižkovský bary (čokobamba)"
        style={styles.answerButton}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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

  answerButton: {
    justifyContent: "flex-end",
  },

  pointsTextWrapper: {
    textAlign: "right",
    marginBottom: 24,
    fontSize: 16,
  },

  pointsTextBold: {
    fontWeight: "bold",
  },
});
