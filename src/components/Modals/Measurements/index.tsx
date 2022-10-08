import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import Input from '@/components/Inputs';
import { inputTypes } from '@/components/Inputs/types';
import Text from '@/components/Texts';
import { bodyParts, sides, singleMeasurementBodyparts } from '@/data/bodyParts';
import { addMeasurement } from '@/database/CRUD/create';
import { useAppSelector } from '@/redux/redux.hooks';
import { autoFormatInput } from '@/utils/format';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
  width?: string;
  height?: string;
  title: string;
  onClose: () => void;
};

const Measurement = ({ title, width = '400px', height = '600px', onClose }: Props) => {
  // const {email} = useAppSelector(state => state.user);
  const [bodyPart, setBodyPart] = useState('Forearm');
  const [date, setDate] = useState(new Date().toLocaleDateString('fr-fr'));
  const [side, setSide] = useState<null | 'left' | 'right'>('left');
  const [measurement, setMeasurement] = useState('');

  useEffect(() => {
    if (singleMeasurementBodyparts.includes(bodyPart.toLowerCase())) {
      setSide(null);
    }
    if (!side && !singleMeasurementBodyparts.includes(bodyPart.toLowerCase())) {
      setSide('left');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart]);

  const handleSave = async () => {
    const { success } = await addMeasurement(
      'mace_nicolas@icloud.com',
      bodyPart,
      side,
      measurement,
      date
    );
    if (success) {
      onClose();
    }
  };

  return (
    <Container type={containerTypes.BLUR_LAYER}>
      <Container
        type={containerTypes.FLEX_VERTICAL}
        width={width}
        height={height}
        style={{
          backgroundColor: '#222',
          borderRadius: 10,
          boxShadow: '0 0 10px 0 #000',
          justifyContent: 'flex-start',
        }}
      >
        <Container
          type={containerTypes.FLEX_VERTICAL}
          height="80px"
          style={{ borderBottom: '1px solid gray' }}
        >
          <Text type="sectionTitle" text={title} />
        </Container>
        <Container type={containerTypes.FLEX_VERTICAL} height="250px" width="80%">
          <Input
            type={inputTypes.BASIC_SELECT}
            label="Body Part"
            value={bodyPart}
            onChange={(e: any) => setBodyPart(e.target.value)}
            options={bodyParts}
            style={{ width: '100%' }}
          />
          {side ? (
            <Input
              style={{ marginTop: 10 }}
              type={inputTypes.BASIC_SELECT}
              label="Side"
              value={side ?? 'left'}
              onChange={(e: any) => setBodyPart(e.target.value)}
              options={sides}
            />
          ) : (
            <></>
          )}
        </Container>
        <Container type={containerTypes.FLEX_VERTICAL} height="300px">
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
            label="Measurement"
            value={measurement}
            onChange={(e: any) => setMeasurement(e.target.value)}
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
      </Container>
    </Container>
  );
};

export default Measurement;
