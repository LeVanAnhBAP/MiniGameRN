import { StyleSheet, View, ViewStyle } from "react-native"
import Colors from "../../constants/colors"

interface Props {
    style?: ViewStyle;
    children?: React.ReactNode;
  }
  
  function Card(props: Props) {
    return (
      <View style={[styles.inputContainer, props.style]}>{props.children}</View>
    )
  }

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})

export default Card