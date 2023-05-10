import { StyleSheet, Text } from "react-native"

interface Props {
    text: string;
}

const Title: React.FC<Props> = ({ text }) => {
    return (
        <Text style={styles.title}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sands-bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300
    },
})

export default Title