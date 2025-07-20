import React from "react"
import { Text, View } from "react-native"
import { styles } from "./Style"
import { Menu } from "../../components/Menu/Menu"

export function Home() {
  return (
    <View style={styles.container}>
      <Menu />
    </View>
  )
}
