import Input from '@/components/Inputs';
import { inputTypes } from '@/components/Inputs/types';
import { exercicesCategories } from '@/data/exercices';
import useExercices from '@/hooks/useExercices';
import {
  setExercice,
  setExerciceBy,
  setExerciceCategory,
  setResults,
  setTypeOfResultOption,
} from '@/redux/exercicesSelectors/exercicesSelectorsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/redux.hooks';
import React, { useEffect, useState } from 'react';
import Container from '..';
import { containerTypes } from '../types';

const ExerciceSelectors = () => {
  const dispatch = useAppDispatch();
  const { exercice, category, by, typeOfResultOption } = useAppSelector(
    (state) => state.exercicesSelectors
  );
  const { exercices, byOptions, typeOfResultOptions, results } = useExercices({
    category: category,
    exercice,
    by,
    typeOfResult: typeOfResultOption,
  });

  useEffect(() => {
    if (!category || !exercice || !by || !typeOfResultOption) {
      dispatch(setResults([]));
      return;
    }
    dispatch(setResults(results));
  }, [results, by, dispatch, category, exercice, typeOfResultOption]);

  return (
    <Container
      type={containerTypes.FLEX_HORIZONTAL}
      height="250px"
      style={{ minHeight: 250, flexWrap: 'wrap', backgroundColor: '#222' }}
    >
      <Input
        type={inputTypes.AUTOCOMPLETE}
        label="Category"
        options={exercicesCategories}
        value={category}
        onChange={(e: React.SyntheticEvent, value: string) => dispatch(setExerciceCategory(value))}
      />
      <Input
        type={inputTypes.AUTOCOMPLETE}
        label="Exercice"
        options={exercices}
        value={exercice ?? ''}
        onChange={(e: React.SyntheticEvent, value: string) => dispatch(setExercice(value))}
      />
      <Input
        type={inputTypes.AUTOCOMPLETE}
        label="By"
        options={byOptions}
        value={by ?? ''}
        onChange={(e: React.SyntheticEvent, value: string) => dispatch(setExerciceBy(value))}
      />
      <Input
        type={inputTypes.AUTOCOMPLETE}
        label="Target"
        options={typeOfResultOptions}
        value={typeOfResultOption ?? ''}
        onChange={(e: React.SyntheticEvent, value: string) =>
          dispatch(setTypeOfResultOption(value))
        }
      />
    </Container>
  );
};

export default ExerciceSelectors;
