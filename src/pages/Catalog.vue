<template>
  <div class="catalog container">
    <Header></Header>
    <main>
      <div class="side-mobile" v-if="$store.state.display_width <= 768 && $store.state.categoriesMobileShow">
        <SiteBarMenu></SiteBarMenu>
      </div>
      <div class="catalog__main-container" :class="{mobile:$store.state.categoriesMobileShow}">
        <div class="site-bar-menu__container" v-if="$store.state.display_width > 768">
          <SiteBarMenu></SiteBarMenu>
        </div>
        <div class="catalog__container" :class="{mobile:$store.state.sortMobileShow}">
          <div>
            <h1 v-if="$store.state.display_width > 768">{{ upper }}</h1>
            <div class="filters-mobile" v-if="$store.state.display_width <= 768">
              <div class="filters-mobile__item" @click="$store.commit('SET_SORT_MOBILE_SHOW', true)">фильтры</div>
              <div class="filters-mobile__item" @click="$store.commit('SET_categories_MOBILE_SHOW', true)">категории
              </div>
            </div>
            <div class="catalog__goods" v-if="$store.state.catalog.length > 0">
              <GoodsItem v-for="good in $store.state.catalog" :key="good.id" :good="good"></GoodsItem>
            </div>
            <div class="catalog__goods" v-else>
              ТОВАРЫ ОТСУТСТВУЮТ!
            </div>
          </div>
          <div class="pagination__container" v-if="$store.state.display_width > 768">
            <PaginationPage v-if="$store.state.pagination.length >1"></PaginationPage>
          </div>
        </div>
        <ul class="catalog__sort"
            :class="{sortMobile:$store.state.display_width <= 768, show: $store.state.sortMobileShow}">
          <div class="sort-close" v-if="$store.state.display_width <= 768"
               @click="$store.commit('SET_SORT_MOBILE_SHOW', false)">закрыть
          </div>
          <h2 v-if="$store.state.display_width > 768">СОРТИРОВАТЬ ПО:</h2>
          <h2 v-else>СОРТИРОВАТЬ ПО</h2>
          <li class="__sort__item" @click="sort('desc','date',1)" :class="{sort:sortFlag == 1}">Новинки</li>
          <li class="__sort__item" @click="sort('desc','date',2)" :class="{sort:sortFlag == 2}">Цена по умолчанию</li>
          <li class="__sort__item" @click="sort('asc','price',3)" :class="{sort:sortFlag == 3}">Цена по возрастанию</li>
          <li class="__sort__item" @click="sort('desc','price',4)" :class="{sort:sortFlag == 4}">Цена по убыванию</li>
        </ul>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import SiteBarMenu from "@/components/Category/CategoryMenu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GoodsItem from "@/components/GoodsItem";
import PaginationPage from "@/components/PaginationPage";

export default {
  name: 'Catalog',
  components: {PaginationPage, Header, Footer, SiteBarMenu, GoodsItem},
  data: () => ({
    sortFlag: ''
  }),
  created() {
    this.$store.dispatch('FetchCatalog', {
      sex: this.$route.params.sex,
      page_number: 1,
      id: this.$route.params.subCategory == 'null' ? this.$route.params.category : this.$route.params.subCategory
    });
    this.$store.commit('SET_CATEGORY', this.$route.params.sex);
    if (this.$route.params.subCategory != 'null') {
      this.$store.commit('SET_SUB_CATEGORY', this.$route.params.category);
    }
  },
  computed: {
    upper() {
      return this.$store.state.currentCategory.toUpperCase()
    }
  },
  methods: {
    sort(order, orderby, count) {
      if (this.$route.params.brand == 'all-brands') {
        this.$store.dispatch('FetchCatalog', {
          sex: this.$route.params.sex,
          page_number: 1,
          id: this.$route.params.subCategory == 'null' ? this.$route.params.category : this.$route.params.subCategory,
          order: order,
          orderby: orderby
        });
      }
      else {
        this.$store.dispatch('FetchCatalog', {
          sex: this.$route.params.sex,
          page_number: 1,
          id: this.$route.params.subCategory == 'null' ? this.$route.params.category : this.$route.params.subCategory,
          order: order,
          orderby: orderby,
          attribute: 'pa_brand',
          attribute_term: this.$route.params.brand
        });
      }
      this.sortFlag = count;
    }
  }
}
</script>

<style scoped lang="scss">
.sort {
  font-family: "Partner Condensed Bold" !important;
}

main {
  position: relative;
}

.side-mobile {
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100vh;
}

.catalog__main-container {
  display: flex;
  justify-content: space-between;
  margin-top: rem(74);
}

.mobile {
  opacity: 0;
}

.site-bar-menu__container {
  flex: 1 1 20%;
}

.catalog__container {
  flex: 1 1 60%;
}

.catalog__goods {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: rem(24);
  grid-row-gap: rem(132);
  margin-top: rem(158);
}

.sort-close {
  text-transform: uppercase;
  font-size: rem(24);
  cursor: pointer;
  padding-bottom: rem(20);
  margin-bottom: rem(20);
  border-bottom: 1px solid black;
}

.catalog__sort {
  flex: 1 1 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.sortMobile {
  display: none;
  position: absolute;
  width: 100%;
  background-color: white;
}

.show {
  display: block;
}

.__sort__item {
  text-align: right;
  cursor: pointer;
}

h1 {
  font-family: "Partner Condensed Bold";
}

.pagination__container {
  display: flex;
  justify-content: center;
  margin-top: rem(300);
  margin-bottom: rem(335);
}

.filters-mobile {
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}

.filters-mobile__item {
  flex: 1 1 50%;
  text-align: center;
  font-size: rem(24);
  padding: rem(20) 0;
  text-transform: uppercase;
  cursor: pointer;

  &:first-child {
    border-right: 1px solid black;
  }
}

@media (max-width: em(724, 16)) and (min-width: em(220, 16)) {
  .catalog__goods {
    margin-top: rem(20);
    grid-template-columns: repeat(2, 1fr);
  }
  .filters-mobile {
    margin-left: calc(-0.3125rem + (-16 + 5) * ((100vw - 13.75rem) / (724 - 220)));
    margin-right: calc(-0.3125rem + (-16 + 5) * ((100vw - 13.75rem) / (724 - 220)));
  }
  .side-mobile {
    margin-top: rem(20);
  }
  .__sort__item {
    text-align: left;
    font-size: rem(24);
    text-transform: uppercase;
  }
  .catalog__sort {
    h2 {
      font-size: rem(40);
    }
  }
}
</style>
