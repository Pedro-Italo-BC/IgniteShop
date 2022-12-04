import { styled } from "../../styles";

export const ItemContainer = styled('div', {
    width: '41.625rem',
    height: '41.625rem',
})

export const ItemContent = styled('div', {
    '&:last-child ': {
        width: '100%',
        height: '2rem',
        marginTop: '1.5rem',
    },
    background: '$gray800',
    width: '100%',
    height: '80%',

    
})