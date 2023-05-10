import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../../constants/colors';

interface Props {
    onPress: () => void;
    text: string;
    children?: React.ReactNode;
}

const PrimaryButton: React.FC<Props> = ({ text, onPress, children }) => {
    return (
        <View style={style.containerOuter}>
            <Pressable style={style.container} onPress={onPress} android_ripple={{ color: Colors.primary600 }}>
                {children}
                <Text style={style.buttonText}>{text}</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    containerOuter: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: Colors.primary500,
        borderRadius: 28,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})
export default PrimaryButton