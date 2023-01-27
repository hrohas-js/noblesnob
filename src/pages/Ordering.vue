<template>
  <div class="ordering container">
    <Header />
    <main>
      <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
      <div class="ordering__container">
        <div class="ordering__address-delivery">
          <p>Адресс доставки</p>
          <div class="__address-delivery__item address">
            <div v-if="$store.state.display_width > 768">
              <div class="__item">
                <input
                    type="text"
                    placeholder="ИМЯ"
                    v-model="address.first_name"
                    @input="address.first_name = address.first_name.replace(/[^ a-zа-яё]/ui,'')"
                />
                <input
                    type="text"
                    placeholder="CТРАНА/РЕСПУБЛИКА"
                    v-model="address.country"
                    @input="address.country = address.country.replace(/[^ a-zа-яё]/ui,'')"
                />
                <input
                    type="text"
                    placeholder="ГОРОД"
                    v-model="address.city"
                    @input="address.city = address.city.replace(/[^ a-zа-яё]/ui,'')"
                />
                <input
                    type="text"
                    placeholder="ИНДЕКС/ZIP"
                    v-model="address.postcode"
                />
                <input
                    type="email"
                    placeholder="EMAIL"
                    v-model="address.email"
                    @blur="emailValidate(address.email)"
                />
                <div class="__sub-item">
                  <p>КОММЕНТАРИИ К ЗАКАЗУ</p>
                  <input type="text" value="">
                  <div class="address__checkbox custom__cross">
                    <input type="checkbox" id="address">
                    <label for="address">Использовать в качестве платежного адреса</label>
                  </div>
                </div>
              </div>
              <div class="__item">
                <input
                    type="text"
                    placeholder="ФАМИЛИЯ"
                    v-model="address.last_name"
                    @input="address.last_name = address.last_name.replace(/[^ a-zа-яё]/ui,'')"
                />
                <input
                    type="text"
                    placeholder="РЕГИОН/ОБЛАСТЬ"
                    v-model="address.state"
                    @input="address.state = address.state.replace(/[^ a-zа-яё]/ui,'')"
                />
                <input
                    type="text"
                    placeholder="УЛИЦА,ДОМ,КОРПУС,КВАРТИРА"
                    v-model="address.address_1"
                    @input="address.address_1 = address.address_1.replace(/[^ a-zа-яё]/ui,'')"
                />
                <input
                    type="text"
                    placeholder="ТЕЛЕФОН"
                    v-model="address.phone"
                />
              </div>
            </div>
            <div v-else>
              <input
                  type="text"
                  placeholder="ИМЯ"
                  v-model="address.first_name"
                  @input="address.first_name = address.first_name.replace(/[^ a-zа-яё]/ui,'')"
              />
              <input
                  type="text"
                  placeholder="ФАМИЛИЯ"
                  v-model="address.last_name"
                  @input="address.last_name = address.last_name.replace(/[^ a-zа-яё]/ui,'')"
              />
              <input
                  type="text"
                  placeholder="EMAIL"
                  v-model="address.email"
                  @blur="emailValidate(address.email)"
              />
              <input
                  type="text"
                  placeholder="ТЕЛЕФОН"
                  v-model="address.phone"
              />
              <input
                  type="text"
                  placeholder="CТРАНА/РЕСПУБЛИКА"
                  v-model="address.country"
                  @input="address.country = address.country.replace(/[^ a-zа-яё]/ui,'')"
              />
              <input
                  type="text"
                  placeholder="РЕГИОН/ОБЛАСТЬ"
                  v-model="address.state"
                  @input="address.state = address.state.replace(/[^ a-zа-яё]/ui,'')"
              />
              <input
                  type="text"
                  placeholder="ГОРОД"
                  v-model="address.city"
                  @input="address.city = address.city.replace(/[^ a-zа-яё]/ui,'')"
              />
              <input
                  type="text"
                  placeholder="УЛИЦА,ДОМ,КОРПУС,КВАРТИРА"
                  v-model="address.address_1"
                  @input="address.address_1 = address.address_1.replace(/[^ a-zа-яё]/ui,'')"
              />
              <input
                  type="text"
                  placeholder="ИНДЕКС/ZIP"
                  v-model="address.postcode"
              />
              <div class="__sub-item">
                <p>КОММЕНТАРИИ К ЗАКАЗУ</p>
                <input type="text" value="">
                <div class="address__checkbox custom__cross">
                  <input type="checkbox" id="address_use">
                  <label for="address">Использовать в качестве платежного адреса</label>
                </div>
              </div>
            </div>
          </div>
          <div class="ordering__delivery-option">
            <div class="__row">
              <div class="__coll">СПОСОБ ДОСТАВКИ</div>
              <div class="__coll" v-if="$store.state.display_width > 1024">ЦЕНА</div>
            </div>
            <div class="__address-delivery__item">
              <div class="__row">
                <div class="__coll custom__grin-box">
                  <input type="radio" name="delivery" id="sdek">
                  <label for="sdek">СДЭК</label>
                </div>
                <div class="__coll">
                  <p>расчитывается</p>
                </div>
              </div>
              <div class="__row">
                <div class="__coll custom__grin-box">
                  <input type="radio" name="delivery" id="pickUp">
                  <label for="pickUp">САМОВЫВОЗ</label>
                </div>
                <div class="__coll">
                  <p>₽ 0</p>
                </div>
              </div>
            </div>
          </div>
          <div class="ordering__sub-address-delivery">
            <p>АДРЕС ДОСТАВКИ</p>
            <div class="__you-contact">
              <p>{{ address.first_name }} {{ address.last_name }}</p>
              <p>{{ address.address_1 }}</p>
              <p>{{ address.city }} {{ address.postcode }} {{ address.country }}</p>
            </div>
          </div>
        </div>
        <div class="ordering__you-orders">
          <p>Ваш заказ</p>
          <div class="__you-orders__table">
            <div v-for="item in cart" :key="item.product_id" class="__row">
              <div class="__coll">
                <img src="@/assets/temp/tempJpg.jpg" alt="some photo">
              </div>
              <div class="__coll">
                <ul>
                  <li>
                    <p>
                      {{ item.brand }}
                    </p>
                    <p>
                      {{ item.name }}
                    </p>
                  </li>
                  <li class="change-size">
                    <p>
                      РАЗМЕР: {{ item.current_size }}
                    </p>
                    <p style="cursor: pointer" @click="goToProduct(item.product_id)">
                      изменить размер
                    </p>
                  </li>
                  <li>
                    <p>
                      {{ item.sku }}
                    </p>
                  </li>
                </ul>
              </div>
              <div class="__coll">
                <p>
                  ₽ {{ item.price * item.quantity }}
                </p>
              </div>
            </div>
          </div>
          <div class="__you-orders__description">
            <ul>
              <li>
                <p>
                  СТРАНА / РЕГИОН : РОССИЯ
                </p>
              </li>
              <li>
                <p>СУММА ЗАКАЗА</p>
                <p>₽ {{ total }} </p>
              </li>
              <li>
                <p>ДОСТАВКА</p>
                <p>₽ {{ deliveryCost }} </p>
              </li>
              <li>
                <p>ИТОГО</p>
                <p>₽ {{ total + deliveryCost }} </p>
              </li>
            </ul>
          </div>
          <div class="__you-orders__button" @click="takeOrder">
            <input type="submit" value="ОПЛАТИТЬ">
          </div>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Ordering',
  components: {Footer, Header},
  data: () => ({
    address: {
      first_name: '',
      last_name: '',
      city: '',
      postcode: '',
      address_1: '',
      country: '',
      email: '',
      state: '',
      phone: ''
    },
    deliveryCost: 0,
    emailValidation: true
  }),
  computed: {
    cart() {
      return this.$store.state.cart
    },
    total() {
      return this.$store.getters['cartTotal']
    },
    isEmptyAddress() {
      let flag = false
      Object.values(this.address).forEach(elem => {
        if (elem === '') {
          flag = true
        }
      })
      return flag
    }
  },
  mounted() {
    if (sessionStorage.getItem('user_noblesnob') !== null && this.$store.state.user.meta.address[0].is_default) {
      const obj = this.$store.state.user.meta.address[0]
      this.address.first_name = obj.first_name
      this.address.last_name = obj.last_name
      this.address.city = obj.city
      this.address.country = obj.country
      this.address.state = obj.state
      this.address.address_1 = obj.address_1
      this.address.postcode = obj.postcode
      this.address.phone = obj.phone
      this.address.email = this.$store.state.user.meta.email[0]
    }
  },
  methods: {
    goToProduct(id) {
      this.$router.push({
        name: 'Product',
        params: {
          id: id
        }
      })
    },
    emailValidate(value) {
      if (value !== '') {
        this.emailValidation = !!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
      }
    },
    takeOrder() {
      if (!this.isEmptyAddress) {
        let obj = {
          payment_method: 'bacs',
          payment_method_title: 'Direct Bank Transfer',
          set_paid: true,
          billing: this.address,
          shipping: this.address,
          line_items: this.cart,
          shipping_lines: [
            {
              method_id: 'flat_rate',
              method_title: 'Flat Rate',
              total: '10.00'
            }
          ]
        }
        this.$store.dispatch('sendOrder', obj)
      }
    }
  }
}
</script>

