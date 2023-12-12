import React from "react"
import { ScrollView, Text, View } from "react-native"
import { citationStyles } from "./CitationStyles"
import { blurhash, quizImages } from "../../helpers/quizImages"
import { Image } from "expo-image"
import { useAssets } from "expo-asset"
import data from "../../citations.json"

export default function Citations() {
  const [assets] = useAssets(quizImages)

  return (
    <ScrollView
      style={citationStyles.container}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      {assets
        ? assets.map((asset, index) => (
            <View style={citationStyles.citationContainer} key={index}>
              <Image
                style={[
                  citationStyles.image,
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
                <Text key={i} style={citationStyles.text}>
                  {text}
                </Text>
              ))}
            </View>
          ))
        : null}
    </ScrollView>
  )
}
