import { styled } from "../../../../styles";

export const CartItemContainer = styled('li', {
    display: 'flex',
    width: '100%',
    gap: '1.25rem',
    '& > div': {
        width: '6.25rem',
        height: '6.25rem',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: 8,
    }
})

export const CartItemContent = styled('main', {
    display: 'flex',
    width: '100%',
    gap: '.5rem',
    height: '5.75rem',
    flexDirection: 'column',
    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,

        h3: {
            fontWeight: 400,
            fontSize: '1rem',
            color: '$gray300'
        },
        span: {
            fontWeight: 700,
            fontSize: '1.125rem',
            color: '$gray100'
        }
    },

    button: {
        border: 'none',
        background: 'none',
        color: '$green500',
        width: '4rem',
        height: '1.625rem',

        fontWeight: 700,
        fontSize: '1rem',
        transition: 'color .3s',

        '&:hover' : {
            cursor: 'pointer',
            color: '$green300'
        }
    }
})