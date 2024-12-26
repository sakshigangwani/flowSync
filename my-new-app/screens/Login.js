import { useState } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from 'react-native-paper';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase"; // Import the auth instance

const Login = ({navigation}) => {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Logged in:", user);
                navigation.navigate("Main");
            })
            .catch((error) => {
                setError(error.message);
                console.error("Login failed:", error);
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>FlowSync</Text>
                <Text style={styles.subTitle}>Welcome to FlowSync</Text>
                <Text style={styles.para}>Login below to track your periods, emotions and cravings</Text>
            </View>
            <View style={styles.form}>
                <TextInput
                    label="Enter your email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.textInput}
                />
                <TextInput
                    label="Password"
                    secureTextEntry
                    right={<TextInput.Icon icon="eye" />}
                    style={styles.textInput}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Text style={styles.forgotPass}>Forgot Password?</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>or sign up with</Text>
                <View style={styles.line} />
            </View>
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../assets/images/google.png')} style={styles.logo}/>
                    <Text style={styles.buttonText}>Login with Google</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.appleButton}>
                    <Image source={require('../assets/images/apple.png')} style={styles.appleLogo}/>
                    <Text style={styles.applebuttonText}>Login with Apple</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.signUp}>
                <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#D91656',
        letterSpacing: 1,
    },
    subTitle: {
        fontSize: 30,
        fontWeight: '600',
        color: '#640D5F',
        marginTop: 19,
        textAlign: 'center'
    },
    para: {
        textAlign: 'center',
        marginTop: 13,
        fontSize: 15,
        paddingHorizontal: 56,
        fontWeight: '500',
        color: 'grey',
        marginBottom: 20
    },
    textInput: {
        width: 300,
        marginTop: 20,
    },
    forgotPass: {
        marginLeft: 176,
        marginTop: 5,
        marginBottom: 15,
        color: '#8174A0',
        fontWeight: '700'
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#ccc",
    },
    orText: {
        fontSize: 14,
        color: "#6c5b7b",
        marginHorizontal: 10
    },
    socialContainer: {
        flexDirection: 'row'
    },
    logo: {
        width: 25,
        height: 25
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#1B1833',
        padding: 15,
        width: 270,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    appleLogo: {
        width: 29,
        height: 29
    },
    appleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#fff',
        padding: 15,
        width: 270,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderColor: '#1B1833',
        borderWidth: 1
    },
    applebuttonText: {
        color: '#1B1833',
        fontSize: 16,
        fontWeight: '600'
    },
    signUp: {
        marginTop: 10,
    },
    signUpText: {
        fontWeight: 'bold',
        color: '#640D5F'
    }
})