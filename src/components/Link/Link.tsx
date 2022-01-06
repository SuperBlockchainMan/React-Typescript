import React from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'
import { LinkProps } from './types'

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
  }
`;

const getExternalLinkProps = (): { target: string; rel: string } => ({
  target: "_blank",
  rel: "noreferrer noopener",
});

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return <StyledLink as="a" bold {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: "primary",
};

export default Link;