<style scoped lang="scss">
main {
  padding: rem(50) rem(20) rem(215) rem(80);
}

h1 {
  font-family: "Partner Condensed Bold", sans-serif;
  font-size: rem(18);
  text-transform: uppercase;
}

p {
  font-size: rem(13);
  text-transform: uppercase;
}

input {
  width: 100%;
  padding: rem(16);
  margin-bottom: rem(27);

  &:last-child {
    margin-bottom: 0;
  }
}

input[value] {
  color: #C4C4C4;
  font-size: 13px;
}

.ordering__container {
  display: flex;
  gap: rem(198);
  margin-top: rem(45);
}

.ordering__address-delivery {
  flex: 1 1 70%;
}

.__address-delivery__item {
  border-top: 1px solid;
}

.address {
  display: flex;
  justify-content: space-between;
  gap: rem(42);
  margin-top: rem(18);
  padding-top: rem(27);

  .__sub-item {
    margin-top: rem(32);

    p {
      margin-bottom: rem(15);
    }

    input[type='text'] {
      margin-bottom: rem(42);
    }

    .address__checkbox {
      display: flex;
      align-items: center;

      input[type='checkbox'] {
        width: auto;
        margin-bottom: 0;
      }
    }
  }
}

.ordering__sub-address-delivery {
  margin-top: rem(40);

  & > p {
    margin-bottom: rem(23);
  }
}

