import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog'

export const CartContainer = styled(Dialog.Content, {
    display: 'flex', 
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vh',
    width: '30rem',
    backgroundColor: '$gray800',
    padding: '4.5rem 3rem 3rem',
    gap: '2rem',
    h2: {
        fontSize: '2rem',
        fontWeight: 700,
    }
})

export const CloseButton = styled(Dialog.Close, {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    background: 'none',
    border: 'none',
    svg: {
        color: '$gray100'
    },
    '&:hover': {
        cursor: 'pointer',
        filter: 'brightness(2)'
    }
})

export const CartList = styled('ul', {
    height: '29.25rem',
    overflowY: 'auto' ,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
})

export const CartContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',

    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3.5rem',

        table: {

            tbory: {
                color: '&gray-100',
                fontSize: '1rem',
            },

            tfoot: {
                color: '&gray-100',
                fontSize: '1.125rem',
                fontWeight: 700,
            }
            ,

            tr: {
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 7
            }
        }
    },
})

export const FinishingShoppingBottom = styled('button', {
    padding: '1.25rem',
        borderRadius: 8,
        backgroundColor: '$green500',
        color: '$white',
        fontWeight: 700,
        fontSize: '1.125rem',
        border: 'none',
        transition: 'background-color .3s',
        '&:hover': {
            backgroundColor: '$green300',
            cursor: 'pointer'
        }
})