import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Information = () => {
    return (
        <ImageBackground source={require('../assets/images/background.png')} style={styles.background} resizeMode="cover">
            <View style={styles.container}>
                <Text>
                    <Text style={styles.heading}>Cycle </Text>
                    <Text style={styles.heading1}>SYNCING</Text>
                </Text>
                <View style={styles.caption}>
                    <Text style={styles.captionText}>Discover yourself, one phase at a time.</Text>
                    <Text style={styles.emoji}>🌙💡</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.Mbutton}>
                        <Icon name="wind" size={18} color="#EE4E4E" />
                        <Text style={styles.buttonText}>Menstrual</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Fbutton}>
                        <Icon name="leaf" size={18} color="#4C1F7A" />
                        <Text style={styles.buttonText}>Follicular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Obutton}>
                        <Icon name="sun" size={18} color="#A66E38" />
                        <Text style={styles.buttonText}>Ovulation</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Lbutton}>
                        <Icon name="cloud" size={18} color="#257180" style={styles.icon}/>
                        <Text style={styles.buttonText}>Luteal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground >
    )
}

export default Information;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#D91656',
        fontFamily: 'Pacifico_400Regular',
    },
    heading1: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#D91656',
    },
    caption: {
        marginTop: 20
    },
    captionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#441752'
    },
    emoji: {
        textAlign: 'center',
        fontSize: 35,
        marginTop: 7
    },
    buttons: {
        marginTop: 25,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Mbutton: {
        backgroundColor: '#FFEFEF',
        height: 50,
        padding: 10,
        width: '65%',
        borderRadius: 8,
        borderColor: '#E195AB',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    Fbutton: {
        backgroundColor: '#F5EFFF',
        height: 50,
        padding: 10,
        width: '65%',
        marginTop: 20,
        borderRadius: 8,
        borderColor: '#8D77AB',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    Obutton: {
        backgroundColor: '#FBFFE2',
        height: 50,
        padding: 10,
        width: '65%',
        marginTop: 20,
        borderColor: '#FFACAC',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    Lbutton: {
        backgroundColor: '#E2F1E7',
        height: 50,
        padding: 10,
        width: '65%',
        marginTop: 20,
        borderColor: '#578E7E',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
    },
    icon: {
        marginLeft: -18
    }
})