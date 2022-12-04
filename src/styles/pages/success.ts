import {styled} from '..'

export const SuccessContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    height: 656,

    h1: {
        fontSize: '$2xl',
        color: '$gray100'
    },
    p: {
        fontSize: '$xl',
        color: '$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop: '2rem',
        lineHeight: 1.4
    },

    a: {
        marginTop: '5rem',
        display: 'block',
        color: '$green500',
        fontsize: '$lg',
        transition: 'color .3s',
        textDecoration: 'none',
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300'
        }
    },

    '& > div': {
        display: 'flex',
        justifyContent: 'center'
    }
})

export const ImageContainer = styled('div', {
    width: '8.75rem',
    maxWidth: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '50%',
    padding: '0.25rem',
    marginTop: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },

    '& + div': {
        marginLeft: 'calc(-140px /2)'
    }
})