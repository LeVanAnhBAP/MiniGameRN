import { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GussLogItem from '../components/game/GussLogItem';

function generateRandomBetween(min: number, max: number, exclude: number): number {
    console.log(minBoundary, maxBoundary)

    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

interface Props {
    userNumber: string,
    onGameOver: (guessRoundsLength: number) => void
}

let minBoundary = 1
let maxBoundary = 100

const GameScreen: React.FC<Props> = ({ userNumber, onGameOver }) => {

    const initialGuess = generateRandomBetween(1, 100, parseInt(userNumber))
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    useEffect(() => {
        if (currentGuess.toString() === userNumber) {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])


    function nextGuessHandler(direction: string) {
        if ((direction === 'lower' && currentGuess < parseInt(userNumber)) || (direction === 'greater' && currentGuess > parseInt(userNumber))) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }])
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        console.log(minBoundary, maxBoundary)
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(prev => [newRndNumber, ...prev])
    }

    const size = guessRounds.length

    return (
        <View style={style.screen}>
            <Title text="Opponent's Guess"></Title>
            <NumberContainer text={currentGuess.toString()}></NumberContainer>
            <Card>
                <InstructionText text='Higher or lower?' style={style.instructionText}></InstructionText>
                <View style={style.containerButtons}>
                    <View style={style.containerButton}>
                        <PrimaryButton text="-" onPress={nextGuessHandler.bind(this, 'lower')}>
                        </PrimaryButton>
                    </View>
                    <View style={style.containerButton}>
                        <PrimaryButton text="+" onPress={nextGuessHandler.bind(this, 'greater')}>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={style.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GussLogItem gussNumber={itemData.item.toString()} size={(size - itemData.index).toString()}></GussLogItem>}
                    keyExtractor={(item) => item.toString()}>
                </FlatList>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        padding: 12,
        flexDirection: 'column',
        alignItems:'center'
    },
    instructionText: {
        marginBottom: 16,
    },
    containerButton: {
        flex: 1
    },
    containerButtons: {
        flexDirection: 'row',
    },
    listContainer: {
        padding: 16,
        height: '50%'
    }

});
export default GameScreen;
