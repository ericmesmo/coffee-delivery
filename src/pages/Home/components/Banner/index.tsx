import {
    BannerContainer,
    ImageContainer,
    ItemsContainer,
    TitleContainer,
} from './styles'

import banner from '../../../../assets/coffe-delivery-banner.png'

import IconCart from '../../../../assets/icon-cart.svg'
import IconTimer from '../../../../assets/icon-timer.svg'
import IconPackege from '../../../../assets/icon-packege.svg'
import IconCoffee from '../../../../assets/icon-coffee.svg'

export function Banner() {
    return (
        <BannerContainer>
            <div>
                <TitleContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <span>
                        Com o Coffee Delivery você recebe o seu café onde
                        estiver, a qualquer hora
                    </span>
                </TitleContainer>
                <ItemsContainer>
                    <div>
                        <span>
                            <img src={IconCart} alt="" />
                            Compra simples e segura
                        </span>
                        <span>
                            <img src={IconTimer} alt="" />
                            Entrega rápida e rastreada
                        </span>
                    </div>
                    <div>
                        <span>
                            <img src={IconPackege} alt="" />
                            Embalagem mantém o café intacto
                        </span>
                        <span>
                            <img src={IconCoffee} alt="" />O café chega
                            fresquinho até você
                        </span>
                    </div>
                </ItemsContainer>
            </div>
            <ImageContainer>
                <img src={banner} alt="" />
            </ImageContainer>
        </BannerContainer>
    )
}
