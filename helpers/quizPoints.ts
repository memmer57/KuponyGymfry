import * as SecureStore from "expo-secure-store"

const pointsKey = "points"

export async function incrementPoints(value: number) {
  const oldValue = getPoints()
  const newValue = (await oldValue) + value
  SecureStore.setItemAsync(pointsKey, newValue.toString())
}

export async function getPoints() {
  let result = await SecureStore.getItemAsync(pointsKey)
  if (result !== null) {
    return parseInt(result)
  } else {
    return 0
  }
}
