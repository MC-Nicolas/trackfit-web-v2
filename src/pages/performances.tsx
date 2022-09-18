import Container from '@/components/Containers';
import { containerTypes } from '@/components/Containers/types';
import React, { useEffect, useState } from 'react';
import Chart from '@/components/Charts';
import { chartTypes } from '@/components/Charts/types';
import { generateConfig } from '@/components/Charts/util';
import { useAppSelector } from '@/redux/redux.hooks';

const Performances = () => {
  const { results, by } = useAppSelector((state) => state.exercicesSelectors);
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
      <Container type={containerTypes.EXERCICES_SELECTORS}>
        <></>
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
