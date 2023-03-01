import { HomeContainer, ListCard, ListContainer } from './styles'

import { CardItem } from './components/CardItem'
import { Banner } from './components/Banner'
import { coffeeList } from '../../utils/list-coffee'

export function Home() {
    return (
        <HomeContainer>
            <Banner />

            <ListContainer>
                <div>
                    <h2>Nossos cafés</h2>
                </div>

                <ListCard>
                    {coffeeList.map((item) => {
                        return <CardItem key={item.id} coffee={item} />
                    })}
                </ListCard>
            </ListContainer>
        </HomeContainer>
    )
}
