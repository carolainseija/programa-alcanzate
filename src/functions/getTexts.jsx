// getTexts.jsx
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const fetchTexts = async () => {
  const querySnapshot = await getDocs(collection(db, 'texts'));
  return querySnapshot.docs.map(doc => doc.data())[0];
};
