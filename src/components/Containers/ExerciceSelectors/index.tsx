import Input from '@/components/Inputs';
import { inputTypes } from '@/components/Inputs/types';
import { exercicesCategories } from '@/data/exercices';
import useExercices from '@/hooks/useExercices';
import React, { useState } from 'react';
import Container from '..';
import { containerTypes } from '../types';

type Props = {};

const ExerciceSelectors = (props: Props) => {
  const [exerciceCategory, setExerciceCategory] = useState('Cardio');
  const [exercice, setExercice] = useState<null | string>(null);
  const [by, setBy] = useState<null | string>(null);
  const [typeOfResultOption, setTypeOfResultOption] = useState<null | string>(null);
  const { exercices, byOptions, typeOfResultOptions, results } = useExercices({
    category: exerciceCategory,
    exercice,
    by,
    typeOfResult: typeOfResultOption,
  });
  return (
    <Container
      type={containerTypes.FLEX_HORIZONTAL}
      height="250px"
      style={{ minHeight: 250, flexWrap: 'wrap' }}
    >
      <Input
        type={inputTypes.AUTOCOMPLETE}
        label="Category"
        options={exercicesCategories}
        value={exerciceCategory}
        onChange={(e: React.SyntheticEvent, value: string) => setExerciceCategory(value)}
      />
      <Input
        type={inputTypes.AUTOCOMPLETE}
        label="Exercice"
        options={exercices}
        value={exercice ?? ''}
        onChange={(e: React.SyntheticEvent, value: string) => setExercice(value)}
      />
      <Input
        type={inputTypes.AUTOCOMPLETE}
        label="By"
        options={byOptions}
        value={by ?? ''}
        onChange={(e: React.SyntheticEvent, value: string) => setBy(value)}
      />
      <Input
        type={inputTypes.AUTOCOMPLETE}
        label="Target"
        options={typeOfResultOptions}
        value={typeOfResultOption ?? ''}
        onChange={(e: React.SyntheticEvent, value: string) => setTypeOfResultOption(value)}
      />
    </Container>
  );
};

export default ExerciceSelectors;
