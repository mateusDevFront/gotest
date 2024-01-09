import React from "react";

import { ContainerButton, TitleButton } from "./styles";

type ButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColorType?: string;
};

export function ButtonComponent({ title, backgroundColorType }: ButtonProps) {
  return (
    <>
      <ContainerButton style={{ backgroundColor: backgroundColorType === "play" ? "#7BFA67" : "#E74848" }}>
        <TitleButton>{title}</TitleButton>
      </ContainerButton>
    </>
  );
}
