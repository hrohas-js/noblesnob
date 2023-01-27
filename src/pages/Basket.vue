<template>
  <div class="basket container">
    <Header/>
    <main>
      <div class="basket__container">
        <div class="__item">
          <h1>
            Корзина
          </h1>
          <div
              v-if="cart.length > 0"
              class="__basket-table"
          >
            <div
                v-for="item in cart"
                :key="item.product_id"
                class="__row"
            >
              <div class="__coll __coll__picture">
                <img
                    src="@/assets/temp/tempJpg.jpg"
                    alt="some photo"
                />
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
                  <li class="__coll__size">
                    <p>
                      размер:{{ item.current_size }}
                    </p>
                    <p
                        style="cursor: pointer"
                        @click="goToProduct(item.product_id)"
                    >
                      изменить
                    </p>
                  </li>
                  <li>
                    <p>
                      {{ item.sku }}
                    </p>
                  </li>
                  <li class="__coll__count">
                    <p>
                      КОЛЛИЧЕСТВО:
                    </p>
                    <div class="__count__item">
                      {{ item.quantity }}
                      <input type="submit" value="+" @click="plusQuantity(item.product_id)"/>
                      <input type="submit" value="-" @click="minusQuantity(item.quantity, item.product_id)"/>
                    </div>
                    <!--<p class="little-count">1 экземпляр!</p>-->
                  </li>
                  <li
                      class="__coll__go-wishlist"
                      @click="addToWishlist(item)"
                  >
                    <p>
                      переместить в избранное
                    </p>
                  </li>
                </ul>
              </div>
              <div class="__coll close-mobile">
                <p>
                  {{ item.price * item.quantity }} RUB
                </p>
                <p @click="deleteFromCart(item.product_id)">
                  УДАЛИТЬ
                </p>
              </div>
              <div
                  v-if="$store.state.display_width > 768"
                  class="__coll dell-item"
              >
                <img
                    src="@/assets/svg/close__button.svg"
                    alt="close button"
                    @click="deleteFromCart(item.product_id)"
                />
              </div>
            </div>
            <div class="__row _total-row">
              <div class="__coll grid-start">
                <ul class="cart-totals">
                  <li>
                    <p>
                      ИТОГО
                    </p>
                    <p>
                      ДОСТАВКА
                    </p>
                  </li>
                  <li>
                    <p class="_bold-total">
                      Всего
                    </p>
                  </li>
                </ul>
              </div>
              <div class="__coll _right-total">
                <ul>
                  <li>
                    <p>
                      ₽ {{ total }} RUB
                    </p>
                    <p>
                      Рассчитывается при оформлении заказа
                    </p>
                  </li>
                  <li>
                    <p class="_bold-total">
                      ₽ {{ total }} RUB
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
              v-if="cart.length === 0"
              class="cart-empty"
          >
            корзина пуста
          </div>
        </div>
        <div
            v-if="cart.length > 0"
            class="__item"
        >
          <div class="__action-order__description">
            <h2>
              ОФОРМЛЕНИЕ ЗАКАЗА
            </h2>
            <p>
              введите адрес электронной почты, чтобы войти в систему либо продолжайте покупки без авторизации
            </p>
            <p>
              <router-link to="/about/payback">
                Возврат товара
              </router-link>
            </p>
            <p>
              <router-link to="/about/confident">
                конфиденциальность
              </router-link>
            </p>
          </div>
          <div class="__action-order__form">
            <input type="text" placeholder="EMAIL">
            <router-link to="/ordering">
              <input type="submit" value="ПЕРЕЙТИ К ОПЛАТЕ"/>
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Basket',
  components: {Footer, Header},
  computed: {
    cart() {
      console.log(this.$store.state.cart)
      return this.$store.state.cart
    },
    total() {
      return this.$store.getters['cartTotal']
    },
    length() {
      return this.$store.getters['cartLength']
    }
  },
  methods: {
    deleteFromCart(id) {
      this.$store.dispatch('deleteFromCart', id)
    },
    plusQuantity(id) {
      this.$store.dispatch('setPlusQuantity', id)
    },
    minusQuantity(quantity, id) {
      if (quantity > 1) {
        this.$store.dispatch('setMinusQuantity', id)
      }
    },
    addToWishlist(item) {
      this.$store.dispatch('addToWishList', {
        id: item.product_id,
        name: item.name,
        price: parseInt(item.price),
        brand: item.brand
      })
    },
    goToProduct(id) {
      this.$router.push({
        name: 'Product',
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.basket__container {
  display: flex;
  gap: rem(150)
}

.__item, .__basket-table {
  margin-top: rem(118);
}

.__item:first-child {
  flex: 1 1 75%;
}

.__item:last-child {
  flex: 1 1 25%;
}

.__row {
  display: grid;
  grid-template-columns: rem(133) 1fr 0.5fr 0.1fr;
  grid-gap: rem(40);
  border-bottom: 1px solid;

  &:last-child {
    border-bottom: none;
  }

  p {
    text-transform: uppercase;
  }
}

.__coll {
  padding: rem(20) 0;

  li {
    margin-bottom: rem(16);

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.__coll__picture {
  align-self: center;
}

.__coll__size, .__coll__count {
  display: flex;
  gap: rem(10);

  p:last-child {
    text-decoration: underline;
  }
}

.__count__item {
  margin-left: 8px;
  position: relative;

  input[type='submit'] {
    cursor: pointer;
    position: absolute;
    background-color: #fff;
    border: none;
    top: 0;
  }

  input[type='submit']:first-child {
    left: rem(-12);
    top: rem(1);
  }

  input[type='submit']:last-child {
    right: rem(-6);
  }
}

.cart-empty {
  text-align: center;
  text-transform: uppercase;
  font-size: rem(24);
}

.dell-item {
  justify-self: end;
  cursor: pointer;
}

.little-count {
  color: #7B7B7B;
  text-transform: lowercase !important;
}

.grid-start {
  grid-column-start: 2;
}

.cart-totals {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.__action-order__description {
  h2 {
    font-family: "Partner Condensed Bold", sans-serif;
    font-size: rem(18);
  }

  p {
    font-size: rem(14);
    text-transform: uppercase;
    margin-top: rem(30);
  }
}

.__action-order__form {
  margin-top: rem(30);

  p {
    font-size: rem(14);
  }

  input {
    width: 100%;
    padding: 0 rem(20);
    height: rem(32);
  }

  input[type='submit'] {
    border: none;
    background-color: #3ADD9D;
    color: white;
    margin-top: rem(20);
    cursor: pointer;
  }
}

@media (max-width: em(1024, 16)) {
  .basket__container {
    flex-direction: column;
    gap: rem(30);

    .__item, .__basket-table {
      margin-top: rem(30);
    }

    .__basket-table {
      border-top: 1px solid black;
    }
  }
}

@media (max-width: em(768, 16)) {
  h1 {
    text-transform: uppercase;
  }
  p {
    font-size: rem(8);
  }
  .__row {
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: rem(20);
  }
  ._total-row {
    grid-template-columns: 1fr 2fr 2fr;
  }
  ._right-total {
    text-align: right;
  }
  ._bold-total {
    font-weight: bold;
  }
  .close-mobile {
    display: flex;
    justify-content: space-between;

    p {
      text-align: right;
    }

    img {
      height: rem(30);
    }
  }
  .__coll__count {
    margin-bottom: 0 !important;

    .__count__item {
      width: fit-content;
    }
  }
  .__action-order__description {
    h2 {
      font-size: rem(12);
    }

    p {
      font-size: rem(9);
      text-transform: uppercase;
      margin-top: rem(12);
    }

    a {
      text-decoration: underline;
    }
  }
}

@media (max-width: em(428, 16)) {
  .close-mobile {
    flex-direction: column;
  }
}
</style>
