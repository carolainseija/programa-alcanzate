// getCalendary.jsx
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const fetchCalendary = async () => {
  const querySnapshot = await getDocs(collection(db, 'calendary'));
  return querySnapshot.docs.map(doc => doc.data())[0];
};
