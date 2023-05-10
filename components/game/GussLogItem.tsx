import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/colors"

interface Props {
    gussNumber: string,
    size: string
}

function GussLogItem(props: Props) {
    return (
        <View style={styles.listItem}>
            <Text>#{props.size}</Text>
            <Text style={styles.gussNumberText}>Opponest's guess: {props.gussNumber}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: Colors.primary600,
        borderRadius: 40,
        backgroundColor: Colors.accent500,
        marginVertical: 8,
        alignItems: 'center',
        padding: 12,
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    gussNumberText: {
        textAlign: 'right'
    }
})

export default GussLogItem