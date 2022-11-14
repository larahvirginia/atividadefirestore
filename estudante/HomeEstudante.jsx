import { View, Text, Button } from "react-native";
import { db } from "../firebase/firebaseConfig";
import { styles } from "../css/meuCSS";

export default function HomeEstudante(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}>Estudante Home</Text>
            <View style={styles.botao}>
                <Button
                    title="Criar Estudante"
                    onPress={() =>props.navigation.navigate("CriarEstudante")}
                ></Button>
            </View>
            <View style={styles.botao}>
                <Button title="Listar Estudantes"
                onPress={() =>props.navigation.navigate("ListarEstudante")}></Button>
            </View>
        </View>
    );
}
