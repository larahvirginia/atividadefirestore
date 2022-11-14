import { View, Text, Button } from "react-native";
// import { db } from "../firebase/firebaseConfig";
import { styles } from "./css/meuCSS";

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}>Home</Text>
            <View style={styles.botao}>
                <Button
                    title="Ir para Professores"
                    onPress={() =>props.navigation.navigate("HomeProfessor")}
                ></Button>
            </View>
            <View style={styles.botao}>
                <Button title="Ir para Estudantes"
                onPress={() =>props.navigation.navigate("HomeEstudante")}></Button>
            </View>
        </View>
    );
}
