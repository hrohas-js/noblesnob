import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        headerNavLeft: [
            {
                name: 'ДЛЯ НЕГО',
                path: '/catalog/men/all/null/all-brand/1',
                destination: 'catalog',
                route: 'men'

            },
            {
                name: 'ДЛЯ НЕЕ',
                path: '/catalog/woman/all/null/all-brand/1',
                destination: 'catalog',
                route: 'woman'

            },
            {
                name: 'lifestyle',
                path: '',
                destination: ''
            },
            {
                name: 'Noble merch',
                path: '',
                destination: ''
            },
            {
                name: 'resale',
                path: '',
                destination: ''
            }
        ],
        headerNavRight: [
            {
                name: 'вход',
                path: '/registration',
                destination: 'enter'

            },
            {
                name: 'избранное',
                path: '/wishlist',
                destination: ''
            },
            {
                name: 'корзина',
                path: '/basket',
                destination: ''
            },
            {
                name: 'поиск',
                path: '',
                destination: 'search'
            }
        ],
        FooterNavLeft: [
            {
                name: '2022 noblesnob.com',
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
        FooterNavRight: [
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
                path: '/catalog/men/all/null/all-brand/1',
                route: 'men'
            },
            {
                name: 'для нее',
                path: '/catalog/woman/all/null/all-brand/1',
                route: 'woman'
            },
            {
                name: 'lifestyle',
                path: '',
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
            }
        ],
        display_width: 0,
        new_products: [],
        all_category: sessionStorage.getItem('categories') != null ? JSON.parse(sessionStorage.getItem('categories')) : [],
        catalog: [],
        parent_category: [],
        sub_category: [],
        brand: [],
        pagination: [],
        product: {},
        productsFromSameBrand: [],
        brands: [],
        CabinetIn: 'registration',
        currentCategory: 'Все категории',
        ForgetPassword: false,
        sizeTable: false,
        categoriesMobileShow: false,
        sortMobileShow: false,
        burgerShow: false,
        axiosInstance: null,
        jwt: '',
        follow: '',
        agree: false,
        statuses: [],
        user: sessionStorage.getItem('user_noblesnob') !== null ? JSON.parse(sessionStorage.getItem('user_noblesnob')) : {},
        showSearch: false,
        searchResult: [],
        searchPreload: false,

        cart: [],
        minCost: 1000,
        freeDeliveryCostCart: 3000,

        variations: [],

        wishlist: []
    },
    getters: {
        isUserExist(state) {
            return Object.keys(state.user).length > 0;
        },

        cartLength: state => {
            return state.cart.length
        },
        cartTotal: state => {
            return state.cart.reduce((sum, cur) => {
                return sum + cur.price * cur.quantity
            }, 0)
        }
    },
    mutations: {
        SET_CURRENT_CATEGORY(state, value) {
            state.currentCategory = value;
        },
        SET_DISPLAY_WIDTH(state, innerWidth) {
            state.display_width = innerWidth;
        },
        SET_CABINETIN(state, choose) {
            state.CabinetIn = choose;
        },
        SET_FORGETPASSWORD(state, boolean) {
            state.ForgetPassword = boolean;
        },
        SER_SIZE_TABLE(state, boolean) {
            state.sizeTable = boolean
        },
        SET_CATEGORIES_MOBILE_SHOW(state, show) {
            state.categoriesMobileShow = show;
        },
        SET_SORT_MOBILE_SHOW(state, show) {
            state.sortMobileShow = show;
        },
        SET_BURGER_SHOW(state) {
            state.burgerShow = !state.burgerShow;
        },
        SET_NEW_PRODUCTS(state, item) {
            state.new_products = item;
        },
        SET_CATALOG(state, item) {
            state.catalog = item
        },
        SET_PAGINATION(state, item) {
            state.pagination = [];
            for (let i = 1; i <= item; i++) {
                state.pagination.push(i);
            }
        },
        SET_ALL_CATEGORY(state, item) {
            state.all_category = item;
            if (sessionStorage.getItem('categories') == null) {
                sessionStorage.setItem('categories', JSON.stringify(state.all_category));
            }
        },
        SET_CATEGORY(state, item) {
            let category_id = 0;
            if (item === 'men') {
                category_id = 977;
            }
            if (item === 'woman') {
                category_id = 899;
            }
            state.parent_category = state.all_category.filter(elem => {
                return elem.parent === category_id;
            }).reverse();
        },
        SET_SUB_CATEGORY(state, item) {
            state.sub_category = state.all_category.filter(elem => {
                return elem.parent === item;
            })
        },
        CLEAR_SUB_CATEGORY(state) {
            state.sub_category = [];
        },
        SET_BRAND(state, item) {
            state.brand = item
        },
        SET_AXIOS_INSTANCE(state) {
            state.axiosInstance = axios.create({
                //baseURL: '/wp-json/'
                baseURL: 'https://tdsfashiongroup.com/wp-json/'
            });
        },
        SET_JWT(state, jwt) {
            state.jwt = jwt;
        },
        SET_PRODUCT(state, item) {
            state.product = item;
        },
        SET_PRODUCTS_FROM_SAME_BRAND(state, item) {
            state.productsFromSameBrand = item;
        },
        SET_BRANDS(state, item) {
            state.brands = item;
        },
        SET_FOLLOW(state, item) {
            state.follow = item
        },
        SET_AGREE(state, item) {
            state.agree = item
        },
        SET_PROFILE_MENU(state, obj) {
            state.headerNavRight[0].name = obj.name;
            state.headerNavRight[0].path = obj.path;
        },
        SET_USER(state, item) {
            state.user = item
            console.log(state.user)
        },
        ADD_STATUS(state, item) {
            state.statuses.push(item);
            setTimeout(() => {
                const index = state.statuses.indexOf(item);
                state.statuses.splice(index, 1);
            }, 3000);
        },
        SET_SHOW_SEARCH(state) {
            state.showSearch = !state.showSearch
        },
        SET_SEARCH_RESULT(state, item) {
            state.searchResult = item
        },
        SET_SEARCH_PRELOAD(state, item) {
            state.searchPreload = item
        },
        SET_CART(state, cart) {
            state.cart = cart
        },
        ADD_TO_CART(state, item) {
            state.cart.push(item)
        },
        DELETE_FROM_CART(state, id) {
            state.cart = state.cart.filter(elem => {
                return elem.product_id !== id
            })
        },
        SET_PLUS_QUANTITY(state, id) {
            state.cart.forEach(elem => {
                if (elem.product_id === id) {
                    elem.quantity++
                }
            })
        },
        SET_MINUS_QUANTITY(state, id) {
            state.cart.forEach(elem => {
                if (elem.product_id === id) {
                    elem.quantity--
                }
            })
        },
        SET_VARIATIONS(state, variations) {
            state.variations = []
            variations.forEach(elem => {
                const id = elem.id
                const name = elem.attributes[elem.attributes.length - 1].option
                const price = parseInt(elem.price)
                state.variations.push({
                    id: id,
                    name: name,
                    price: price
                })
            })
        },
        SET_WISHLIST(state, cart) {
            state.wishlist = cart
        },
        ADD_TO_WISHLIST(state, item) {
            state.wishlist.push(item)
        },
        DELETE_FROM_WISHLIST(state, id) {
            state.wishlist = state.wishlist.filter(elem => {
                return elem.id !== id
            })
        }
    },
    actions: {
        async FetchAllBrands({state, commit}) {
            const response = await state.axiosInstance.get(`wc/v3/products/attributes/68/terms`, {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                },
                params: {
                    per_page: 100
                }
            })
            commit('SET_BRANDS', response.data);
        },
        async FetchAllCategory({state, commit}) {
            const response = await state.axiosInstance.get(`wc/v3/products/categories`, {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                },
                params: {
                    per_page: 100
                }
            })
            commit('SET_ALL_CATEGORY', response.data);
        },
        async FetchNewGoods({state, commit}) {
            if (state.jwt !== '') {
                const response = await state.axiosInstance.get('wc/v3/products', {
                    headers: {
                        Authorization: `Bearer ${state.jwt}`,
                    },
                    params: {
                        orderby: 'date',
                        per_page: 4
                    }
                })
                commit('SET_NEW_PRODUCTS', response.data);
            }
        },
        async FetchAuthToken({state, commit, dispatch}, profile) {
            if (sessionStorage.getItem('jwt') != null) {
                commit('SET_JWT', sessionStorage.getItem('jwt'));
                dispatch('FetchNewGoods');
                dispatch('FetchAllCategory');
                dispatch('FetchAllBrands');
            } else {
                await state.axiosInstance.post('jwt-auth/v1/token', profile).then((response) => {
                    sessionStorage.setItem('jwt', response.data.token);
                    commit('SET_JWT', response.data.token);
                    dispatch('FetchNewGoods');
                    dispatch('FetchAllCategory');
                    dispatch('FetchAllBrands');
                });
            }
        },
        async FetchCatalog({state, commit}, post_info) {
            let category_id = 0;
            if (post_info.sex === 'men') {
                category_id = 977;
            }
            if (post_info.sex === 'woman') {
                category_id = 899;
            }
            if (post_info.id !== 'all') {
                category_id = post_info.id;
            }
            console.log(category_id);
            const response = await state.axiosInstance.get('wc/v3/products', {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                },
                params: {
                    per_page: 12,
                    category: category_id,
                    page: post_info.page_number,
                    order: post_info.order,
                    orderby: post_info.orderby,
                    attribute: post_info.attribute,
                    attribute_term: post_info.attribute_term
                }
            })
            commit('SET_CATALOG', response.data);
            console.log(response.data);
        },
        async FetchSearch({state, commit}, search) {
            commit('SET_SEARCH_PRELOAD', true);
            const response = await state.axiosInstance.get('wc/v3/products', {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                },
                params: {
                    search: search
                }
            })
            console.log(response)
            if (response.status === 200) {
                commit('SET_SEARCH_PRELOAD', false);
                commit('SET_SEARCH_RESULT', response.data);
            }
        },
        async FetchPagination({state, commit}, post_info) {
            let category_id = 0;
            if (post_info.sex === 'men') {
                category_id = 977;
            } else {
                category_id = 899;
            }
            if (post_info.id !== 'all') {
                category_id = post_info.id;
            }
            const response = await state.axiosInstance.get(`wc/v3/products/categories/${category_id}`, {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                },
            });
            commit('SET_PAGINATION', Math.ceil(response.data.count / 12));
        },
        async FetchVariations({state, commit}, id){
            const response = await state.axiosInstance.get(`wc/v3/products/${id}/variations`, {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                }
            })
            console.log(response.data)
            commit('SET_VARIATIONS', response.data);
        },
        async FetchProduct({state, commit, dispatch}, url) {
            await state.axiosInstance.get(`wc/v3/products/${url}`, {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                },
            }).then(response => {
                console.log(response.data);
                commit('SET_PRODUCT', response.data);
                const brand_name = response.data.attributes[3].options[0];
                let category_id = 0
                response.data.categories.forEach(item =>{
                    if(item === brand_name){
                        category_id = item;
                    }
                })
                dispatch('FetchVariations', response.data.id)
                dispatch('FetchProductsFromSameBrand',category_id);
            });

        },
        async FetchProductsFromSameBrand({state, commit}, post_info) {
            const response = await state.axiosInstance.get('wc/v3/products', {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                },
                params: {
                    per_page: 5,
                    category: post_info,
                }
            })
            commit('SET_PRODUCTS_FROM_SAME_BRAND', response.data);
        },
        async getCurrentUser({state, commit, dispatch}, id) {
            const response = await state.axiosInstance.get('wp/v2/users/' + id, {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                }
            })
            commit('SET_USER', response.data);
            sessionStorage.setItem('user_noblesnob',JSON.stringify(response.data));
        },
        async updateUser({state, commit}, fields) {
            const response = await state.axiosInstance.post('wp/v2/users/' + state.user.id, fields,{
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                }
            })
            console.log(response)
            if (response.status === 200 && response.statusText === 'OK') {
                commit('SET_USER', response.data);
                sessionStorage.setItem('user_noblesnob',JSON.stringify(response.data));
                commit('ADD_STATUS', 'Изменения сохранены')
            }
        },
        async updateUserPassword({state, commit}, fields) {
            const response = await state.axiosInstance.post('wp/v2/change-password', fields, {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                }
            })
            console.log(response)
            if (JSON.parse(response.data).code === 200) {
                commit('ADD_STATUS', 'Пароль успешно изменен')
            }
        },
        async Login({state, commit, dispatch}, auf) {
            const response = await state.axiosInstance.post('wp/v2/login', {
                username: auf.username,
                password: auf.password
            })
            if (response.status === 200 && response.data !== 'error') {
                dispatch('getCurrentUser', response.data.data.ID);
                dispatch('FetchAuthToken', {
                    username: auf.username,
                    password: auf.password
                });
                commit('ADD_STATUS', 'Авторизация прошла успешно')
                commit('SET_PROFILE_MENU', {
                    name: 'аккаунт',
                    path: '/profile/main'
                })
            }
        },
        async Registration({state, commit}, registration) {
            const username = registration.email.split('@')[0];
            const response = await state.axiosInstance.post('wp/v2/users', {
                username: username,
                name: username,
                first_name: registration.name,
                last_name: registration.surname,
                email: registration.email,
                nickname: username,
                password: registration.password,
                meta: {
                    phone: registration.phone,
                    name: registration.name,
                    surname: registration.surname,
                    email: registration.email
                }
            },{
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                }
            })
            if (response.status === 201 && response.statusText === 'Created') {
                commit('SET_CABINETIN', 'auf');
                commit('ADD_STATUS', 'Регистрация прошла успешно')
            }
        },

        setCart({state, commit}) {
            if (Object.keys(state.user).length > 0 && state.user.meta.cart.length > 0) {
                commit('SET_CART', state.user.meta.cart)
            }
            else if (sessionStorage.getItem('cart') !== null) {
                commit('SET_CART', JSON.parse(sessionStorage.getItem('cart')))
            }
        },
        updateCart({state, dispatch}) {
            if (Object.keys(state.user).length > 0) {
                dispatch('updateUser', {
                    meta: {
                        cart: state.cart
                    }
                })
            }
            else {
                sessionStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        addToCart({commit, dispatch}, item) {
            commit('ADD_TO_CART', item)
            dispatch('updateCart')
            commit('ADD_STATUS', 'Товар добавлен в корзину')
        },
        deleteFromCart({commit, dispatch}, id) {
            commit('DELETE_FROM_CART', id)
            dispatch('updateCart')
            commit('ADD_STATUS', 'Товар удален из корзины')
        },
        setPlusQuantity({commit, dispatch}, id) {
            commit('SET_PLUS_QUANTITY', id)
            dispatch('updateCart')
        },
        setMinusQuantity({commit, dispatch}, id) {
            commit('SET_MINUS_QUANTITY', id)
            dispatch('updateCart')
        },

        setWishList({state, commit}) {
            if (Object.keys(state.user).length > 0 && state.user.meta.wishlist.length > 0) {
                commit('SET_WISHLIST', state.user.meta.wishlist)
            }
            else if (sessionStorage.getItem('wishlist') !== null) {
                commit('SET_WISHLIST', JSON.parse(sessionStorage.getItem('wishlist')))
            }
        },
        updateWishList({state, dispatch}) {
            if (Object.keys(state.user).length > 0) {
                dispatch('updateUser', {
                    meta: {
                        wishlist: state.wishlist
                    }
                })
            }
            else {
                sessionStorage.setItem('wishlist', JSON.stringify(state.cart))
            }
        },
        addToWishList({commit, dispatch}, item) {
            commit('ADD_TO_WISHLIST', item)
            dispatch('updateWishList')
            commit('ADD_STATUS', 'Товар добавлен в избранное')
        },
        deleteFromWishList({commit, dispatch}, id) {
            commit('DELETE_FROM_WISHLIST', id)
            dispatch('updateWishList')
            commit('ADD_STATUS', 'Товар удален из избранного')
        },
        async createOrderComment({rootState, commit}, commentInfo) {
            await rootState.axiosInstance.post('wc/v3/orders/'+ commentInfo.id +'/notes/?consumer_key=ck_18ccd29743dd71a690f7374a831875c48e45ea6f&consumer_secret=cs_5eb4190e1f1d1e79419184928cad25fadaf676da', commentInfo.data)
        },
        sendOrder({commit}, order) {
            commit('ADD_STATUS', 'Заказ в обработке')
        },
        async ResetPassword({state, commit}, email) {
            const response = await state.axiosInstance.post('bdpwr/v1/reset-password', {
                email: email
            })
            console.log(response)
        }
    }
})
