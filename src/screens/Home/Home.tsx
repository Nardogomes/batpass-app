import React from "react"
import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { styles } from "./Style"
import { BatLogo } from "../../components/BatLogo/BatLogo"

export function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}
