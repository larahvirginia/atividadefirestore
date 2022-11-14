import {
    getDocs,
    addDoc,
    collection,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
    querySnapshot,
} from "firebase/firestore/lite";

export default class EstudanteService {
    static listar = (db, callback) => {
        getDocs(collection(db, "estudante"))
            .then((snapshot) => {
                const estudantes = [];
                snapshot.forEach((document) => {
                    const id = document.id;
                    const { nome, curso, ira } = document.data();
                    estudantes.push({ id, nome, curso, ira });
                });
                callback(estudantes);
            })
            .catch((error) => console.log(error));
    };

    // static listarSnapshot = (db, callback) => {
    //     const q = query(collection(db, "estudante"));
    //     querySnapshot(q, (querySnapshot) => {
    //         const estudantes = [];
    //         querySnapshot.forEach((document) => {
    //             const id = document.id;
    //             const { nome, curso, ira } = document.data();
    //             estudantes.push({ id, nome, curso, ira });
    //         });
    //         callback(estudantes);
    //     });
    // };

    static criar = (db, callback, estudante) => {
        addDoc(collection(db, "estudante"), estudante)
            .then(
                //testar um alert aqui
                (docRef) => {
                    callback(docRef.id);
                }
            )
            .catch((error) => console.log(error));
    };

    static recuperar = (db, callback, id) => {
        getDoc(doc(db, "estudante", id))
            .then((docSnap) => {
                if (docSnap.exists()) {
                    callback(docSnap.data());
                }
            })
            .catch((error) => console.log(error));
    };

    static atualizar = (db, callback, id, estudante) => {
        updateDoc(doc(db, "estudante", id), estudante)
            .then(() => {
                callback();
            })
            .catch((error) => console.log(error));
    };

    static apagar = (db, callback, id) => {
        deleteDoc(doc(db, "estudante", id))
            .then(() => {
                callback(true);
            })
            .catch((error) => console.log(error));
    };
}

// db é o banco de dados
// callback éuma variável que avisa que a resposta chegou
// é tipo vou te mandar um zap

// método =(bancodedados, callback) => {
//  getDocs(collection(bancodedados, coleção respectiva))
//      .then(
//          (snapshot)=>{
//              snapshot.forEach(
//                  (document)=>{
//                      aqui diz o que você quer fazer com aquele doc
//                   }
//              )
//          }
//      )
//      .catch(error=>console.log(error))
// }
