import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './ButtonElementStyles';

export function ButtonElement() {
  return (
    <View>
      <Pressable onPress={() => alert('Só alegria!')} style={styles.button}>
        <Text style={styles.text}>💾 GERAR SENHA</Text>
      </Pressable>

      <Pressable onPress={() => alert('Só alegria!')} style={styles.button}>
        <Text style={styles.text}>💾 COPY</Text>
      </Pressable>
    </View>
  );
}
