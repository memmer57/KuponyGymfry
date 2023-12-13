import { View } from "react-native"
import CouponCard from "./CouponCard"
import { couponsStyles as styles } from "./CouponsStyles"
import { ScrollView } from "react-native-gesture-handler"
import data from "../../coupons.json"

export default function Coupons() {
  return (
    <ScrollView style={styles.container}>
      {data.map(
        (coupon, index) =>
          index % 2 === 0 && (
            <View key={index} style={styles.row}>
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