.__you-contact {
  border-top: 1px solid;
  padding-top: rem(23);

  p {
    font-style: rem(13);
    margin-bottom: rem(9);
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.ordering__delivery-option {
  margin-top: rem(55);
}

.ordering__you-orders {
  flex: 1 1 30%
}

.__row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.__coll {
  padding: rem(23) 0;
}

.__you-orders__table {
  height: rem(200);
  overflow: auto;

  .__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid;
    margin-top: rem(18);

    .__coll:last-child {
      justify-self: end;
    }
  }

  .change-size {
    p:last-child {
      font-size: rem(10);
    }
  }

  li {
    margin-bottom: rem(17);

    p {
      font-size: rem(14);
    }
  }
}

.__you-orders__description {
  li {
    display: flex;
    justify-content: space-between;
    padding: rem(17) 0;
    border-top: 1px solid;

    &:first-child {
      border-top: none;
    }
  }
}

.__you-orders__button {
  input[type='submit'] {
    border: none;
    background-color: #3adc9c;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }
}

@media (max-width: em(1024, 16)) {
  .ordering__container {
    display: block;
  }
  main {
    padding: 0;
  }
  .ordering__delivery-option {
    .__address-delivery__item {
      .__row {
        .__coll:last-child {
          text-align: right;
        }
      }
    }
  }
}
</style>
