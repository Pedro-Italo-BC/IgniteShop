import { ProductType } from "../contexts/checkoutContext"
import { priceFormat } from "./priceFormat"

export function sumPrice ( object: ProductType[] ) {
    const finalPrice = object.reduce((acc, cur) => {
        return acc + cur.price
    }, 0)

    return priceFormat(finalPrice)
}