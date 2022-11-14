import { View, Text, TextInput, Button } from "react-native"
import ProfessorService from "../service/ProfessorService";
import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { styles } from "../css/meuCSS";

export default function CriarProfessor(props) {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [salario, setSalario] = useState("");

    const submeter = () => {
        ProfessorService.criar(
            db,
            (id) => {
                alert(`Professor ${id} inserido!`);
                props.navigation.navigate("ListarProfessor");
            },
            {
                nome,
                curso,
                salario,
            }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}> Criar Professor</Text>
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
                placeholder="Salário"
                value={salario}
                keyboardType="numeric"
                onChangeText={(salario) => {
                    setSalario(salario);
                }}
            />
            <View style={styles.botao}>
                <Button title="Submeter" onPress={submeter} />
            </View>
        </View>
    );
}