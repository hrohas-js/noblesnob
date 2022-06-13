import {createStore} from 'vuex'

export default createStore({
    state: {
        headerNavLeft: [
            {
                name: 'ДЛЯ НЕГО',
                path: ''

            },
            {
                name: 'ДЛЯ НЕЕ',
                path: ''

            },
            {
                name: 'lifestyle',
                path: ''
            },
            {
                name: 'Noble merch',
                path: ''
            },
            {
                name: 'resale',
                path: ''
            }
        ],
        headerNavRight: [
            {
                name: 'RU',
                path: ''

            },
            {
                name: 'вход',
                path: ''

            },
            {
                name: 'избранное',
                path: ''
            },
            {
                name: 'корзина',
                path: ''
            },
            {
                name: 'поиск',
                path: ''
            }
        ],
        display_width: 0,
        goods:[
            {
                picture:'https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/goodsItems/suit.jpg',
                name:'Melampo',
                description:'Цветочный принт',
                price:'15 000 RUB'
            },
            {
                picture:'https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/goodsItems/shoose.jpg',
                name:'Melampo',
                description:'Цветочный принт',
                price:'15 000 RUB'
            },
            {
                picture:'https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/goodsItems/jacket.jpg',
                name:'Melampo',
                description:'Цветочный принт',
                price:'15 000 RUB'
            },
            {
                picture:' https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/goodsItems/sandals.jpg',
                name:'Melampo',
                description:'Цветочный принт',
                price:'15 000 RUB'
            },
        ],
        FooterNavLeft:[
            {
                name: '2021 noblesnob.com',
                path: ''

            },
            {
                name: 'конфидециальность',
                path: ''

            },
            {
                name: 'ОФЕРТА',
                path: ''
            },
            {
                name: 'ПАРТНЕРСТВО',
                path: ''
            },
            {
                name: 'ВАКАНСИИ',
                path: ''
            }
        ],
        FooterNavRight:[
            {
                name: 'о нас',
                path: ''

            },
            {
                name: 'доставка и оплата',
                path: ''

            },
            {
                name: 'возврат товара',
                path: ''
            },
            {
                name: 'контакты',
                path: ''
            }
        ],
    },
    getters: {},
    mutations: {
        SET_DISPLAY_WIDTH(state,innerWidth){
            state.display_width = innerWidth;
        }
    },
    actions: {},
    modules: {}
})
