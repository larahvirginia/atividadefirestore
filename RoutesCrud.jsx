import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CriarEstudante from "./estudante/CriarEstudante";
import EditarEstudante from "./estudante/EditarEstudante";
import HomeEstudante from "./estudante/HomeEstudante";
import ListarEstudante from "./estudante/ListarEstudante";
import Home from "./Home";
import CriarProfessor from "./professor/CriarProfessor";
import EditarProfessor from "./professor/EditarProfessor";
import HomeProfessor from "./professor/HomeProfessor";
import ListarProfessor from "./professor/ListarProfessor";

const Stack = createNativeStackNavigator();

export default function RoutesCrud() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home" }}
            ></Stack.Screen>

            <Stack.Screen
                name="HomeProfessor"
                component={HomeProfessor}
                options={{ title: "Home Professores" }}
            ></Stack.Screen>

            <Stack.Screen
                name="ListarProfessor"
                component={ListarProfessor}
                options={{ title: "Professores" }}
            ></Stack.Screen>

            <Stack.Screen
                name="CriarProfessor"
                component={CriarProfessor}
                options={{ title: "Criar Professor" }}
            ></Stack.Screen>

            <Stack.Screen
                name="EditarProfessor"
                component={EditarProfessor}
                options={{ title: "Editar Professor" }}
            ></Stack.Screen>

            <Stack.Screen
                name="HomeEstudante"
                component={HomeEstudante}
                options={{ title: "Home Estudantes" }}
            ></Stack.Screen>

            <Stack.Screen
                name="ListarEstudante"
                component={ListarEstudante}
                options={{ title: "Estudantes" }}
            ></Stack.Screen>

            <Stack.Screen
                name="CriarEstudante"
                component={CriarEstudante}
                options={{ title: "Criar Estudante" }}
            ></Stack.Screen>

            <Stack.Screen
                name="EditarEstudante"
                component={EditarEstudante}
                options={{ title: "Editar Estudante" }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}
