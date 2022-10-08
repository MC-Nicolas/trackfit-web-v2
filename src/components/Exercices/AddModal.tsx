import { exercicesCategories } from '@/data/exercices';
import { createNewExerciceInfo } from '@/database/CRUD/create';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Container from '../Containers';
import { containerTypes } from '../Containers/types';
import Input from '../Inputs';
import { inputTypes } from '../Inputs/types';
import Modal from '../Modals';
import { modalTypes } from '../Modals/types';

type Props = {
  onClose: any;
};

const AddModal = ({ onClose }: Props) => {
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [score, setScore] = useState('');
  const [exerciceCategory, setExerciceCategory] = useState(exercicesCategories[0]);

  const handleSave = async () => {
    if (!name || !imgUrl) {
      return toast.error('Please fill all fields');
    }
    await createNewExerciceInfo(exerciceCategory, name, imgUrl, score);
  };

  return (
    <Modal
      type={modalTypes.BASIC}
      title="Exercice infos"
      width="400px"
      height="580px"
      onClose={() => ''}
    >
      <Container type={containerTypes.FLEX_VERTICAL} width="80%">
        <Input
          type={inputTypes.BASIC_SELECT}
          label="Category"
          value={exerciceCategory}
          options={exercicesCategories}
          onChange={(e: any) => setExerciceCategory(e.target.value)}
          style={{ width: '80%', marginTop: 25, marginBottom: -25 }}
        />
        <Input
          type={inputTypes.ANIMATED_WITH_LABEL}
          label="Name"
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          style={{ width: '100%' }}
        />
        <Input
          type={inputTypes.ANIMATED_WITH_LABEL}
          label="Image url"
          value={imgUrl}
          onChange={(e: any) => setImgUrl(e.target.value)}
          style={{ width: '100%' }}
        />
        <Input
          type={inputTypes.ANIMATED_WITH_LABEL}
          label="Score"
          value={score}
          onChange={(e: any) => setScore(e.target.value)}
          style={{ width: '100%' }}
        />
      </Container>
      <Container type={containerTypes.FLEX_HORIZONTAL} height="200px">
        <Button color="error" variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button color="success" variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Container>
    </Modal>
  );
};

export default AddModal;
