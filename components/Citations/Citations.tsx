import React from "react"
import { ScrollView, Text, View } from "react-native"
import { citationStyles as styles } from "./CitationStyles"
import { blurhash, quizImages } from "../../helpers/quizImages"
import { Image } from "expo-image"
import { useAssets } from "expo-asset"
import data from "../../citations.json"

export default function Citations() {
  const [assets] = useAssets(quizImages)

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      {assets
        ? assets.map((asset, index) => (
            <View style={styles.citationContainer} key={index}>
              <Image
                style={[
                  styles.image,
                  {
                    aspectRatio:
                      asset.width && asset.height
                        ? asset.width / asset.height
                        : 1,
                  },
                ]}
                source={{ uri: asset.uri }}
                placeholder={blurhash}
                transition={500}
                focusable={true}
              />
              {data[index].map((text, i) => (
                <Text key={i} style={styles.text}>
                  {text}
                </Text>
              ))}
            </View>
          ))
        : null}

      <Text style={styles.authorText}>Made with ❤️ by Matěj Emmer</Text>
    </ScrollView>
  )
}
