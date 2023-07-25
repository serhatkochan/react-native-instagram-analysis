import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import {actions, dispatch, selectors} from "../redux";

const {
    instagram: {getInstagramData}
} = actions;

const {
    instagram: {selectInstagramData, selectUserLoading}
} = selectors;
const Main = () => {
    const loading = useSelector(selectUserLoading);
    const instagramData = useSelector(selectInstagramData);
    const handleGetInstagramData = () => {
        dispatch(getInstagramData());
    }
    console.log(instagramData);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={handleGetInstagramData}
                style={styles.button}
                disabled={loading}
            >
                <Text style={styles.button}>Get Instagram Data</Text>
            </TouchableOpacity>
            <ScrollView>
                <Text>
                    {loading ? 'Loading...' : JSON.stringify(instagramData, null, 2)}
                </Text>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingHorizontal: 10,
        borderRadius: 6,
        backgroundColor: '#4e7c86',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    buttonText: {
        color: '#e0e4e8',
        textAlign: "center",
        fontSize: 16,
    },
});

export default Main;