import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, router } from 'expo-router';

export default function Home() {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    function handleShowInfo() {
        router.replace("/dashboard");
    }
  return (
    <View style={{flex:1}}>
        <Link href={"/profile/Lucas"} style={{backgroundColor:"#888", textAlign:"center", padding: 10,}}>Voltar</Link>
        <View style={styles.container}>
            <Text style={{fontSize:30, fontWeight:"bold"}}>Fazer Login</Text>
            <TextInput placeholder='Insira seu login' style={styles.input} onChangeText={setLogin} />
            <TextInput placeholder='Insira sua senha' style={styles.input} onChangeText={setPass}/>
            <Button title='Ir para o dashboard' onPress={handleShowInfo} />
            <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor:"#999",
    width: 300, 
    borderRadius:10, 
    margin: 10, 
    textAlign:"center"
  }
});
