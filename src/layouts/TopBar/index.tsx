import React from 'react'
import styled from 'styled-components'
import { TOPBAR_HEIGHT } from 'config'
import { Flex } from 'components/Box'

const StyledTopBar = styled(Flex)`
  min-height: ${TOPBAR_HEIGHT}px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  margin: auto;
  align-items: center;
`

const TopBar: React.FC = () => {
  return (
    <StyledTopBar>
      TopBar
    </StyledTopBar>
  )
}

export default TopBar