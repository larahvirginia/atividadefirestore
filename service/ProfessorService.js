import {
    getDocs,
    addDoc,
    deleteDoc,
    docRef,
    collection,
    doc,
    getDoc,
    docSnap,
    updateDoc,
} from "firebase/firestore/lite";

export default class ProfessorService {
    static listar = (db, callback) => {
        getDocs(collection(db, "professor"))
            .then((snapshot) => {
                const professores = [];
                snapshot.forEach((document) => {
                    const id = document.id;
                    const { nome, curso, salario } = document.data();
                    professores.push({ id, nome, curso, salario });
                });
                callback(professores);
            })
            .catch((error) => console.log(error));
    };

    static criar = (db, callback, professor) => {
        addDoc(collection(db, "professor"), professor)
            .then((docRef) => {
                callback(docRef.id);
            })
            .catch((error) => console.log(error));
    };

    static apagar = (db, callback, id) => {
        deleteDoc(doc(db, "professor", id))
            .then(() => {
                callback(true);
            })
            .catch((error) => console.log(error));
    };

    static recuperar = (db, callback, id) => {
        getDoc(doc(db, "professor", id))
            .then((docSnap) => {
                if (docSnap.exists()) {
                    callback(docSnap.data());
                }
            })
            .catch((error) => console.log(error));
    };

    static atualizar = (db, callback, id, professor) => {
        updateDoc(doc(db, "professor", id), professor)
            .then(() => {
                callback();
            })
            .catch((error) => console.log(error));
    };
}
