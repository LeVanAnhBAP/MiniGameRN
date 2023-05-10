import { StyleProp, StyleSheet, Text, TextStyle } from "react-native"
import Colors from "../../constants/colors"

interface Props {
    text: string,
    style?: StyleProp<TextStyle>
}

function InstructionText(props: Props) {
    return <Text style={[styles.instructionText, props.style]}>{props.text}</Text>
}
const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: 'open-sands-regular',
    },
})

export default InstructionText