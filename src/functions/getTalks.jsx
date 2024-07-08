// getTalks.jsx
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const fetchTalks = async () => {
  const q = query(collection(db, 'talks'), orderBy('createdAt', 'desc')); // Ordena por createdAt descendente
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};
