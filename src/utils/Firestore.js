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

export async function getWork() {
  const worfRef = query(collection(db, 'work'));
  const work = [];
  
  const querySnapshot = await getDocs(worfRef);

  querySnapshot.forEach((doc) => {
    console.log(doc)
    work.push({ id: doc.id, ...doc.data() });
  });

  return work;
};
