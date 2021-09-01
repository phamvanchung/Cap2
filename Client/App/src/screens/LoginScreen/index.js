import React, { useState } from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import imgLogo from '../../assets/images/1200px-Instagram_logo.svg.png';
import { styles } from './styles';

export default function LoginScreen() {
  const [value, setValue] = useState({ username: '', password: '' });

  const handleOnpress = () => {
    console.log(value);

    setValue({
      username: '',
      password: '',
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.form}>
        <View style={styles.header}>
          <Image style={styles.image} source={imgLogo} />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Phone number, email or username"
          onChange={(e) => setValue({ ...value, username: e.target.value })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
        />

        <TouchableOpacity style={styles.customBtnBG} onPress={handleOnpress}>
          <Text style={styles.customBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
