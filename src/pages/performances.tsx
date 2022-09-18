import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import Input from '@/components/Inputs';
import { inputTypes } from '@/components/Inputs/types';
import React, { useEffect, useState } from 'react';
import { exercicesCategories } from '@/data/exercices';
import useExercices from '@/hooks/useExercices';
import Chart from '@/components/Charts';
import { chartTypes } from '@/components/Charts/types';
import { generateConfig } from '@/components/Charts/util';

const Performances = () => {
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
  const [config, setConfig] = useState<any>({});

  useEffect(() => {
    if (!results || !by) return;
    setConfig(generateConfig(results, by));
  }, [results, by]);

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
      </Container>
      <Container
        type={containerTypes.FLEX_VERTICAL}
        style={{ flexGrow: 1, backgroundColor: '#222' }}
      >
        {results.length > 0 && by && config ? (
          <Chart type={chartTypes.BASIC} config={config} />
        ) : (
          <p>No results</p>
        )}
      </Container>
    </Container>
  );
};

export default Performances;