import { useState, useEffect } from "react"
import { quizStyles } from "./QuizStyles"
import { StatusBar } from "expo-status-bar"
import { Text, View, Button } from "react-native"
import { Image } from "expo-image"
import { useAssets } from "expo-asset"
import data from "../../questions.json"
import { quizImages } from "../../helpers/quizImages"
import { getPoints, incrementPoints } from "../../helpers/quizPoints"

const defaultButtonColors = ["dodgerblue", "dodgerblue", "dodgerblue"]

export default function Quiz() {
  const [randomIndex, setRandomIndex] = useState<number>(getRandomIndex())
  const [points, setPoints] = useState<number>(0)
  const [statusText, setStatusText] = useState<string>("")
  const [assets] = useAssets(quizImages)
  const [buttonColors, setButtonColors] =
    useState<string[]>(defaultButtonColors)

  const clearButtonColors = () => {
    setButtonColors(defaultButtonColors)
  }

  const fetchPoints = async () => {
    const pointsValue = await getPoints()
    setPoints(pointsValue)
  }

  useEffect(() => {
    fetchPoints()
    clearButtonColors()
  }, [randomIndex])

  if (!assets) {
    return <Text>Loading...</Text>
  }

  const questionData = data[randomIndex]

  let randomImage
  if (assets) {
    randomImage = assets[randomIndex]
  }

  const optionsArray = Object.entries(questionData.options)

  function answerSelected(value: string) {
    console.log("Answer selected: " + value)

    if (data[randomIndex].correct == value) {
      setStatusText("Správně!")
      setButtonColors((prev) => {
        const newColors = [...prev]
        newColors[optionsArray.findIndex((item) => item[0] == value)] = "green"
        return newColors
      })
      incrementPoints(1)
    } else {
      setStatusText("Špatně!")
      setButtonColors((prev) => {
        const newColors = [...prev]
        newColors[optionsArray.findIndex((item) => item[0] == value)] = "red"
        return newColors
      })
    }

    setTimeout(getNewQuestion, 1000)
  }

  function getNewQuestion() {
    setStatusText("")
    setRandomIndex(getRandomIndex())
  }

  function getRandomIndex(): number {
    let newIndex

    do {
      newIndex = Math.floor(Math.random() * data.length)
    } while (newIndex == randomIndex)

    return newIndex
  }

  return (
    <View style={quizStyles.container}>
      <Text style={quizStyles.pointsTextWrapper}>
        <Text>Body: </Text>
        <Text style={quizStyles.pointsTextBold}>{points}</Text>
      </Text>
      <Text>{questionData.name}</Text>

      {randomImage ? (
        <Image
          style={quizStyles.image}
          source={{ uri: randomImage.uri }}
          contentFit="cover"
          transition={1000}
        />
      ) : (
        <Text>Error while trying to load an image.</Text>
      )}

      {optionsArray.map(([key, value], index) => (
        <Button
          key={index}
          title={`${key}) ${value}`}
          onPress={() => answerSelected(key)}
          color={buttonColors[index]}
        />
      ))}

      <Text style={quizStyles.statusText}>{statusText}</Text>

      <StatusBar style="auto" />
    </View>
  )
}
