import Chart from '@/components/Charts';
import { chartTypes } from '@/components/Charts/types';
import { generateConfig } from '@/components/Charts/util';
import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import Input from '@/components/Inputs';
import { inputTypes } from '@/components/Inputs/types';
import { bodyParts, singleMeasurementBodyparts } from '@/data/bodyParts';
import { getMeasurements } from '@/database/CRUD/read';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

type Props = {};

const Measurements = (props: Props) => {
  const [bodyPart, setBodyPart] = useState('Forearm');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [measurementToAdd, setMeasurementToAdd] = useState({
    bodypart: 'Forearm',
    side: 'left',
    measurement: '',
  });
  const [date, setDate] = useState(new Date().toLocaleDateString('fr-fr'));
  const [config, setConfig] = useState({});

  useEffect(() => {
    (async () => {
      const isSingleMeasurement = singleMeasurementBodyparts.includes(bodyPart.toLowerCase());

      const total = await getMeasurements('mace_nicolas@icloud.com', bodyPart, 'total');
      const right = await getMeasurements('mace_nicolas@icloud.com', bodyPart, 'right');
      const left = await getMeasurements('mace_nicolas@icloud.com', bodyPart, 'left');
      let totalMeasurements = isSingleMeasurement ? [total] : [right, left];
      //@ts-ignore
      if (total.every((arr) => arr.length === 0)) {
        setConfig([]);
      } else {
        //@ts-ignore
        // todo
        // setConfig(generateConfig(total));
      }
    })();
  }, [bodyPart]);

  return (
    <Container
      type={containerTypes.FLEX_VERTICAL}
      style={{ justifyContent: 'space-evenly', minHeight: '80vh' }}
    >
      <Container type={containerTypes.FLEX_HORIZONTAL} style={{ minHeight: 250 }}>
        <Input
          type={inputTypes.BASIC_SELECT}
          label="Body Part"
          value={bodyPart}
          onChange={(e: any) => setBodyPart(e.target.value)}
          options={bodyParts}
        />
      </Container>
      <Container
        type={containerTypes.FLEX_VERTICAL}
        style={{ flexGrow: 1, backgroundColor: '#222' }}
      >
        <Chart type={chartTypes.BASIC} config={config} />
      </Container>
      <Container type={containerTypes.FLEX_VERTICAL} style={{ marginTop: 50 }}>
        <Button variant="contained" color="success" onClick={() => setModalIsOpen(true)}>
          <p>+</p>
        </Button>
      </Container>
    </Container>
  );
};

export default Measurements;
