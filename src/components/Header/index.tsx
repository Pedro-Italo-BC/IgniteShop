import logoImg from '../../assets/Logo.svg'

import Image from 'next/image'
import Link from 'next/link'

import { HeaderContainer } from './styles'

import { CheckoutSection } from '../CheckoutSection'
import { useRouter } from 'next/router'

export function Header() {

    const {pathname} = useRouter()

    const inSuccessPage = pathname !== '/success'

    return(
        <HeaderContainer>
            <Link href={'/'}>
             <Image src={logoImg} alt="" />
            </Link>

            {inSuccessPage && 
                <CheckoutSection/>
            }
        </HeaderContainer>
    ) 
}