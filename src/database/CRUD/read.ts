import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import database from '../config';

export const getExercicesByType = async (type: string) => {
  const collectionRef = collection(database, 'exercicesv2', type.toLowerCase(), 'exercices');
  const snapshot = await getDocs(collectionRef);

  const exercices = snapshot.docs.map((doc) => {
    return { name: doc.id };
  });
  return exercices;
};

export const getByAvailable = async (type: string, exercice: string) => {
  const collectionRef = collection(
    database,
    'exercicesv2',
    type.toLowerCase(),
    'exercices',
    exercice.toLowerCase(),
    'by'
  );
  const snapshot = await getDocs(collectionRef);

  return snapshot.docs.map((doc) => {
    return doc.id;
  });
};

export const getTypeOfResultOptions = async (type: string, exercice: string, by: string) => {
  const collectionRef = collection(
    database,
    'exercicesv2',
    type.toLowerCase(),
    'exercices',
    exercice.toLowerCase(),
    'by',
    by.toLowerCase(),
    'options'
  );
  const snapshot = await getDocs(collectionRef);

  return snapshot.docs.map((doc) => {
    return doc.id;
  });
};

export const getResults = async (type: string, exercice: string, by: string, option: string) => {
  const collectionRef = collection(
    database,
    'exercicesv2',
    type.toLowerCase(),
    'exercices',
    exercice.toLowerCase(),
    'by',
    by.toLowerCase(),
    'options',
    option.toLowerCase(),
    'results'
  );
  const snapshot = await getDocs(collectionRef);

  return snapshot.docs.map((doc) => {
    return {
      name: `${exercice} ${option}`,
      id: doc.id,
      ...doc.data(),
    };
  });
};
