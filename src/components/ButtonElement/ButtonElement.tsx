import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard'

import { TextInputField } from '../TextInput/TextInputField';
import generatePass from '../../services/passwordService';

import { styles } from './ButtonElementStyles';

export function ButtonElement() {
  const [pass, setPass] = useState('')

  function handleGenerateButton() {
    let generateToken = generatePass()
    setPass(generateToken)
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
      <TextInputField pass={pass} />

      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.text}>GERAR SENHA</Text>
      </Pressable>

      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>💾 COPY</Text>
      </Pressable>
    </>
  );
}
