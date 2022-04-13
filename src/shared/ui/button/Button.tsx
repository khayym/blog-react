import { Modal } from '@mantine/core';
import React, { useState } from 'react';
import { ModalButtonStyled } from './Button.Styled';

type Props = {
  children: JSX.Element;
};

export const ModalButton = ({ children }: Props) => {
  return <ModalButtonStyled>{children}</ModalButtonStyled>;
};
