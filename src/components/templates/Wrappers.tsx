import styled from 'styled-components'


export const HorizontalFlexDivSpaceBetween = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`

export const VerticalFlexDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
`
export const HorizontalFlexDiv = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
`
export const CustomSection = styled.section<{ container?: boolean, column?: boolean }>`
    display:flex;
    flex-direction:${(props: { column?: boolean }) => (props.column) ? 'column' : 'row'};
    max-width: ${(props: { container?: boolean }) => (props.container) ? '1300px' : 'auto'};
    margin: auto;
    align-items:flex-start;
`

export const CustomContainer = styled.section`
    max-width:1000px
`