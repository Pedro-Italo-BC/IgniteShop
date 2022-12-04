import { ItemContainer, ItemContent} from './styles'

export function SkeletonItem() {

    return (
            <ItemContainer className='keen-slider__slide'>
                <ItemContent/>

                <div>
                <ItemContent/>
                <ItemContent/>
                </div>
            </ItemContainer>
    )
}