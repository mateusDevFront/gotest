import React, {useState, useEffect} from "react";

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

import { Magnetometer } from 'expo-sensors';

export function Home() {

  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);
  const [direction, setDirection] = useState('');

  const _slow = () => Magnetometer.setUpdateInterval(1000);
  const _fast = () => Magnetometer.setUpdateInterval(16);

  const _subscribe = () => {
    setSubscription(
      Magnetometer.addListener(result => {
        setData(result);
        _getDirection(result);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  const _getDirection = ({ x, y, z }) => {
    // Convertendo para ângulos em radianos
    const angleX = Math.atan2(y, z);
    const angleY = Math.atan2(-x, Math.sqrt(y * y + z * z));

    // Convertendo para graus
    const angleXDeg = angleX * (180 / Math.PI);
    const angleYDeg = angleY * (180 / Math.PI);

    if (angleYDeg >= 45 && angleYDeg < 135) {
      setDirection('Norte');
    } else if (angleYDeg >= -135 && angleYDeg < -45) {
      setDirection('Sul');
    } else if ((angleXDeg >= 45 && angleXDeg <= 180) || (angleXDeg >= -180 && angleXDeg < -45)) {
      setDirection('Oeste');
    } else {
      setDirection('Leste');
    }    
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);
   
  return (
    <Container>
      <BoxHeader>

        <ImageLogo source={Logo}/>
      </BoxHeader>

      <ContainerDetailText>
        <BoxText>
          <TextDetail>X: {x.toFixed(6)}</TextDetail>
        </BoxText>
        <BoxText>
          <TextDetail>Y: {y.toFixed(6)}</TextDetail>
        </BoxText>
        <BoxText>
          <TextDetail>Z: {z.toFixed(6)}</TextDetail>
        </BoxText>
      </ContainerDetailText>

      <ContainerButton>
        <ButtonComponent
          onPress={subscription ? _unsubscribe : _subscribe}
          title={subscription ? 'PLAY' : 'OFF'}
          backgroundColorType="play"
        />
        <ButtonComponent onPress={() => _slow()} title="SLOW" />
      </ContainerButton>

      <ContainerDetailInform>
        <Description>Onde você está</Description>
        <Title>{direction}</Title>
      </ContainerDetailInform>
    </Container>
  );
}
