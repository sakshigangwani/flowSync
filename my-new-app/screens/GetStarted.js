import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function GetStarted() {
    return (
        <View>
            <Image style={styles.img} source={require('../assets/images/login.png')} />
            <Text style={styles.heading}>FlowSync</Text>
            <Text style={styles.text}>
                Let’s work together to manage{'\n '}
                <Text style={styles.highlightText}>PCOD</Text> and{' '}
                <Text style={styles.highlightText}>PCOS</Text> with ease.
            </Text>
            <TouchableOpacity  style={styles.button} >
                <Text style={styles.buttonText}>It’s time to prioritize you—
                start today!</Text>
            </TouchableOpacity>
        </View>
    )
}

export default GetStarted;

const styles = StyleSheet.create({
    img: {
        height: 294,
        width: 370,
    },
    heading: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#D91656',
        letterSpacing: 1,
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        letterSpacing: 1.1,
        fontWeight: '600',
        marginTop: 14,
        color: '#640D5F'
    },
    highlightText: {
        fontSize: 20,
        color: '#FFB200',
        fontWeight: 'bold'
    },
    button: {
        height: 72,
        width: 233,
        backgroundColor: '#D91656',
        marginTop: 29,
        borderRadius: 22,
        marginHorizontal: 70
    },
    buttonText: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 15,
        color: '#fff',
        padding: 5,
    }
})