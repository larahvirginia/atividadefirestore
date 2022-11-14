import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, Button } from "react-native";
import EstudanteService from "../service/EstudanteService";
import { db } from "../firebase/firebaseConfig";
import { styles } from "../css/meuCSS";

export default function ListarEstudante(props) {
    const [estudantes, setEstudantes] = useState([]);

    useEffect(() => {
        EstudanteService.listar(db, (estudantes) => {
            setEstudantes(estudantes);
        });
    }, []);

    const apagar = (id) => {
        EstudanteService.apagar(
            db,
            (resultado) => {
                let estudantesResultado = estudantes.filter(
                    (estudante) => estudante.id !== id
                )
                setEstudantes(estudantesResultado)
            },
            id
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}>Estudantes</Text>
            <SafeAreaView>
                <FlatList
                    data={estudantes}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Text
                                    style={{ width: "20%", fontWeight: "bold" }}
                                >
                                    {item.nome}
                                </Text>
                                <Text style={{ width: "30%" }}>
                                    {item.curso}
                                </Text>
                                <Text style={{ width: "10%" }}>{item.ira}</Text>
                                <View style={{ margin: 3 }}>
                                    <Button
                                        title="Editar"
                                        onPress={() =>
                                            props.navigation.navigate(
                                                "EditarEstudante",
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
