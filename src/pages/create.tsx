import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import Input from '@/components/Inputs';
import { inputTypes } from '@/components/Inputs/types';
import { exercicesCategories } from '@/data/exercices';
import useExercices from '@/hooks/useExercices';
import { Button } from '@mui/material';
import React, { useState } from 'react';

type Props = {};

const Create = (props: Props) => {
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
      type={containerTypes.FLEX_VERTICAL}
      style={{ justifyContent: 'space-evenly', minHeight: '80vh' }}
    >
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
        {/* Checkbox withResult and input for result and date */}
      </Container>
      <Container
        type={containerTypes.FLEX_HORIZONTAL}
        height="250px"
        style={{ minHeight: 150, flexWrap: 'wrap' }}
      >
        <Button>Save</Button>
      </Container>
    </Container>
  );
};

export default Create;
