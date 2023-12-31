import { useState, useEffect } from "react"
import { quizStyles as styles } from "./QuizStyles"
import { StatusBar } from "expo-status-bar"
import { Text, ScrollView, Button } from "react-native"
import { Image } from "expo-image"
import { useAssets } from "expo-asset"
import data from "../../questions.json"
import { blurhash, quizImages } from "../../helpers/quizImages"
import { getPoints, incrementPoints } from "../../helpers/quizPoints"

const defaultButtonColors = ["dodgerblue", "dodgerblue", "dodgerblue"]

export default function Quiz() {
  const [randomIndex, setRandomIndex] = useState<number>(getRandomIndex())
  const [points, setPoints] = useState<number>(0)
  const [statusText, setStatusText] = useState<string>("")
  const [assets] = useAssets(quizImages)
  const [buttonColors, setButtonColors] =
    useState<string[]>(defaultButtonColors)
  const [answerSelected, setAnswerSelected] = useState<boolean>(false)

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

  function onAnswerSelected(value: string) {
    if (answerSelected) return
    console.log("Answer selected: " + value)
    setAnswerSelected(true)

    if (data[randomIndex].correct == value) {
      setStatusText("Správně!")
      setButtonColors((prev) => {
        const newColors = [...prev]
        newColors[optionsArray.findIndex((item) => item[0] == value)] = "green"
        return newColors
      })
      incrementPoints(1)
    } else {
      setStatusText(questionData.incorrectStatus)
      setButtonColors((prev) => {
        const newColors = [...prev]
        newColors[optionsArray.findIndex((item) => item[0] == value)] = "red"
        return newColors
      })
    }
  }

  function getNewQuestion() {
    setAnswerSelected(false)
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        rowGap: 12,
      }}
    >
      <Text style={styles.pointsTextWrapper}>
        <Text>Body: </Text>
        <Text style={styles.pointsTextBold}>{points}</Text>
      </Text>
      <Text>{questionData.name}</Text>

      {randomImage ? (
        <Image
          style={[
            styles.image,
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
      ) : (
        <Text>Error while trying to load an image.</Text>
      )}

      {optionsArray.map(([key, value], index) => (
        <Button
          key={index}
          title={`${key}) ${value}`}
          onPress={() => onAnswerSelected(key)}
          color={buttonColors[index]}
        />
      ))}

      <Text style={styles.statusText}>{statusText}</Text>

      {answerSelected && (
        <Button title="Další otázka" onPress={getNewQuestion} />
      )}

      <Text style={styles.bottomSpacer} />

      <StatusBar style="auto" />
    </ScrollView>
  )
}
