import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Aula1 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.box}>Teste</Text>
          <Text style={styles.box}>Teste</Text>
          <Text style={styles.box}>Teste</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333"
  },
  content: {
    flexDirection: 'row',
    marginTop: 30,
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: "#222",
  },
  box: {
    backgroundColor: "#111",
    width:100,
    color: "white",
    textAlign: "center",
    height:100
  }
});