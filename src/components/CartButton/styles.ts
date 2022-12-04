import { styled } from "../../styles"



export const ButtonContainer = styled('button', {
    height: '3rem',
    width: '3rem',
    border: 'none',
    borderRadius: 6,
    transition: 'filter 0.3s',
    color: 'white',

    

    '&:disabled': {
        opacity: 0.7,
        cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
        cursor: 'pointer',
        filter: 'brightness(1.4)'
    },

    variants: {
        color: {
            gray: {
                backgroundColor: '$gray800',
                svg: {
                    color: '$gray300',
                },  
            },
            green: {
                backgroundColor: '$green500',
                color: 'white',
                svg: {
                    color: '$withe',
                }
            }
        },
    }
})
