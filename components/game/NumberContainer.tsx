import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

interface Props {
    text: string;
}

const NumberContainer: React.FC<Props> = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 16,
        borderRadius: 8,
        justifyContent: 'center',
        textAlign: 'center',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontFamily: 'open-sands-bold',
    }
})

export default NumberContainer