import React from 'react'
import styled from 'styled-components'
import { TOPBAR_HEIGHT } from 'config'

const StyledTopBar = styled.div`
  min-height: ${TOPBAR_HEIGHT}px;
`

const TopBar: React.FC = () => {
  return (
    <StyledTopBar>
      TopBar
    </StyledTopBar>
  )
}

export default TopBar