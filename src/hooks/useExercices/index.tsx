import {
  getByAvailable,
  getExercicesByType,
  getResults,
  getTypeOfResultOptions,
} from '@/database/CRUD/read';
import { fromNameToOption } from '@/utils/format';
import React, { useEffect, useState } from 'react';

type useExercicesProps = {
  category: string | null;
  exercice: string | null;
  by: string | null;
  typeOfResult: string | null;
};

const useExercices = ({ category, exercice, by, typeOfResult }: useExercicesProps) => {
  const [exercices, setExercices] = useState<string[]>([]);
  const [byOptions, setByOptions] = useState<string[]>([]);
  const [typeOfResultOptions, setTypeOfResultOptions] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    if (!category) return;
    (async () => {
      const res = await getExercicesByType(category);
      setExercices(fromNameToOption(res));
    })();
  }, [category]);

  useEffect(() => {
    if (!exercice || !category) return;
    (async () => {
      const res = await getByAvailable(category, exercice);
      setByOptions(res);
    })();
  }, [category, exercice]);

  useEffect(() => {
    if (!exercice || !category || !by) return;
    (async () => {
      const res = await getTypeOfResultOptions(category, exercice, by);
      setTypeOfResultOptions(res);
    })();
  }, [category, exercice, by]);

  useEffect(() => {
    if (!exercice || !category || !by || !typeOfResult) return;
    (async () => {
      const res = await getResults(category, exercice, by, typeOfResult);
      if (res) setResults(res);
    })();
  }, [category, exercice, by, typeOfResult]);

  return { exercices, byOptions, typeOfResultOptions, results };
};

export default useExercices;
