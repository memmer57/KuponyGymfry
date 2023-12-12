import React from "react"
import { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { homeStyles } from "./HomeStyles"
import { blurhash, quizImages } from "../../helpers/quizImages"
import { Image } from "expo-image"
import { useAssets } from "expo-asset"
import { getPoints } from "../../helpers/quizPoints"
import { pointsForCoupon } from "../../helpers/constants"

export default function Home() {
  const [assets] = useAssets(quizImages)
  const [points, setPoints] = useState<number>(0)
  const [couponsAvailable, setCouponsAvailable] = useState<number>(0)

  const fetchPoints = async () => {
    const pointsValue = await getPoints()
    setPoints(pointsValue)
    setCouponsAvailable(Math.floor(pointsValue / pointsForCoupon))
  }

  useEffect(() => {
    fetchPoints()

    const interval = setInterval(() => {
      fetchPoints()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  let randomImage
  if (assets) {
    randomImage = assets[Math.floor(Math.random() * assets.length)]
  }

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.greeting}>
        Vítejte v Jizerskohorských bučinách!
      </Text>
      <Text style={homeStyles.stats}>Vaše statistiky:</Text>
      <Text style={homeStyles.points}>
        Počet bodů: <Text style={homeStyles.bold}>{points}</Text>
      </Text>
      <Text style={homeStyles.coupons}>
        Počet dostupných kupónů:{" "}
        <Text style={homeStyles.bold}>{couponsAvailable}</Text>
      </Text>
      {randomImage ? (
        <View>
          <Text>I takto vypadají Jizerskohorské bučiny: </Text>
          <Image
            style={[
              homeStyles.image,
              {
                aspectRatio:
                  randomImage.width && randomImage.height
                    ? randomImage.width / randomImage.height
                    : 1,
              },
            ]}
            source={{ uri: randomImage.uri }}
            contentFit="contain"
            placeholder={blurhash}
            transition={500}
            focusable={true}
          />
        </View>
      ) : null}
    </View>
  )
}
