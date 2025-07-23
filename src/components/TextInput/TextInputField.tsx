import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './TextInputFieldStyles';

interface TextInputFieldProps {
  pass: string
}

export function TextInputField(props: TextInputFieldProps) {
  return (
    <TextInput
      style={styles.container}
      placeholder='pass'
      value={props.pass}
    />
  );
}
