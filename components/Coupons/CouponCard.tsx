import { View, Text } from "react-native"
import { couponCardStyles as styles } from "./CouponCardStyles"
import Ionicons from "@expo/vector-icons/Ionicons"

interface IProps {
  title: string
  description: string
  points: number
  code: string
}

export default function CouponCard(props: IProps) {
  return (
    <View style={styles.couponCard}>
      <Text style={styles.couponTitle}>{props.title}</Text>
      <Text style={styles.couponDescription}>{props.description}</Text>
      <View style={styles.icon}>
        <Ionicons name="md-barcode-outline" size={70} color="black" />
      </View>
      <Text style={styles.couponPoints}>
        Potřebné body: <Text style={styles.bold}>{props.points}</Text>
      </Text>
      <Text style={styles.couponCode}>
        Kód: <Text style={styles.bold}>{props.code}</Text>
      </Text>
    </View>
  )
}
