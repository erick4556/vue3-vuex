import firebaseApp from "./firebase";
import { getFirestore, addDoc, collection } from "firebase/firestore";

//Se inicializa firestore
const db = getFirestore(firebaseApp);

const addCategory = async (category) => {
  try {
    //Guardar documento dentro de la collecion
    const docRef = await addDoc(collection(db, "categories"), category);
    return docRef.id;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getCategories = () => {};

const getCategory = () => {};

export default {
  addCategory,
  getCategories,
  getCategory,
};
