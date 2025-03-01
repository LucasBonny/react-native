import React from "react";
import { View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity
} from "react-native";

export function Home() {
  return(
      <View style={styles.container}>
            <Text style={styles.title}>Welcome, Lucas</Text>

            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
            />

            <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title, {marginTop: 20 }]}>
                My Skills
            </Text>

      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        height: 40,
        marginTop: 20,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    }
    
})