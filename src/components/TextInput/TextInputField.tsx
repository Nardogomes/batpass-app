import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './TextInputFieldStyles';

export function TextInputField() {
  return (
    <TextInput style={styles.container} placeholder='pass' />
  );
}
