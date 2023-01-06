import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import AddModal from '@/components/Exercices/AddModal';
import Preview from '@/components/Exercices/Preview';
import Input from '@/components/Inputs';
import { inputTypes } from '@/components/Inputs/types';
import { bodyParts } from '@/data/bodyParts';
import { exercicesCategories } from '@/data/exercices';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getExercicesInfo } from '../database/CRUD/read';

type Props = {};

const Exercices = (props: Props) => {
  const [exerciceCategory, setExerciceCategory] = useState(exercicesCategories[0]);
  const [bodypart, setBodypart] = useState<string | null>(null);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [exercices, setExercices] = useState<
    { name: string; imgUrl: string; score?: string | number }[]
  >([]);

  useEffect(() => {
    if (
      exerciceCategory.toLowerCase() === 'body' ||
      exerciceCategory.toLowerCase() === 'accessory'
    ) {
      setBodypart('forearm');
    }
  }, [exerciceCategory]);

  useEffect(() => {
    (async () => {
      const res = await getExercicesInfo(exerciceCategory);
      setExercices(res);
    })();
  }, [exerciceCategory]);

  return (
    <Container
      type={containerTypes.FLEX_VERTICAL}
      style={{ justifyContent: 'space-evenly', minHeight: '100vh', backgroundColor: '#212121' }}
    >
      {addModalIsOpen ? <AddModal onClose={() => setAddModalIsOpen(false)} /> : <></>}
      <Container type={containerTypes.FLEX_HORIZONTAL} height="200px">
        <Input
          type={inputTypes.BASIC_SELECT}
          label="Type of exercice"
          value={exerciceCategory}
          onChange={(e: any) => setExerciceCategory(e.target.value)}
          options={exercicesCategories}
        />

        {bodypart ? (
          <Input
            type={inputTypes.BASIC_SELECT}
            label="Body part"
            value={bodypart ?? 'forearm'}
            onChange={(e: any) => setBodypart(e.target.value)}
            options={bodyParts}
          />
        ) : (
          <></>
        )}
      </Container>
      <Button variant="contained" color="success" onClick={() => setAddModalIsOpen(true)}>
        +
      </Button>
      <Container
        type={containerTypes.FLEX_HORIZONTAL}
        style={{
          marginTop: 50,
          flexGrow: 1,
          flexWrap: 'wrap',
          gap: 15,
          paddingTop: 15,
          paddingBottom: 15,
        }}
      >
        {exercices.map((exercice, index) => (
          <Preview
            key={index}
            title={exercice.name}
            imgUrl={exercice.imgUrl}
            efficiency={exercice.score}
          />
        ))}
      </Container>
    </Container>
  );
};

export default Exercices;
