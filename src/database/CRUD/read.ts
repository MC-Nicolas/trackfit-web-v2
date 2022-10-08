import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import toast from 'react-hot-toast';
import database from '../config';

export const getExercicesByType = async (category: string) => {
  const collectionRef = collection(database, 'exercicesv2', category.toLowerCase(), 'exercices');
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

export const getResults = async (
  category: string,
  exercice: string,
  by: string,
  option: string
) => {
  try {
    const collectionRef = collection(
      database,
      'users',
      'mace_nicolas@icloud.com',
      'exercices',
      category.toLowerCase(),
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
  } catch (error) {
    //@ts-ignore
    toast.error(error);
  }
};

export const getMeasurements = async (email: string, bodyPart: string, side: string) => {
  const docRef = collection(
    database,
    'users',
    email,
    'measurements',
    bodyPart.toLowerCase(),
    side.toLowerCase()
  );
  const snapshot = await getDocs(docRef);

  return snapshot.docs.map((doc) => {
    return {
      name: side,
      id: doc.id,
      ...doc.data(),
    };
  });
};

export const getExercicesInfo = async (category: string) => {
  const collectionRef = collection(database, 'exercicesInfos', category.toLowerCase(), 'exercices');
  const snapshot = await getDocs(collectionRef);

  const exercices = snapshot.docs.map((doc) => {
    const { name, imgUrl } = doc.data();
    return { name, imgUrl };
  });
  return exercices;
};
