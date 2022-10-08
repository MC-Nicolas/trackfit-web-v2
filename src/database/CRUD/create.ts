import { handleResultFormat, removeSpecialChars } from '@/utils/format';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import database from '../config';
import { exercicesSelectorsDataWithResults, responseType } from '../types';

export const createExerciceWithResult = async ({
  category,
  exercice,
  by,
  target,
  withResult,
  result,
  date,
  difficulty,
  resultFormat,
}: exercicesSelectorsDataWithResults) => {
  let response: responseType = { success: false, error: null, message: null };

  try {
    await handleEmptyDoc(
      doc(database, 'exercicesv2', category.toLowerCase(), 'exercices', exercice.toLowerCase())
    );
    await handleEmptyDoc(
      doc(
        database,
        'exercicesv2',
        category.toLowerCase(),
        'exercices',
        exercice.toLowerCase(),
        'by',
        by.toLowerCase()
      )
    );
    await handleEmptyDoc(
      doc(
        database,
        'exercicesv2',
        category.toLowerCase(),
        'exercices',
        exercice.toLowerCase(),
        'by',
        by.toLowerCase(),
        'options',
        target.toLowerCase()
      )
    );

    const exerciceRef = doc(
      database,
      'exercicesv2',
      category.toLowerCase(),
      'exercices',
      exercice.toLowerCase(),
      'by',
      by.toLowerCase(),
      'options',
      target.toLowerCase()
    );

    await setDoc(
      exerciceRef,
      {
        date: new Date(),
      },
      { merge: true }
    );
    if (withResult) {
      const formattedResult = handleResultFormat(result, resultFormat);
      const userExerciceRef = doc(
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
        target.toLowerCase(),
        'results',
        removeSpecialChars(date)
      );
      await setDoc(
        userExerciceRef,
        {
          date,
          result: formattedResult,
          difficulty,
        },
        { merge: true }
      );
    }
    toast.success('Exercice added successfully');
    return (response = {
      ...response,
      success: true,
      message: `Result added successfully`,
    });
  } catch (error) {
    toast.error('Error: ' + error);
    response.error = error;
  }
  return response;
};

export const handleEmptyDoc = async (docRef: any) => {
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return;
  } else {
    // set empty doc
    await setDoc(docRef, {
      createdAt: new Date(),
    });
    return null;
  }
};

export const addMeasurement = async (
  userEmail: string,
  bodypart: string,
  side: string | null,
  measurement: string,
  date: string
) => {
  let response: responseType = { success: false, error: null, message: null };
  try {
    const userMeasurementRef = doc(
      database,
      'users',
      userEmail,
      'measurements',
      bodypart.toLowerCase(),
      side ? side.toLowerCase() : 'total',
      removeSpecialChars(date)
    );
    await setDoc(
      userMeasurementRef,
      {
        result: parseFloat(measurement),
      },
      { merge: true }
    );
    toast.success('Measurement added successfully');
    return (response = {
      ...response,
      success: true,
      message: `Measurement added successfully`,
    });
  } catch (error) {
    toast.error('Error: ' + error);
    response.error = error;
  }
  return response;
};
