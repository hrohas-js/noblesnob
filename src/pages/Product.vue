<template>
  <div class="product container">
    <Header></Header>
    <main>
      <div class="product__container">
        <Transition name="fade">
          <div class="__container__size-table" v-if="this.$store.state.sizeTable">
            <SizeTable></SizeTable>
          </div>
        </Transition>
        <ul class="product__description">
          <li>
            <h2>GCDS</h2>
            <p> Свитер вязки интарсия Свитер свободного кроя. <br>Высокая горловина и длинные рукава. Логотип в технике
              интарсия Tom and Jerry.</p>
          </li>
          <li>
            <p>Срана производства: Италия </p>
            <p>Состав: 50% шерсть, 50% акрил</p>
          </li>
          <li><p>Цвет: Бежевый</p></li>
          <li><p>TJ21M020001-13</p></li>
        </ul>
        <div class="product__good">
          <img :src="prerender.picture" alt="some photo">
        </div>
        <div class="product__choose-size">
          <p>{{ prerender.price }}₽</p>
          <div class="__choose-size__item" @click="this.showSubMenu = !this.showSubMenu">
            <p>выбрать размер</p>
            <img src="@/assets/svg/arrow_down.svg" alt="arrow down" :class="{show:this.showSubMenu}">
            <Transition name="slide-fade">
              <div class="__choose-size__sub" v-if="showSubMenu">
                <div class="__sub__item" @click="this.chooseSize='XS'">
                  <p>XS</p>
                  <p></p>
                </div>
                <div class="__sub__item" @click="this.chooseSize='S'">
                  <p>S</p>
                  <p></p>
                </div>
                <div class="__sub__item" @click="this.chooseSize='M'">
                  <p>M</p>
                  <p></p>
                </div>
                <div class="__sub__item" @click="this.chooseSize='L'">
                  <p>L</p>
                  <p>1 экземпляр</p>
                </div>
                <div class="__sub__item" @click="this.chooseSize='XL'">
                  <p>XL</p>
                  <p></p>
                </div>
              </div>
            </Transition>
          </div>
          <div class="__choose-size__buttons">
            <input type="text">
            <input type="submit" class="__buttons__button" value="в корзину">
            <input type="submit" class="__buttons__button" value="в избранное">
          </div>
          <div class="__choose-size__description">
            <p>размер модели:{{ chooseSize }}</p>
            <p @click="this.$store.commit('SER_SIZE_TABLE',true)">размерная таблица</p>
          </div>
        </div>
      </div>
      <div class="another__goods">
        <div class="ones__goods">
          <h2>Так же модели</h2>
          <div class="__goods__items">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
          </div>
        </div>
        <div class="ones__goods">
          <h2>Вам может понравится</h2>
          <div class="__goods__items">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
          </div>
        </div>
        <div class="ones__goods">
          <h2>Больше от GCDS</h2>
          <div class="__goods__items">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
            <img :src="prerender.picture" alt="some photo">
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
import GoodsItem from "@/components/GoodsItem";
import SizeTable from "@/components/SizeTable";

export default {
  name: 'Product',
  components: {SizeTable, GoodsItem, Footer, Header},
  data: () => ({
    showSubMenu: false,
    chooseSize: '',
  }),
  methods: {
    clickWord(size) {
      this.chooseSize = size;
    }
  },
  computed: {
    prerender() {
      return [...this.$store.state.goods].filter(elem => elem.id == this.$route.params.id)[0];
    },
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
.__container__size-table{
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

  p:last-child {
    text-transform: lowercase;
  }
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

@media (max-width: em(724, 16)) {
  .product__container {
    margin-top: rem(40);
  }
}
</style>