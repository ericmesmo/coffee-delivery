import { Coffee } from '../reducers/cart/reducer'

export const coffeeList: Coffee[] = [
    {
        id: 1,
        name: 'Expresso tradicional',
        subtitle: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
        tags: ['tradicional'],
        img: './expresso.png',
    },
    {
        id: 2,
        name: 'Expresso Americano',
        subtitle: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.9,
        tags: ['tradicional'],
        img: './americano.png',
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        subtitle: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
        tags: ['tradicional'],
        img: './expresso-cremoso.png',
    },
    {
        id: 4,
        name: 'Expresso Gelado',
        subtitle: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9,
        tags: ['tradicional', 'gelado'],
        img: './cafe-gelado.png',
    },
    {
        id: 5,
        name: 'Café com Leite',
        subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        img: './cafe-com-leite.png',
    },
    {
        id: 6,
        name: 'Latte',
        subtitle:
            'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        img: './latte.png',
    },
    {
        id: 7,
        name: 'Capuccino',
        subtitle:
            'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        img: './capuccino.png',
    },
    {
        id: 8,
        name: 'Macchiato',
        subtitle:
            'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        img: './macchiato.png',
    },
    {
        id: 9,
        name: 'Mocaccino',
        subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        img: './mocaccino.png',
    },
    {
        id: 10,
        name: 'Chocolate Quente',
        subtitle:
            'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.9,
        tags: ['especial', 'com leite'],
        img: './chocolate-quente.png',
    },
    {
        id: 11,
        name: 'Cubano',
        subtitle:
            'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.9,
        tags: ['especial', 'alcoólico', 'gelado'],
        img: './cubano.png',
    },
    {
        id: 12,
        name: 'Havaiano',
        subtitle: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.9,
        tags: ['especial'],
        img: './havaiano.png',
    },
    {
        id: 13,
        name: 'Árabe',
        subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.9,
        tags: ['especial'],
        img: './arabe.png',
    },
    {
        id: 14,
        name: 'Irlandês',
        subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.9,
        tags: ['especial', 'alcoólico'],
        img: './irlandes.png',
    },
]
