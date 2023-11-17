import { collection, getDocs, query, orderBy, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export async function getGifs() {
  const gifRef = query(collection(db, 'gifs'), orderBy('projectYear', 'desc'));
  const gifs = [];
  
  const querySnapshot = await getDocs(gifRef);

  querySnapshot.forEach((doc) => {
    gifs.push({ id: doc.id, ...doc.data() });
  });

  return gifs;
};

export async function getWork() {
  const wordRef = query(collection(db, 'work'));
  const work = [];
  
  const querySnapshot = await getDocs(wordRef);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    work.push({ id: doc.id, ...doc.data() });
  });

  return work;
};

export async function storeVisitor(name) {
  try {
    const visitorsRef = collection(db, 'visitors');
    
    await addDoc(visitorsRef, {
      name: name
    });

    console.log('Visitor added successfully!');
  } catch (error) {
    console.error('Error adding visitor: ', error);
  }
}

export async function getSchool() {
  const schoolRef = query(collection(db, 'school'));
  const school = [];
  
  const querySnapshot = await getDocs(schoolRef);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    school.push({ id: doc.id, ...doc.data() });
  });

  return school;
};
