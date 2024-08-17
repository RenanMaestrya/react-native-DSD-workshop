import { Image } from "react-native";
import styled from "styled-components/native";

export function Card({ props }: { props: Result }) {
  return (
    <Container>
      <ViewImage>
        <Image
          source={{ uri: `${props.image}` }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      </ViewImage>
      <Title>{props.name}</Title>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 108px;
  background-color: #f0f0f0;
  border-radius: 10px;
  gap: 8px;
  padding: 8px;
  margin-bottom: 8px;
`;

const ViewImage = styled.View`
  width: 92px;
  height: 92px;
  border-radius: 999px;
  overflow: hidden;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  max-width: 70%;
`;
