import { View, Text, SafeAreaView, FlatList, Button } from "react-native";
import { db } from "../firebase/firebaseConfig";
import { styles } from "../css/meuCSS";
import { useState, useEffect } from "react";
import ProfessorService from "../service/ProfessorService";

export default function ListarProfessor(props) {
    const [professores, setProfessores] = useState([]);

    useEffect(() => {
        ProfessorService.listar(db, (professores) => {
            setProfessores(professores);
        });
    }, []);

    const apagar = (id) => {
        ProfessorService.apagar(
            db,
            (resultado) => {
                let professoresResultado = professores.filter(
                    (professor) => professor.id !== id
                )
                setProfessores(professoresResultado)
            },
            id
        );
    };

    return (
        <View style={{ margin: 30, alignContent: "center" }}>
            <Text style={styles.cabecalho}>Professores</Text>
            <SafeAreaView>
                <FlatList
                    data={professores}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text
                                    style={{ width: "50%", fontWeight: "bold" }}
                                >
                                    {item.nome}
                                </Text>
                                <Text style={{ width: "30%" }}>
                                    {item.curso}
                                </Text>
                                <Text style={{ width: "20%" }}>
                                    {item.salario}
                                </Text>
                                <View style={{ margin: 3 }}>
                                    <Button
                                        title="Editar"
                                        onPress={() =>
                                            props.navigation.navigate(
                                                "EditarProfessor",
                                                { id: item.id }
                                            )
                                        }
                                    ></Button>
                                </View>
                                <View style={{ margin: 3 }}>
                                    <Button
                                        title="Apagar"
                                        onPress={() => apagar(item.id)}
                                    ></Button>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        </View>
    );
}
