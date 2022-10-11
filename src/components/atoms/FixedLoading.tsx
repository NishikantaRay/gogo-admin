import styled from 'styled-components'

import { light } from '../../globals/colors'

export const FixedLoading = styled.div<{}>`
    background: ${light};
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
`
