import { View, Text, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../css/meuCSS";
import { db } from "../firebase/firebaseConfig";
import ProfessorService from "../service/ProfessorService";

export default function EditarProfessor(props) {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [salario, setSalario] = useState("");

    useEffect(() => {
        ProfessorService.recuperar(
            db,
            (professor) => {
                setNome(professor.nome);
                setCurso(professor.curso);
                setSalario(professor.salario);
            },
            props.route.params.id
        );
    }, []);

    const atualizar = () => {
        ProfessorService.atualizar(
            db,
            () => {
                alert("Professor atualizado");
                props.navigation.navigate("ListarProfessor");
            },
            props.route.params.id,
            { nome, curso, salario }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}> Editar Professor</Text>
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
                <Button title="Atualizar" onPress={atualizar} />
            </View>
        </View>
    );
}
