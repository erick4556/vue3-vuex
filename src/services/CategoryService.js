import firebaseApp from "./firebase";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

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

const getCategories = async () => {
  try {
    let categories = [];
    const querySnapshot = await getDocs(collection(db, "categories"));
    querySnapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() });
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
};

const getCategory = () => {};

export default {
  addCategory,
  getCategories,
  getCategory,
};
