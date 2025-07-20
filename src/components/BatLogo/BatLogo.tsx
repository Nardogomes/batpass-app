import React from 'react';
import { Image, Text } from 'react-native';
import batLogo from '../../../assets/batman-logo.png'

import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>

      <Image
        source={batLogo}
        style={{
          resizeMode: 'contain',
          height: 180
        }}
      />
    </>
  );
}
