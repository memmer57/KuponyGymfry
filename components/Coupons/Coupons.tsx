import { View } from "react-native"
import CouponCard from "./CouponCard"
import { couponsStyles } from "./CouponsStyles"
import { ScrollView } from "react-native-gesture-handler"
import data from "../../coupons.json"
import { useState, useEffect } from "react"
import { getPoints } from "../../helpers/quizPoints"
import { pointsForCoupon } from "../../helpers/constants"

export default function Coupons() {
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

  return (
    <ScrollView style={couponsStyles.container}>
      {data.map(
        (coupon, index) =>
          index % 2 === 0 && (
            <View key={index} style={couponsStyles.row}>
              <CouponCard
                title={coupon.title}
                description={coupon.description}
                points={coupon.points}
                code={coupon.code}
              />
              {index + 1 < data.length && (
                <CouponCard
                  title={data[index + 1].title}
                  description={data[index + 1].description}
                  points={data[index + 1].points}
                  code={data[index + 1].code}
                />
              )}
            </View>
          )
      )}
    </ScrollView>
  )
}
