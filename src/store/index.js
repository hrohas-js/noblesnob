import {createStore} from 'vuex'

export default createStore({
    state: {
        headerNavLeft: [
            {
                name: 'ДЛЯ НЕГО',
                path: '/catalog'

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
                path: '/registration'

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
                path: '/about/confident'

            },
            {
                name: 'ОФЕРТА',
                path: '/about/oferta'
            },
            {
                name: 'ПАРТНЕРСТВО',
                path: '/about/partnership'
            },
            {
                name: 'ВАКАНСИИ',
                path: '/about/vacancy'
            }
        ],
        FooterNavRight:[
            {
                name: 'о нас',
                path: '/about/aboutUs'

            },
            {
                name: 'доставка и оплата',
                path: '/about/delivery'

            },
            {
                name: 'возврат товара',
                path: '/about/payback'
            },
            {
                name: 'контакты',
                path: '/about/contact'
            }
        ],
        CabinetIn:'registration',
        ForgetPassword:false
    },
    getters: {},
    mutations: {
        SET_DISPLAY_WIDTH(state,innerWidth){
            state.display_width = innerWidth;
        },
        SET_CABINETIN(state,choose){
            state.CabinetIn = choose;
        },
        SET_FORGETPASSWORD(state,boolean){
            state.ForgetPassword = boolean;
        },
    },
    actions: {},
    modules: {}
})
