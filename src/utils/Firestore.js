import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function getGifs() {
  const gifRef = query(collection(db, 'gifs'));
  const gifs = [];
  
  const querySnapshot = await getDocs(gifRef);

  querySnapshot.forEach((doc) => {
    gifs.push({ id: doc.id, ...doc.data() });
  });

  return gifs;
};
