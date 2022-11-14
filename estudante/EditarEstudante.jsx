import { View, Text, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { styles } from "../css/meuCSS";
import EstudanteService from "../service/EstudanteService";

export default function EditarEstudante(props) {
    const [nome, setNome] = useState("");
    const [curso, setCurso] = useState("");
    const [ira, setIra] = useState("");

    useEffect(() => {
        // console.log(props.route.params.id);
        EstudanteService.recuperar(
            db,
            (estudante) => {
                setNome(estudante.nome);
                setCurso(estudante.curso);
                setIra(estudante.ira);
            },
            props.route.params.id
        );
    }, []);

    const atualizar = () => {
        EstudanteService.atualizar(
            db,
            () => {
                alert("Estudante atualizado");
                props.navigation.navigate("ListarEstudante");
            },
            props.route.params.id,
            { nome, curso, ira }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}> Editar Estudante</Text>
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
                <Button title="Atualizar" onPress={atualizar} />
            </View>
        </View>
    );
}
