import React from "react"
import { View, Text } from "react-native"
import { styles } from "./Style"
import { BatLogo } from "../../components/BatLogo/BatLogo"

export function Home() {
  return (
    <View style={styles.container}>
      <View>
        <BatLogo />
      </View>
    </View>
  )
}
