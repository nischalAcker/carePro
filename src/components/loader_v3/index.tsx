import Lottie from 'lottie-react';
import styled, { CSSProperties } from 'styled-components';
import AnimationData from './data.json';

export default function LoaderV3({ style }: { style?: CSSProperties }) {
  return (
    <Container style={style}>
      <Lottie animationData={AnimationData} loop={true} />
    </Container>
  );
}

const Container = styled.div``;
