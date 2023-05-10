import { TextInput, View, StyleSheet, Alert, Text } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from 'react'
import Colors from "../constants/colors"
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"

interface Props {
    onPickNumber: (number: string) => void
}

const StartGameScreen: React.FC<Props> = ({ onPickNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText: string) {
        setEnteredNumber(enteredText)
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Number has to be a number between 1 and 99',
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }])
            return
        }
        console.log("Valid number!!!")
        onPickNumber(enteredNumber)
    }

    function resetInputHandler() {
        setEnteredNumber("")
    }

    return (

        <View style={styles.rootContainer}>
            <Title text="Guess My Number"></Title>
            <Card>
                <Text style={styles.instructionText}>Enter a number</Text>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType={'number-pad'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton text="Reset" onPress={resetInputHandler}></PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton text="Confirm" onPress={confirmInputHandler}></PrimaryButton>
                    </View>
                </View>
            </Card >
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 16,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    buttonsContainer: {
        flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1,
    },
});

export default StartGameScreen