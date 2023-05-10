import { Image, StyleSheet, Text, View } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"

interface Props {
    roundsNumber: string,
    userNumber: string,
    onStartNewGame: () => void
}

function GameOverScreen(props: Props) {
    console.log(props.roundsNumber)
    return (
        <View style={styles.container}>
            <Title text="GAME OVER!!!"></Title>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={require('../assets/images/success.png')}></Image>
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
            </Text>
            <PrimaryButton text="Start New Game" onPress={props.onStartNewGame}></PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImage: {
        height: 300,
        width: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary700,
        fontSize: 24
    }
})

export default GameOverScreen