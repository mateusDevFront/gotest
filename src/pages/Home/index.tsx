import React from "react";

import {
  Container,
  BoxHeader,
  ContainerButton,
  ContainerDetailText,
  BoxText,
  TextDetail,
  ContainerDetailInform,
  Description,
  Title,
  ImageLogo
} from "./styles";

import Logo from '../../assets/logo.png'
import { ButtonComponent } from "../../components/ButtonComponent";

export function Home() {
  return (
    <Container>
      <BoxHeader>

        <ImageLogo source={Logo}/>
      </BoxHeader>

      <ContainerDetailText>
        <BoxText>
          <TextDetail>X: 0.0921920</TextDetail>
        </BoxText>
        <BoxText>
          <TextDetail>Y: 0.0921920</TextDetail>
        </BoxText>
        <BoxText>
          <TextDetail>Z: 0.0921920</TextDetail>
        </BoxText>
      </ContainerDetailText>

      <ContainerButton>
        <ButtonComponent
          onPress={() => {}}
          title="PLAY"
          backgroundColorType="play"
        />
        <ButtonComponent onPress={() => {}} title="SLOW" />
      </ContainerButton>

      <ContainerDetailInform>
        <Description>Onde você está</Description>
        <Title>NORTE</Title>
      </ContainerDetailInform>
    </Container>
  );
}
