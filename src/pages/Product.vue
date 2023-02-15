<template>
  <div class="product container">
    <Header />
    <Transition name="fade">
      <SizeTable v-if="$store.state.sizeTable" />
    </Transition>
    <main>
      <div class="product__container">
        <ul class="product__description">
          <li v-if="$store.state.display_width >= 768">
            <h2>
              {{ brand }}
            </h2>
            <div>
              {{ name }}
            </div>
          </li>
          <li>
            <div v-html="description" />
          </li>
          <li>
            <p>
              Страна производства: {{ prodCountry }}
            </p>
            <p>
              Состав: {{ props }}
            </p>
          </li>
          <li>
            <p>
              Цвет: {{ color }}
            </p>
          </li>
          <li>
            <p>
              {{ article }}
            </p>
          </li>
        </ul>
        <div
            v-if="$store.state.display_width > 768"
            class="product__good"
        >
          <div
              v-for="item in images"
              :key="item.id"
          >
            <img
                :src="item.src"
                :alt="item.name"
            />
          </div>
        </div>
        <Swiper
            v-else
            :slides-per-view="1"
            class="product__good"
        >
          <SwiperSlide
              v-for="item in images"
              :key="item.id"
          >
            <img
                :src="item.src"
                :alt="item.name"
            />
          </SwiperSlide>
        </Swiper>
        <div class="product__choose-size">
          <div
              v-if="$store.state.display_width <= 768"
              class="mobile-description"
          >
            <div>
              <h2>
                {{ brand }}
              </h2>
              <p>
                {{ name }}
              </p>
            </div>
            <p>
              {{ price }}&nbsp;₽
            </p>
          </div>
          <p v-else>
            {{ price }}&nbsp;₽
          </p>
          <div
              class="__choose-size__item"
              @click="this.showSubMenu = !this.showSubMenu"
          >
            <p>
              {{chooseSize}}
            </p>
            <img
                v-if="size.length > 0"
                src="@/assets/svg/arrow_down.svg"
                alt="arrow down"
                :class="{show: showSubMenu && size.length > 0}"
            />
            <Transition name="slide-fade">
              <div
                  v-if="showSubMenu && size.length > 0"
                  class="__choose-size__sub"
              >
                <div
                    v-for="item in size"
                    :key="item.id"
                    class="__sub__item"
                    @click="chooseValue(item)"
                >
                  <p>
                    {{ item.name }}
                  </p>
                </div>
              </div>
            </Transition>
          </div>
          <p v-if="size.length === 0">
            Остался один размер
          </p>
          <div class="__choose-size__buttons">
            <input
                type="text"
            />
            <input
                type="submit"
                class="__buttons__button"
                value="в корзину"
                @click="addToCart"
            />
            <input
                v-if="$store.state.display_width > 768"
                type="submit"
                class="__buttons__button"
                value="в избранное"
                @click="toggleWish"
            />
            <button
                v-else
                type="submit"
                class="__buttons__button"
                @click="toggleWish"
            >
              <img
                  src="@/assets/svg/heart.svg"
                  alt="heart"
              />
            </button>
          </div>
          <div
              v-if="$store.state.display_width >= 1280"
              class="__choose-size__description"
          >
            <!--<p>
              размер модели:{{ chooseSize }}
            </p>-->
            <p @click="this.$store.commit('SER_SIZE_TABLE',true)">
              размерная таблица
            </p>
          </div>
        </div>
      </div>
      <div class="another__goods">
        <div class="ones__goods">
          <h2>Так же модели</h2>
          <div class="__goods__items">
            <!--            <img :src=".picture" alt="some photo">
                        <img :src=".picture" alt="some photo" v-if="$store.state.display_width > 768">-->
          </div>
        </div>
        <div class="ones__goods">
          <h2>Вам может понравится</h2>
          <div class="__goods__items">
            <!--            <img :src=".picture" alt="some photo">
                        <img :src=".picture" alt="some photo" v-if="$store.state.display_width > 768">-->
          </div>
        </div>
        <div class="ones__goods">
          <h2>Больше от {{ brand }}</h2>
          <goods-item v-for="item in $store.state.productsFromSameBrand" :key="item.id" :good="item"/>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoodsItem from "@/components/GoodsItem";
