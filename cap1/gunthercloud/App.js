import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [login, setLogin] = useState('');
  const handleData = () => {
      
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fazer Login</Text>
      <TextInput style={styles.input} placeholder='Insira seu login' onChangeText={setLogin} />
      <Text>Login: {login}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize:30
  },
  input: {
    width: 300,
    backgroundColor: "#999",
    margin: 10,
    height: 40
  }
});
