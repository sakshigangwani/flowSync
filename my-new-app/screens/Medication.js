import { useState } from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { SelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/FontAwesome5';


const Medication = ({navigation}) => {
    const [selectedMedication, setSelectedMedication] = useState("");
    const [customMedication, setCustomMedication] = useState(""); // For user input
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const [medicationData, setMedicationData] = useState([
        { key: "1", value: "Ibuprofen (Advil, Motrin)" },
        { key: "2", value: "Naproxen (Aleve)" },
        { key: "3", value: "Paracetamol (Tylenol)" },
        { key: "4", value: "Mefenamic Acid (Ponstel)" },
        { key: "5", value: "Drotaverine (Drotin)" },
        { key: "6", value: "Tranexamic Acid" },
        { key: "7", value: "Herbal Remedies" },
        { key: "8", value: "Other" },
    ]);

    const handleAddCustomMedication = () => {
        if (customMedication.trim() !== "") {
            const newMedication = {
                key: (medicationData.length + 1).toString(),
                value: customMedication,
            };
            setMedicationData([...medicationData, newMedication]);
            setSelectedMedication(customMedication); // Automatically select the custom medication
            setCustomMedication(""); // Clear the input field
        }
    };

    function pressHandle() {
        navigation.navigate('Main')
    }

    return (
        <ImageBackground source={require('../assets/images/background.png')} style={styles.background} resizeMode="cover">
            <View style={styles.header}>
                <View style={styles.icon}>
                    <Icon name="arrow-left" size={30} color="black" onPress={pressHandle} />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={styles.img} source={require('../assets/images/medication.png')} />
                    <Text style={styles.heading}>add Medication</Text>
                    <Text style={styles.disclaimer}>Consult a healthcare provider before taking any medications listed here, especially if you have underlying health conditions or are on other medications.</Text>
                </View>
                <Divider style={{ backgroundColor: '#640D5F', height: 2, width: '80%', marginVertical: 10 }} />
                <View style={styles.form}>
                    <Text style={styles.label}>PILLS NAME</Text>
                    <SelectList
                        setSelected={(val) => setSelectedMedication(val)}
                        data={medicationData}
                        save="value"
                        placeholder="Choose a medication..."
                        boxStyles={styles.dropdown} // Custom styling
                        inputStyles={styles.inputText} // Style for text in the box
                        dropdownStyles={styles.dropdownMenu} // Dropdown menu styling
                        dropdownTextStyles={styles.dropdownText} // Style for menu items
                    />
                    {selectedMedication == "Other" && (
                        <View style={styles.customInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Enter custom medication..."
                                value={customMedication}
                                onChangeText={setCustomMedication}
                            />
                            <Text
                                style={styles.addButton}
                                onPress={handleAddCustomMedication}
                            >
                                Add
                            </Text>
                        </View>
                    )}
                    <Text style={styles.selectedText}>
                        Selected Medication: {selectedMedication || "None"}
                    </Text>
                    <Text style={styles.label}>Enter Date (YYYY-MM-DD)</Text>
                    <TextInput
                        style={styles.textInputDate}
                        placeholder="YYYY-MM-DD"
                        value={date}
                        onChangeText={setDate}
                    />
                    <Text style={styles.label}>Enter Time (HH:MM)</Text>
                    <TextInput
                        style={styles.textInputTime}
                        placeholder="HH:MM"
                        value={time}
                        onChangeText={setTime}
                    />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Log Medication</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default Medication;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: "100%",
        width: "100%"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        height: 224,
        width: 300,
    },
    heading: {
        fontSize: 38,
        fontFamily: 'Pacifico_400Regular',
        color: '#640D5F',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    form: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    disclaimer: {
        paddingHorizontal: 25,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#8D77AB'
    },
    label: {
        fontSize: 18,
        marginTop: 10,
        color: '#D91656',
        fontWeight: 'bold'
    },
    dropdown: {
        borderWidth: 1,
        borderColor: "#8D77AB",
        borderRadius: 10,
        backgroundColor: "#F5EFFF",
        padding: 10,
        width: '63%',
        marginTop: 10
    },
    inputText: {
        fontSize: 15,
        color: "#333",
    },
    dropdownMenu: {
        backgroundColor: "#F5EFFF",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#8D77AB",
    },
    dropdownText: {
        fontSize: 14,
        color: "#333",
        padding: 6,
    },
    selectedText: {
        marginTop: 16,
        fontSize: 16,
        color: "#640D5F",
        fontWeight: 'bold',
        marginBottom: 15
    },
    customInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        width: '63%'
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#8D77AB",
        borderRadius: 8,
        padding: 10,
        flex: 1,
        marginRight: 10,
        backgroundColor: "#F5EFFF",
    },
    textInputDate: {
        borderWidth: 1,
        borderColor: "#8D77AB",
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#F5EFFF",
        width: '63%',
    },
    textInputTime: {
        borderWidth: 1,
        borderColor: "#8D77AB",
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        backgroundColor: "#F5EFFF",
        width: '63%',
    },
    addButton: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        backgroundColor: '#640D5F',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8
    },
    btn: {
        marginTop: 25,
        backgroundColor: '#640D5F',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30
    },
    icon: {
        marginTop: 85,
        marginLeft: 30,
    },
})