import SizeTable from "@/components/SizeTable";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  name: 'Product',
  components: {
    SizeTable,
    GoodsItem,
    Footer,
    Header,
    Swiper,
    SwiperSlide
  },
  data: () => ({
    showSubMenu: false,
    chooseSize: 'выберете размер',
    currentPrice: 0,
    currentVariationID: 0,
    inCart: false
  }),
  created() {
    this.$store.dispatch('FetchProduct', this.$route.params.id);
  },
  mounted() {
    this.currentPrice = this.product.price
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
    brand() {
      if (this.product.attributes) {
        return this.product.attributes[6].options[0];
      } else {
        return 'гружусь';
      }
    },
    description() {
      if (this.product.short_description) {
        return this.product.short_description
      } else {
        return 'гружусь';
      }
    },
    prodCountry() {
      if (this.brand !== 'гружусь') {
        return this.product.attributes[3].options[0];
      } else {
        return 'гружусь'
      }
    },
    props() {
      if (this.brand !== 'гружусь') {
        return this.product.attributes[1].options[0];
      } else {
        return 'гружусь'
      }
    },
    color() {
      if (this.brand !== 'гружусь') {
        return this.product.attributes[4].options[0];
      } else {
        return 'гружусь'
      }
    },
    article() {
      if (this.product.sku) {
        return this.product.sku;
      } else {
        return 'гружусь'
      }
    },
    price() {
      if (this.product.price) {
        return this.product.price;
      } else {
        return 'гружусь'
      }
    },
    name(){
      if (this.product.name) {
        return this.product.name;
      } else {
        return 'гружусь'
      }
    },
    size(){
      if (this.brand !== 'гружусь') {
        return this.$store.state.variations;
      } else {
        return 'гружусь'
      }
    },
    inWish() {
      let flag = false
      this.$store.state.wishlist.forEach(elem => {
        if (elem.id === this.product.id) {
          flag = true
        }
      })
      return flag
    },
    images() {
      if (this.product.images) {
        return this.product.images;
      } else {
        return null
      }
    }
  },
  watch: {
    size: function(newValue) {
      if (typeof newValue === 'object' && newValue.length === 0) {
        this.chooseSize = this.product.attributes[5].options[0]
      } else if (typeof newValue === 'object' && newValue.length > 0) {
        this.chooseSize = 'выберете размер'
      }
    },
    product: function(value) {
      if (value.price) {
        this.currentPrice = parseInt(value.price)
      }
    }
  },
  methods: {
    chooseValue(item) {
      this.currentVariationID = item.id
      this.chooseSize = item.name
      this.currentPrice = item.price
    },
    addToCart() {
      if (this.chooseSize !== 'выберете размер') {
        if (!this.inCart) {
          if (this.size.length > 0) {
            this.$store.dispatch('addToCart', {
              product_id: this.product.id,
              variation_id: this.currentVariationID,
              quantity: 1,
              name: this.product.name,
              price: parseInt(this.currentPrice),
              brand: this.brand,
              current_size: this.chooseSize,
              sku: this.article,
              image: this.product.images[0].src
            })
          } else {
            this.$store.dispatch('addToCart', {
              product_id: this.product.id,
              variation_id: this.product.id + 1,
              quantity: 1,
              name: this.product.name,
              price: parseInt(this.currentPrice),
              brand: this.brand,
              current_size: this.chooseSize,
              sku: this.article,
              image: this.product.images[0].src
            })
          }
          this.inCart = true
        }
      } else {
        this.$store.commit('ADD_STATUS', 'выберете размер')
      }
    },
    toggleWish() {
      if (!this.inWish) {
        this.$store.dispatch('addToWishList', {
          id: this.product.id,
          name: this.product.name,
          price: parseInt(this.product.price),
          brand: this.brand
        })
      } else {
        this.$store.dispatch('deleteFromWishList', this.product.id)
      }
    }
  }
}
</script>

<style scoped lang="scss">
input {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.product__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: calc(20rem / 16 + (100 - 20) * ((100vw - 768rem / 16) / (1920 - 768)));
}

.__container__size-table {
  position: relative;
  background-color: rgba(255, 255, 255, 0.98);
  z-index: 100;
}

.product {
  position: relative;
}

.product__description {
  flex: 1 1 30%;
  position: sticky;
  li {
    margin-bottom: rem(21);
  }

  h2 {
    font-family: "Partner Condensed Bold", sans-serif;
    font-size: rem(14);
  }

  p {
    font-size: rem(14);
  }
}

.mobile-description {
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(30);
}

.product__good {
  flex: 1 1 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: rem(80);
  height: 100vh;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > div {
    height: 100%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}

.product__choose-size {
  position: sticky;
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
}

.__choose-size__sub {
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid;
  z-index: 1;
  background-color: #fff;

  &:last-child {
    border-bottom: none;
  }
}

.__sub__item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding: rem(10) rem(12);

}

.__choose-size__item {
  position: relative;
  cursor: pointer;
  margin: rem(12) 0 rem(54);
  padding: rem(16) rem(22);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
  user-select: none;
}

.show {
  transform: rotateX(180deg);
}

.__choose-size__buttons {
  display: flex;
  position: relative;
  height: auto;
  margin-bottom: rem(12);

  input {
    height: rem(57);
    background-color: #ffffff;
  }

  input[type="submit"] {
    cursor: pointer;
    text-transform: uppercase;
    position: absolute;
    width: 50%;
    font-size: rem(12);
  }

  input[type="submit"]:nth-child(2) {
    background-color: #3ADD9D;
    color: white;
    left: 0;
  }

  input[type="submit"]:last-child {
    border-left: none;
    right: 0;
  }
}

.__choose-size__description {
  display: flex;
  gap: rem(33);
  font-size: rem(12);

  p:last-child {
    text-decoration: underline;
    cursor: pointer;
  }
}

.another__goods {
  margin: rem(171) 0 rem(301);
  text-transform: uppercase;

  h2 {
    margin-bottom: rem(43);
  }
}

.__goods__items {
  margin: 0 rem(-35) rem(92);
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  img {
    justify-self: center;
  }
}

@media (max-width: em(768, 16)) {
  .product__container {
    margin-top: rem(40);
    flex-direction: column-reverse;
  }
  .product__good, .__choose-size__item {
    order: 1;
  }
  .product__good {
    height: auto;
    width: 100%;
  }
  .__choose-size__description {
    justify-content: space-between;
  }
  input[type="submit"]:nth-child(2) {
    width: 80%;
  }
  input[type="submit"]:last-child {
    width: 20%;
  }
  .__choose-size__buttons button {
    position: absolute;
    width: 20%;
    right: 0;
    height: 100%;
    background: none;
    border: none;

    img {
      height: rem(30);
    }
  }
  .__goods__items {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
