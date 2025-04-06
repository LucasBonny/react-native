import React, { useState } from "react";
import { View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    TouchableOpacity
} from "react-native";

export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handlerAddNewSkill() {
        setMySkills(oldSkills => [...oldSkills, newSkill]);
        console.log(newSkill);
    }

  return(
      <View style={styles.container}>
            <Text style={styles.title}>Welcome, Lucas</Text>

            <TextInput
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            onPress={handlerAddNewSkill}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title, {marginVertical: 50 }]}>
                My Skills
            </Text>

            {
                mySkills.map(skill => (
                    <TouchableOpacity key={skill} style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))
            }
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
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
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },    
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 50
    },
    textSkill: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})