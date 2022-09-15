import React from 'react';
import FlexContainer from './FlexContainer';

type ContainerProps = {
  type: 'flexHorizontal' | 'flexVertical';
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
      case 'flexHorizontal':
        return (
          <FlexContainer direction="row" justify="evenly" width={width} height={height} {...rest}>
            {children}
          </FlexContainer>
        );
      case 'flexVertical':
        return (
          <FlexContainer justify="evenly" width={width} height={height} {...rest}>
            {children}
          </FlexContainer>
        );

      default:
        return <div>Error with your container</div>;
    }
  };
  return containerRenderer();
};

export default Container;
