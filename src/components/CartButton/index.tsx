import { ButtonContainer } from "./styles"
import {Handbag} from 'phosphor-react'
import { ComponentProps } from "react"

type CartButtonType = ComponentProps<typeof ButtonContainer>

export function CartButton({...rest}: CartButtonType) {
    return(
        <ButtonContainer {...rest}>
            <Handbag size={30} weight='bold'/>
        </ButtonContainer>
    )
}