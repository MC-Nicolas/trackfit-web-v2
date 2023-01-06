import React, { useEffect, useState } from 'react';
import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import { Button, Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Input from '@/components/Inputs';
import { inputTypes } from '@/components/Inputs/types';
import { createExerciceWithResult } from '@/database/CRUD/create';
import { useAppDispatch, useAppSelector } from '@/redux/redux.hooks';
import toast from 'react-hot-toast';
import { reset } from '@/redux/exercicesSelectors/exercicesSelectorsSlice';
import { handleResultFormatValidation } from '@/utils/validation';
import { autoFormatInput } from '@/utils/format';

const Create = () => {
  const dispatch = useAppDispatch();
  const { category, exercice, by, typeOfResultOption } = useAppSelector(
    (state) => state.exercicesSelectors
  );
  const [withResult, setWithResult] = useState(false);
  const [date, setDate] = useState<string>(new Date().toLocaleDateString('fr-FR'));
  const [result, setResult] = useState('');
  const [difficulty, setdifficulty] = useState('0');
  const [resultFormat, setResultFormat] = useState('');

  useEffect(() => {
    if (by === 'distance' || by === 'cal') {
      setResultFormat('time');
      setResult('00:00:00');
    } else {
      setResultFormat('number');
      setResult('0');
    }
  }, [by]);

  const handleSubmit = async () => {
    if (!category || !exercice || !by || !typeOfResultOption) {
      return toast.error('All field are required');
    }
    if (withResult) {
      if (!result || !date || !difficulty) return toast.error('Result field are required');
    }
    if (!handleResultFormatValidation(result, resultFormat))
      return toast.error('Result format is not valid');

    const withResultConfirm = `${category} -> ${exercice} -> ${by} -> ${typeOfResultOption} -> RESULT -> ${date} -> ${result} -> ${difficulty} ? `;
    const withoutResultConfirm = `${category} -> ${exercice} -> ${by} -> ${typeOfResultOption} ? `;
    const validation = confirm(withResult ? withResultConfirm : withoutResultConfirm);

    if (!validation) return;
    const { success } = await createExerciceWithResult({
      category,
      exercice,
      by,
      target: typeOfResultOption,
      withResult,
      result,
      date,
      difficulty,
      resultFormat,
    });
    if (success) {
      setResult('');
      setdifficulty('0');
    }
  };

  return (
    <Container
      type={containerTypes.FLEX_VERTICAL}
      style={{ justifyContent: 'space-evenly', minHeight: '100vh', backgroundColor: '#212121' }}
    >
      <Container type={containerTypes.EXERCICES_SELECTORS}>
        <></>
      </Container>
      <Container type={containerTypes.FLEX_VERTICAL} style={{ minHeight: 100, flexWrap: 'wrap' }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={withResult} onChange={() => setWithResult(!withResult)} />}
            label="With result"
            sx={{ color: 'white' }}
          />
        </FormGroup>
      </Container>
      <Container
        type={containerTypes.FLEX_HORIZONTAL}
        style={{
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          padding: '50px 10px',
        }}
      >
        <>
          {withResult && (
            <>
              <Input
                type={inputTypes.ANIMATED_WITH_LABEL}
                label="Date"
                value={date}
                onChange={(e: any) => {
                  const formattedDate = autoFormatInput(e.target.value, 'date');
                  //@ts-ignore
                  setDate(formattedDate);
                }}
              />
              <Input
                type={inputTypes.ANIMATED_WITH_LABEL}
                label={`Result (${resultFormat === 'time' ? 'hh:mm:ss' : 'number'})`}
                value={result}
                onChange={(e: any) => setResult(e.target.value)}
              />
              <Input
                type={inputTypes.ANIMATED_WITH_LABEL}
                label="Difficulty"
                value={difficulty}
                onChange={(e: any) => setdifficulty(e.target.value)}
              />
            </>
          )}
        </>
      </Container>
      <Container type={containerTypes.FLEX_HORIZONTAL} height="250px" style={{ minHeight: 50 }}>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </Container>
    </Container>
  );
};

export default Create;
