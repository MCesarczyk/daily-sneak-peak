import { Divider } from '@mui/material';
import React from 'react';
import { Space } from '../../Space';
import { SubTitle, Title, TitleFieldset, TitleLabel } from './styled';

const Name = ({ name, group }) => (
  <TitleFieldset>
    <Space>
      <TitleLabel>name: </TitleLabel>
      <Title>{name}</Title>
    </Space>
    <Space>
      <TitleLabel>group: </TitleLabel>
      <SubTitle>{group}</SubTitle>
    </Space>
    <Divider />
  </TitleFieldset>
);

export default Name;