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
                path: '/wishlist'
            },
            {
                name: 'корзина',
                path: '/basket'
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
                id:'1',
                description:'Цветочный принт',
                price:'15 000 RUB'
            },
            {
                picture:'https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/goodsItems/shoose.jpg',
                name:'Melampo',
                id:'2',
                description:'Цветочный принт',
                price:'15 000 RUB'
            },
            {
                picture:'https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/goodsItems/jacket.jpg',
                name:'Melampo',
                id:'3',
                description:'Цветочный принт',
                price:'15 000 RUB'
            },
            {
                picture:' https://u1600792.isp.regruhosting.ru/NOBLESNOB__TEMP/goodsItems/sandals.jpg',
                name:'Melampo',
                id:'4',
                description:'Цветочный принт',
                price:'15 000 RUB'
            },
        ],
        FooterNavLeft:[
            {
                name: '2021 noblesnob.com',
                path: '/'

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
        burger: [
            {
                name: 'для него',
                path: '/catalog'
            },
            {
                name: 'для нее',
                path: ''
            },
            {
                name: 'lifestyle',
                path: ''
            },
            {
                name: 'noble merch',
                path: ''
            },
            {
                name: 'resale',
                path: ''
            },
            {
                name: 'избранное',
                path: '/wishlist'
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
                name: 'о нас',
                path: '/about/aboutUs'
            },
            {
                name: 'контакты',
                path: '/about/contact'
            },
            {
                name: 'конфиденциальность',
                path: ''
            },
            {
                name: 'партнерство',
                path: '/about/partnership'
            },
            {
                name: 'оферта',
                path: '/about/oferta'
            },
            {
                name: 'карьера',
                path: '/about/vacancy'
            },
            {
                name: 'выбрать язык',
                path: ''
            }
        ],
        CabinetIn:'registration',
        ForgetPassword:false,
        sizeTable:false,
        categorysMobileShow: false,
        sortMobileShow: false,
        burgerShow: false
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
        SER_SIZE_TABLE(state,boolean){
            state.sizeTable = boolean
        },
        SET_CATEGORYS_MOBILE_SHOW(state, show) {
            state.categorysMobileShow = show;
        },
        SET_SORT_MOBILE_SHOW(state, show) {
            state.sortMobileShow = show;
        },
        SET_BURGER_SHOW(state) {
            state.burgerShow = !state.burgerShow;
        }
    },
    actions: {},
    modules: {}
})
