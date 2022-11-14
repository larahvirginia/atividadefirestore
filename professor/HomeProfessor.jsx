import { View, Text, Button } from "react-native";
// import { db } from "../firebase/firebaseConfig";
import { styles } from "../css/meuCSS";

export default function HomeProfessor(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}>Home Professor</Text>
            <View style={styles.botao}>
                <Button
                    title="Criar Professor"
                    onPress={() =>props.navigation.navigate("CriarProfessor")}
                ></Button>
            </View>
            <View style={styles.botao}>
                <Button title="Listar Professores"
                onPress={() =>props.navigation.navigate("ListarProfessor")}></Button>
            </View>
        </View>
    );
}
