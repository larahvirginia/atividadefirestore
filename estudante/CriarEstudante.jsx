import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { styles } from "../css/meuCSS";
import EstudanteService from "../service/EstudanteService";

export default function CriarEstudante(props) {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState("");

    const submeter = () => {
        EstudanteService.criar(
            db,
            (id) => {
                alert(`Estudante ${id} inserido!`);
                props.navigation.navigate("ListarEstudante");
            },
            {
                nome,
                curso,
                ira,
            }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}> Criar Estudante</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={(nome) => {
                    setNome(nome);
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="Curso"
                value={curso}
                onChangeText={(curso) => {
                    setCurso(curso);
                }}
            />
            <TextInput
                style={styles.input}
                placeholder="IRA"
                value={ira}
                keyboardType="numeric"
                onChangeText={(ira) => {
                    setIra(ira);
                }}
            />
            <View style={styles.botao}>
                <Button title="Submeter" onPress={submeter} />
            </View>
        </View>
    );
}
