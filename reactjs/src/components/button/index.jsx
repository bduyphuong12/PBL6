/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Text } from '../text';

const Wrapper = styled(Button)`
  background-color: ${({ backgroundcolor, theme, disabled }) =>
    disabled ? theme.grey : theme.COLORS[backgroundcolor]};
  border: ${({ theme, border }) => (border ? `1px solid ${theme[border]}` : 'none')};
  cursor: pointer;
  margin-bottom: 10px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  height: 40px;

  .ant-btn {
    border-radius: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.COLORS.secondary};
  }

  &:active {
    opacity: 0.7;
    border: ${({ border }) => (border ? `1px solid ${border}` : 'none')};
  }

  &:focus {
    opacity: 0.7;
    border: ${({ theme, border }) => (border ? `1px solid ${border}` : [theme.COLORS.white])};
  }

  &.disabled {
    cursor: auto;
    opacity: 0.5;
  }
`;

const PrimaryButton = ({
  title,
  onClick,
  disabled = false,
  backgroundcolor = 'primary',
  border,
  fontSize = 'size_17',
  fontWeight = 400,
  color = 'white',
  ...rest
}) => (
  <Wrapper border={border} backgroundcolor={backgroundcolor} disabled={disabled} onClick={onClick} {...rest}>
    {title ? (
      <Text fontSize={fontSize} fontWeight={fontWeight} color={color}>
        {title}
      </Text>
    ) : (
      rest.children
    )}
  </Wrapper>
);

export { PrimaryButton };
