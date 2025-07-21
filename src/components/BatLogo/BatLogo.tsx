import React from 'react';
import { Image, Text, View } from 'react-native';
import batLogo from '../../../assets/batman-logo.png'

import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>

      <Image
        source={batLogo}
        style={{
          resizeMode: 'contain',
          height: 180
        }}
      />
    </View>
  );
}
