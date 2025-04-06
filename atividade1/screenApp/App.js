import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  const img = 'https://picsum.photos/200';
  return (
    <View style={styles.container}>
      <Feather style={{marginBottom:50}} name="camera" size={100} color="black" />
      <TextInput style={styles.input} placeholder='Telefone, nome de usuário ou email' />
      <TextInput style={styles.input} placeholder='Senha' />
      <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Log In</Text></TouchableOpacity>
      <View style={styles.recovery}>
        <Text style={{textAlign:"right", color:"#0087ff"}}>Esqueceu a senha?</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "#EFEFEF",
    width: 300,
    height: 50,
    paddingLeft: 20,
    margin: 10,
    borderRadius: 10
  },
  btn: {
    backgroundColor: "#0087ff",
    width: 300,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center"
  },
  btnText: {
    margin: 15,
    color: "white"
  },
  recovery: {
    alignItems: "right",
    marginTop: 10,
    width: 300
  }
});
