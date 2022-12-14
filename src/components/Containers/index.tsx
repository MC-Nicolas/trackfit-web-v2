import React from 'react';
import BlurLayer from './BlurLayer';
import BorderAnimated from './BorderAnimated';
import ExerciceSelectors from './ExerciceSelectors';
import FlexContainer from './FlexContainer';
import Layout from './Layout';
import { containerTypes } from './types';

type ContainerProps = {
  type: string;
  children: JSX.Element | JSX.Element[];
  width?: string;
  height?: string;
  [key: string]: any;
};

const Container = ({
  type,
  children,
  width = '100%',
  height = '100%',
  ...rest
}: ContainerProps): JSX.Element => {
  const containerRenderer = (): JSX.Element => {
    switch (type) {
      case containerTypes.FLEX_HORIZONTAL:
        return (
          <FlexContainer direction="row" justify="evenly" width={width} height={height} {...rest}>
            {children}
          </FlexContainer>
        );
      case containerTypes.FLEX_VERTICAL:
        return (
          <FlexContainer justify="evenly" width={width} height={height} {...rest}>
            {children}
          </FlexContainer>
        );
      case containerTypes.BORDER_ANIMATED:
        return (
          <BorderAnimated width={width} height={height}>
            {children}
          </BorderAnimated>
        );
      case containerTypes.EXERCICES_SELECTORS:
        return <ExerciceSelectors />;
      case containerTypes.LAYOUT:
        return <Layout>{children}</Layout>;

      case containerTypes.BLUR_LAYER:
        return <BlurLayer>{children}</BlurLayer>;

      default:
        return <div>Error with your container</div>;
    }
  };
  return containerRenderer();
};

export default Container;
