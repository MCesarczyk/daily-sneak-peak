import React from 'react';
import { Space } from '../../Space';
import { SubTitle, Title, TitleFieldset, TitleLabel } from './styled';

const Name = ({ name, surname }) => (
  <TitleFieldset>
    <Space>
      <TitleLabel>name: </TitleLabel>
      <Title>{name}</Title>
    </Space>
    <Space>
      <TitleLabel>surname: </TitleLabel>
      <SubTitle>{surname}</SubTitle>
    </Space>
  </TitleFieldset>
);

export default Name;