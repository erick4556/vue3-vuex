import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
} from "firebase/firestore";
import firebaseApp from "./firebase";

const db = getFirestore(firebaseApp);

const addTransaction = async (transaction) => {
  try {
    const { category } = transaction;
    const docCategoryRef = doc(db, "categories", category);
    const docRef = await addDoc(collection(db, "transactions"), {
      ...transaction,
      category: docCategoryRef,
    });
    return docRef.id;
  } catch (error) {
    console.log(error);
  }
};

const getTransactions = async () => {
  try {
    const transactions = [];
    const querySnapshot = await getDocs(collection(db, "transactions"));
    querySnapshot.forEach((doc) => {
      transactions.push({ id: doc.id, ...doc.data() });
    });
    return transactions;
  } catch (error) {
    console.log(error);
  }
};

export default {
  addTransaction,
  getTransactions,
};
