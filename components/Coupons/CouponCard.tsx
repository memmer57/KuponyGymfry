import React, { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { couponCardStyles } from "./CouponCardStyles"
import Ionicons from "@expo/vector-icons/Ionicons"

interface IProps {
  title: string
  description: string
  points: number
  code: string
}

export default function CouponCard(props: IProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleCardClick = () => {
    setIsPopupOpen(true)
  }

  return (
    <View style={couponCardStyles.couponCard}>
      <Text style={couponCardStyles.couponTitle}>{props.title}</Text>
      <Text style={couponCardStyles.couponDescription}>
        {props.description}
      </Text>
      <View style={couponCardStyles.icon}>
        <Ionicons name="md-barcode-outline" size={70} color="black" />
      </View>
      <Text style={couponCardStyles.couponPoints}>
        Potřebné body: <Text style={couponCardStyles.bold}>{props.points}</Text>
      </Text>
      <Text style={couponCardStyles.couponCode}>
        Kód: <Text style={couponCardStyles.bold}>{props.code}</Text>
      </Text>
    </View>
  )
}
