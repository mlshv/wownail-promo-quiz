import styled from 'styled-components'

export const XsOnly = styled.div`
    display: none;
    @media (max-width: 575px) {
        display: block;
    }
`

export const XsExcept = styled.div`
    display: block;
    @media (max-width: 575px) {
        display: none;
    }
`