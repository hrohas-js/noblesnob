import {createStore} from 'vuex'
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
                destination: ''
            }
        ],
        FooterNavLeft: [
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
                path: '/catalog',
                route: 'men'
            },
            {
                name: 'для нее',
                path: '',
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
            },
            {
                name: 'выбрать язык',
                path: ''
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
        agree: false
    },
    mutations: {
        SET_CURRENT_CATEGORY(state, value) {
            state.curretnCategory = value;
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
        SET_categories_MOBILE_SHOW(state, show) {
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
            if (item == 'men') {
                category_id = 786;
            } else {
                category_id = 794;
            }
            state.parent_category = state.all_category.filter(elem => {
                return elem.parent == category_id;
            }).reverse();
        },
        SET_SUB_CATEGORY(state, item) {
            state.sub_category = state.all_category.filter(elem => {
                return elem.parent == item;
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
                baseURL: '/wp-json/'
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
        }
    },
    actions: {
        async FetchAllBrands({state, commit}) {
            const response = await state.axiosInstance.get(`wc/v3/products/attributes/57/terms`, {
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
            if (state.jwt != '') {
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
        async FetchAuthToken({state, commit, dispatch}) {
            if (sessionStorage.getItem('jwt') != null) {
                commit('SET_JWT', sessionStorage.getItem('jwt'));
                dispatch('FetchNewGoods');
                dispatch('FetchAllCategory');
                dispatch('FetchAllBrands');
            } else {
                await state.axiosInstance.post('jwt-auth/v1/token', {
                    username: 'noblesnobwp',
                    password: 'Festachubko1717'
                }).then((response) => {
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
            if (post_info.sex == 'men') {
                category_id = 786;
            } else {
                category_id = 794;
            }
            if (post_info.id != 'all') {
                category_id = post_info.id;
            }
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
        },
        async FetchPagination({state, commit}, post_info) {
            let category_id = 0;
            if (post_info.sex == 'men') {
                category_id = 786;
            } else {
                category_id = 794;
            }
            if (post_info.id != 'all') {
                category_id = post_info.id;
            }
            const response = await state.axiosInstance.get(`wc/v3/products/categories/${category_id}`, {
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                },
            });
            commit('SET_PAGINATION', Math.ceil(response.data.count / 12));
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
                    if(item == brand_name){
                        category_id = item;
                    }
                })
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
        async Login({state, commit}) {
            const response = await state.axiosInstance.post('wp/v2/login', {
                username: '',
                password: ''
            })
            console.log(response)
        },
        async Registration({state}, registration) {
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
                    surname: registration.surname
                }
            },{
                headers: {
                    Authorization: `Bearer ${state.jwt}`,
                }
            })
            console.log(response)
        }
    },
    modules: {}
})
