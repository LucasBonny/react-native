import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Profile() {
  const { login } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30, fontWeight:"bold"}}>Seja bem vindo {login}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
