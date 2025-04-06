import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
        <StatusBar />
      <Text style={{fontSize:30, fontWeight:"bold"}}>Configurações</Text>
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
