<template>
  <div class="product container">
    <Header></Header>
    <Transition name="fade">
      <div class="__container__size-table" v-if="this.$store.state.sizeTable">
        <SizeTable></SizeTable>
      </div>
    </Transition>
    <main>
      <div class="product__container">
        <ul class="product__description">
          <li v-if="$store.state.display_width >= 768">
            <h2>{{ brand }}</h2>
            <div>{{ name }}</div>
          </li>
          <li><div v-html="description"></div></li>
          <li>
            <p>Страна производства: {{ prodCountry }} </p>
            <p> Состав: {{ props }} </p>
          </li>
          <li><p>Цвет: {{ color }}</p></li>
          <li><p>{{ article }}</p></li>
        </ul>
        <div class="product__good">
          <!--          <img :src=".picture" alt="some photo">-->
        </div>
        <div class="product__choose-size">
          <div class="mobile-description" v-if="$store.state.display_width <= 768">
            <div>
              <h2>{{ brand }}</h2>
              <p>{{ name }}</p>
            </div>
            <p>{{ price }}&nbsp;₽</p>
          </div>
          <p v-else>{{ price }}&nbsp;₽</p>
          <div class="__choose-size__item" @click="this.showSubMenu = !this.showSubMenu">
            <p>{{chooseSize}}</p>
            <img src="@/assets/svg/arrow_down.svg" alt="arrow down" :class="{show:this.showSubMenu}">
            <Transition name="slide-fade">
              <div class="__choose-size__sub" v-if="showSubMenu">
                <div class="__sub__item" v-for="item in size"  :key="item" @click="this.chooseSize = item">
                  <p>{{ item }}</p>
                </div>
              </div>
            </Transition>
          </div>
          <div class="__choose-size__buttons">
            <input type="text">
            <input type="submit" class="__buttons__button" value="в корзину">
            <input v-if="$store.state.display_width > 768" type="submit" class="__buttons__button" value="в избранное">
            <button v-else type="submit" class="__buttons__button">
              <img src="@/assets/svg/heart.svg" alt="">
            </button>
          </div>
          <div class="__choose-size__description" v-if="$store.state.display_width >= 1280">
            <p>размер модели:{{ chooseSize }}</p>
            <p @click="this.$store.commit('SER_SIZE_TABLE',true)">размерная таблица</p>
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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoodsItem from "@/components/GoodsItem";
import SizeTable from "@/components/SizeTable";

export default {
  name: 'Product',
  components: {SizeTable, GoodsItem, Footer, Header},
  data: () => ({
    showSubMenu: false,
    chooseSize: 'выбрать размер',
  }),
  created() {
    this.$store.dispatch('FetchProduct', this.$route.params.id);
  },
  methods: {
    clickWord(size) {
      this.chooseSize = size;
    }
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
    brand() {
      if (this.product.attributes) {
        return this.product.attributes[3].options[0];
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
      if (this.brand != 'гружусь') {
        return this.product.attributes[5].options[0];
      } else {
        return 'гружусь'
      }
    },
    props() {
      if (this.brand != 'гружусь') {
        return this.product.attributes[4].options[0];
      } else {
        return 'гружусь'
      }
    },
    color() {
      if (this.brand != 'гружусь') {
        return this.product.attributes[0].options[0];
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
      if (this.brand != 'гружусь') {
        return this.product.attributes[1].options;
      } else {
        return 'гружусь'
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

//
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
  margin-top: rem(163);
  display: flex;
  justify-content: space-between;
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
  flex: 1 1 35%;

  li {
    margin-bottom: rem(42);
  }

  h2 {
    font-family: "Partner Condensed Bold";
    font-size: rem(21);
  }

  p {
    font-size: rem(18);
  }
}

.mobile-description {
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(30);
}

.product__good {
  flex: 1 1 35%;
  display: flex;
  justify-content: center;
}

.product__choose-size {
  position: relative;
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

}

.__choose-size__sub {
  width: 100.3%;
  position: absolute;
  top: rem(55);
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
  }

  input[type="submit"]:nth-child(2) {
    background-color: #3ADD9D;
    color: white;
    border: none;
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