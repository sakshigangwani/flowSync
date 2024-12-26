import { StyleSheet, Text, View } from "react-native";

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>I DID IT!!!</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    }
})