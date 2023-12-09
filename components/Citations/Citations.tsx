import React from "react"
import { ScrollView, Text, View } from "react-native"
import { citationStyles } from "./CitationStyles"
import { blurhash, quizImages } from "../../helpers/quizImages"
import { Image } from "expo-image"
import { useAssets } from "expo-asset"
import { Dimensions } from "react-native"

export default function Citations() {
  const [assets] = useAssets(quizImages)

  const screenWidth = Dimensions.get("window").width

  return (
    <ScrollView
      style={citationStyles.container}
      contentContainerStyle={{ justifyContent: "center" }}
    >
      {assets
        ? assets.map((asset, index) => (
            <Image
              key={index}
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
          ))
        : null}
    </ScrollView>
  )
}
