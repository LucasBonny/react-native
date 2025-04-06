import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
  function handleReturnUser() {
    router.replace("/");
  }
  return (
    <View style={styles.container}>
            <StatusBar />
      <Text style={{fontSize:30, fontWeight:"bold"}}>Pagina do Usuário</Text>
      <Button title='Voltar para o login' onPress={handleReturnUser}/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems:"center",
    justifyContent: "center"
  },
});
